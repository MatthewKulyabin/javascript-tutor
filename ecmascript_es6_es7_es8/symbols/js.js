const symbol = Symbol('demo');
const other = Symbol('demo');

// console.log(symbol);
// console.log(other);

// console.log(symbol == other); // false
// console.log(symbol === other); // false

// const obj = {
// 	name: 'Elena',
// 	[symbol]: 'meta'
// };

// // console.log(obj); // {name: "Elena", Symbol(demo): "meta"}
// // console.log(obj[symbol]); // meta
// // console.log(obj[other]); // undefined

// for (let key in obj) {
// 	console.log(`${key}: ${obj[key]}`);
// } // name: Elena
//---------------------------------------
const obj = {
	name: 'Elena',
	demo: 'DEMO',
	[symbol]: 'meta'
};

// console.log(obj); // {name: "Elena", Symbol(demo): "meta"}
// console.log(obj[symbol]); // meta
// console.log(obj[other]); // undefined

// for (let key in obj) {
// 	console.log(`${key}: ${obj[key]}`);
// } // name: Elena
// 	// demo: DEMO

console.log(obj.demo); // DEMO
console.log(obj[symbol]); // meta