// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// По сути, template design pattern очень простой
// Также относится к непосредственно behavior design patterns
// И он определяет некоторый скелет будущего алгоритма, но при этом он
// делигирует создание конкретного функционала уже в дочерние классы
// то есть он определяет некоторую структуру, а дочерние классы уже 
// реализовывают конкретный функционал, при этом не изменяя определение 
// базового класса
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
class Employee {
	constructor(name, salary) {
		this.name = name;
		this.salary = salary;
	}

	responsabilities() { }

	work() {
		return `${this.name} does ${this.responsabilities()}`
	}

	getPaid() {
		return `${this.name} has ${this.salary} in month`;
	}
}

class Developper extends Employee {
	constructor(name, salary) {
		super(name, salary);
	}

	responsabilities() {
		return 'prossesing of creating programms';
	}
}

class Tester extends Employee {
	constructor(name, salary) {
		super(name, salary);
	}

	responsabilities() {
		return 'prossesing of testing programms';
	}
}

const mattyDev = new Developper('Matty', 100000);
const andrewTest = new Tester('Andrew', 100000);
// console.log(mattyDev.getPaid()); // Matty has 100000 in month
// console.log(andrewTest.getPaid()); // Andrew has 100000 in month
console.log(mattyDev.work()); // Matty does prossesing of creating programms
console.log(andrewTest.work()); // Andrew does prossesing of testing programms