class Person {
	static type = 'Human';
	static #area = 'EARTH';
	name = 'unknown name';
	#year = 1993;

	constructor(name) {
		this.name = name;
	}

	static location() {
		return Person.#area;
	}

	get age() {
		return new Date().getFullYear() - this.#year;
	}

	set age(age) {
		if (age > 0) {
			this.#year = new Date().getFullYear() - age;
		}
	}
}

const person = new Person('Max');
console.log(person);
console.log(person.year);
console.log(person.age);
person.age = 26;
console.log(person.age);
console.log(Person.type);
console.log(Person.location());
