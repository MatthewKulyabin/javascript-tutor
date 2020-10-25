// const person = {
// 	surname: 'Stark',
// 	knows(what, name) {
// 		console.log(`You know ${what}, ${name} ${this.surname}`);
// 	}
// };

// const john = { surname: 'Snow' };

// person.knows('everything', 'Bran'); // You know everything, Bran Stark
// person.knows.apply(john, ['nothing', 'John']); // You know nothing, John Snow
// ----------------------------------------------------------------------------
// Явный
// function Person(name, age) {
// 	this.name = name;
// 	this.age = age;

// 	console.log(this);
// }

// const elena = new Person('Elena', 20); // Person { name: 'Elena', age: 20 }
// ----------------------------------------------------------------------------
// Неявный
// function logThis() {
// 	console.log(this);
// }
// const obj = {num: 42};
// // logThis.apply(obj); // { num: 42 }
// const animal = {
// 	legs: 4,
// 	logThis() {
// 		console.log(this);
// 	}
// }
// animal.logThis(); // { legs: 4, logThis: [Function: logThis] 

function Cat(color) {
	this.color = color;
	console.log('This', this);
	( () => console.log('Arrow this', this) )
}

new Cat('red'); // This Cat { color: 'red' }