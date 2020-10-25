// class Student {
// 	constructor(name) {
// 		this.name = name
// 	}

// 	greet() {
// 		console.log(`Hey, I'm ${this.name}`);
// 	}
// }

// // const student = new Student('Matty') 
// const student = Reflect.construct(Student, ['Matty']);

// console.log(student); // Student {name: "Matty"}

// class Student {
// 	constructor(name) {
// 		this.name = name
// 	}

// 	greet() {
// 		console.log(`Hey, I'm ${this.name}`);
// 	}
// }

// class ProtoStudent {
// 	university = 'Oxford'
// }

// // const student = new Student('Matty') 
// const student = Reflect.construct(Student, ['Matty'], ProtoStudent);

// console.log(student); // ProtoStudent {name: "Matty"}
// console.log(student.__proto__ === Student.prototype); // false
// console.log(student.__proto__ === ProtoStudent.prototype); // true
// -----------------------------------------------------------------
// class Student {
// 	constructor(name) {
// 		this.name = name
// 	}

// 	greet() {
// 		console.log(`Hey, I'm ${this.name}`);
// 	}
// }

// // const student = new Student('Matty') 
// const student = Reflect.construct(Student, ['Matty']);

// // console.log(student); // Student {name: "Matty"}
// Reflect.apply(student.greet, {name: 'Tester'}, []); // Hey, I'm Tester
// 							// Method			// Context			// Arguments for greet
// console.log(Reflect.ownKeys(student)); // ["name"]

// student.age = 25;

// console.log(student); // Student {name: "Matty", age: 25}
// ------------------------------------------------------------------------
class Student {
	constructor(name) {
		this.name = name
	}

	greet() {
		console.log(`Hey, I'm ${this.name}`);
	}
}

// const student = new Student('Matty') 
const student = Reflect.construct(Student, ['Matty']);

// console.log(student); // Student {name: "Matty"}
// Reflect.apply(student.greet, {name: 'Tester'}, []); // Hey, I'm Tester
							// Method			// Context			// Arguments for greet
// console.log(Reflect.ownKeys(student)); // ["name"]

Reflect.preventExtensions(student);

student.age = 25;

console.log(Reflect.isExtensible(student)); // false

console.log(student); // Student {name: "Matty"}