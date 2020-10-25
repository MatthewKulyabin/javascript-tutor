// Rest
// function average(arr) {
// 	return arr.reduce((acc, i) => acc + i, 0) / arr.length;
// }

// console.log(average([10, 20, 30, 40])); // 25
// ---------------------------
// function average() {
// 	return Array.from(arguments).reduce((acc, i) => acc + i, 0) / arguments.length;
// }

// console.log(average(10, 20, 30, 40, 50, 60)); // 35
// ---------------------------
// function average(...args) {
// 	return args.reduce((acc, i) => acc + i, 0) / args.length;
// }

// console.log(average(10, 20, 30, 40, 50, 60, 70, 80)); // 45
// ---------------------------
// function average(a, b, ...args) {
// 	return args.reduce((acc, i) => acc + i, 0) / args.length;
// }

// console.log(average(10, 20, 30, 40, 50, 60, 70, 80)); // 45
//								  a, 	b,  ...args
// ---------------------------

// Spread
// const array = [1, 1, 2, 3, 5, 8, 13];
// console.log(array); // (7) [1, 1, 2, 3, 5, 8, 13]
// -------------------------

// const array = [1, 1, 2, 3, 5, 8, 13];
// console.log(...array); // 1 1 2 3 5 8 13
// console.log(Math.max(array)); // NaN
// console.log(Math.max(...array)); // 13
// console.log(Math.min(...array)); // 1
// -------------------------------------------------
// console.log(Math.max.apply(null, array)); // 13
// console.log(Math.min.apply(null, array)); // 1
// -------------------------------------------------
// const fib = [...array, 21];
// console.log(fib); // (8) [1, 1, 2, 3, 5, 8, 13, 21]
// -------------------------------------------------

// Destructuring
const array = [1, 1, 2, 3, 5, 8, 13];

// // const a = array[0];
// // const b = array[1];
// // console.log(a, b); // 1 1
// // ----------------------------
// // array[1] = undefined;
// const [a, b = 42, ...c] = array
// console.log(a, b, c); // 1 1 (5) [2, 3, 5, 8, 13]
// // console.log(a, b, c); // 1 42 (5) [2, 3, 5, 8, 13
// ---------------------------------

// const [a,, c] = array
// console.log(a, c);
// ---------------------------------

// Object
const address = {
	country: 'Russia',
	city: 'Moscow',
	// street: 'Lenina',
	concat() {
		return `${this.country} ${this.city} ${this.street}`
	}
};
// console.log(address.concat()); // Russia Moscow Lenina
// ------------------------------------
// const {city, country, street: 'tobolskaya', concat: addressConcat} = address;
// console.log(city, country, street); // Moscow Russia Lenina
// console.log(addressConcat.call(address)); // Russia Moscow Lenina
// ------------------------------------
// const {city, ...rest} = address;
// console.log(city, rest); // Moscow {country: "Russia", concat: ƒ}
// ------------------------------------
// const newAddress = {...address};
// console.log(newAddress); // {country: "Russia", city: "Moscow", concat: ƒ}
// ------------------------------------
// const newAddress = {...address, street: 'Tobolskaya', code: 123};
// console.log(newAddress); // {country: "Russia", city: "Moscow",
// 												 // street: "Tobolskaya", code: 123, concat: ƒ}