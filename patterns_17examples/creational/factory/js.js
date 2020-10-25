class SimpleMembership {
	constructor(name) {
		this.name = name;
		this.cost = 50;
	}
}

class StandardMembership {
	constructor(name) {
		this.name = name;
		this.cost = 150;
	}
}

class PremiumMembership {
	constructor(name) {
		this.name = name;
		this.cost = 500;
	}
}
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// Классы похожи по своим характеристикам, отличается только 'cost'
// Мы могли бы создать некоторую абстракцию, которая объединила бы все эти
// классы и сама уже определяет какой инстанс создавать в зависимости
// от типа и как раз таки это и является концептом factory
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
class MemberFactory {
	 static list = { 	// Объект, позволяющий более удобно взаимодействовать с
	 									// factory
	 	simple: SimpleMembership,
	 	standard: StandardMembership,
	 	premium: PremiumMembership
	 }

	 create(name, type) { // С помощью create мы будем создавать
	 											// какой-нибудь instance
	 		const Membership = MemberFactory.list[type]
	 										|| MemberFactory.list.simple;
	 		const member = new Membership(name);
	 		member.type = type;
	 		member.define = function() {
	 			console.log(`${this.name} (${this.type}): ${this.cost}`);
	 		};
	 		return member;
	 }
}

const factory = new MemberFactory();

const members = [
	factory.create('Matty', 'simple'),
	factory.create('Vladilen', 'premium'),
	factory.create('Elena', 'standard'),
	factory.create('Ivan', 'premium'),
	factory.create('Peter'),
];

console.log(members); /*
(3) [SimpleMembership, PremiumMembership, StandardMembership]
0: SimpleMembership {name: "Matty", cost: 50, type: "simple", define: ƒ}
1: PremiumMembership {name: "Vladilen", cost: 500, type: "premium", define: ƒ}
2: StandardMembership {name: "Elena", cost: 150, type: "standard", define: ƒ}
length: 3
__proto__: Array(0)*/

members.forEach(m => {
	m.define();
});	// Matty (simple): 50
		// Vladilen (premium): 500
		// Elena (standard): 150