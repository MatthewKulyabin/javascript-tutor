// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// Каждый объект имеет свой прототип, к-й берётся от родительского элемента
// от к-го был создан данный объект
// Чтобы получить родительский прототип -> __proto__
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// function Cat(name, color) {
// 	this.name = name;
// 	this.color = color;
// }

// Cat.prototype.voice = function() {
// 	console.log(`Cat ${this.name} says meow`);
// }

// const cat = new Cat('CAT', 'black');
// console.log(Cat.prototype); // { voice: [Function (anonymous)] 
// console.log(cat); // Cat { name: 'CAT', color: 'black' }
// console.log(cat.__proto__); // { voice: [Function (anonymous)] }
// console.log(cat.__proto__ === Cat.prototype); // true
// console.log(cat.constructor); // [Function: Cat]
// cat.voice(); // Cat CAT says meow
// ----------------------------------------------------------------------------
function Person() {}
Person.prototype.legs = 2;
Person.prototype.skin = 'white';

const person = new Person();
person.name = 'Matty';

// console.log('skin' in person); // true
// console.log(person.legs); // 2
// console.log(person.eyes); // undefined
// console.log(person.name); // Matty

console.log(person.hasOwnProperty('name')); // true
console.log(person.hasOwnProperty('skin')); // false
// ----------------------------------------------------------------------------
// Object.create() ============================================================
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// Позволяет нам создавать некоторые объекты, используя уже существующий
// прототип
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
const proto = {year: 2020};
const myYear = Object.create(proto, );

console.log(myYear.year); // 2020

proto.year = 2021;

console.log(myYear.year); // 2021
// console.log(myYear.hasOwnProperty('year')); // false
// console.log(myYear.__proto__ === proto); // true