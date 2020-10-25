const cityField = 'city';
const job = 'Down'

const person = {
	name: 'Matty',
	age: 18,
	//job: job, // old thing
	job, // new thing === job: job
	[cityField + Date.now()]: 'Shiiiiiiit',//new thing.Thekeyis city1600562570250
	'country-live': 'Ass',
	print: () => 'Person', // Arrow function new === no this
	toString() { // new; old === toString: function() {
		return Object
			.keys(this)
			.filter(key => key !== 'toString')
			.map(key => this[key])
			.join(' ');
	}
}

// console.log(person.toString());
// console.log(person.print()); // Person
// -----------------------------------

// Methods
const first = {a: 1};
const second = {b: 2};

// console.log(Object.is(20, 10)); // false
// console.log(Object.is(20, 20)); // true
// console.log(Object.is(20, '20')); // false
// ------------------------------------
// console.log(Object.assign(first, second)); // {a: 1, b: 2}
// console.log(first); // {a: 1, b: 2}
// ------------------------------------
// console.log(Object.assign({}, first, second)); // {a: 1, b: 2}
// console.log(first); // {a: 1}
// ------------------------------------
// console.log(Object.assign({}, first, second, {
// 	c: 2,
// 	d: 3
// })); // {a: 1, b: 2, c: 2, d: 3}
// ------------------------------------
const obj = Object.assign({}, first, {
	c: 2,
	d: 3
});
// console.log(obj); // {a: 1, c: 2, d: 3}
// ------------------------------------

console.log(Object.entries(obj)); /*
(3) [A
rray(2), Array(2), Array(2)]
	0: (2) ["a", 1]
	1: (2) ["c", 2]
	2: (2) ["d", 3]
	length: 3
	__proto__: Array(0)*/
console.log(Object.keys(obj)); // (3) ["a", "c", "d"]
console.log(Object.values(obj)); // (3) [1, 2, 3]