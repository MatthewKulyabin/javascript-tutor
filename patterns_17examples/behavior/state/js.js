// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// Мы можем создавать какие-то различные классы, к-е будут являться например
// элементами state'а и мы можем дилегировать изменение состояния этих классов 
// на какой-нибудь общий класс, к-й будет являться state'ом к-й будет менять
// внутреннее состояние этих вот отдельных элементов
// И вся логика будет построена имеено вот на верхне уровневом классе, к-й 
// будет менять внутреннее значение
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
class Light {
	constructor(light) {
		this.light = light;
	}
}

class RedLight extends Light {
	constructor() {
		super('red');
	}

	sign() {
		return 'STOP';
	}
}

class YellowLight extends Light {
	constructor() {
		super('yellow');
	}

	sign() {
		return 'ATTENTION';
	}
}

class GreenLight extends Light {
	constructor() {
		super('green');
	}

	sign() {
		return 'GO';
	}
}

class TrafficLight {
	constructor() {
		this.states = [
			new GreenLight(),
			new YellowLight(),
			new RedLight(),
		];
		this.current = this.states[0];
	}

	change() {
		const total = this.states.length
		let index = this.states.findIndex(light => light === this.current);

		if (index + 1 < total) {
			this.current = this.states[index + 1];
		} else {
			this.current = this.states[0];
		}
	}

	sign() {
		return this.current.sign();
	}
}

const traffic = new TrafficLight();
console.log(traffic.current); // GreenLight {light: "green"}
console.log(traffic.sign()); // GO
traffic.change();
console.log(traffic.current); // YellowLight {light: "yellow"}
console.log(traffic.sign()); // ATTENTION
traffic.change();
console.log(traffic.current); // RedLight {light: "red"}
console.log(traffic.sign()); // STOP