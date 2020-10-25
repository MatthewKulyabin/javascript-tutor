const car = {
	wheels: 4,

	init() {
		console.log(`I've got ${this.wheels}, my owner is ${this.owner}`);
	}
}
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// Мы можем создавать новые объекты, к-е в кач-ве прототипа будут использовать
// car
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
const carWithOwner = Object.create(car, {
	owner: {
		value: 'Matty',
	}
});

console.log(carWithOwner.__proto__ === car); // true

carWithOwner.init(); // I've got 4, my owner is Matty
console.log(carWithOwner); /* 
{owner: "Matty"}
	owner: "Matty"
	__proto__:
		init: ƒ init()
		wheels: 4
			__proto__: Objec */