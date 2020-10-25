// // Let =====================================================================
// let a = 'Variable a';
// let b = 'Variable b';
// {
// 	a = 'New Variable A';
// 	let b = 'Local Variable B';
// 	console.log('a from scope:', a); // a from scope: New Variable A
// 	console.log('b from scope:', b); // b from scope: Local Variable B
// 	// console.log('c from scope:', c); // Cannot access 'c' before initialization
// 	// let c = 'Something';
// }
// console.log('a:', a); // a: New Variable A
// console.log('b:', b); // b: Variable b
// -------------------------------------------------------------------------

// Const ======================================================================
// const PORT = 8080;
// // PORT = 2000; // Assignment to constant variable.
// const array = ['Javascript', 'is', 'awesome '];
// array.push('!');
// array[0] = 'JS';
// console.log(array); // [ 'JS', 'is', 'awesome ', '!' ]
// --------------------------------------------------
const obj = {};
obj.name = 'Matty';
obj.age = 18;
console.log(obj); // { name: 'Matty', age: 18 }
obj.age = 19;
console.log(obj); // { name: 'Matty', age: 19 }