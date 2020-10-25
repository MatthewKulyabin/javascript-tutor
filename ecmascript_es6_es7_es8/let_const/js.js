// Let const
// var num = 42;

// num = 'str';

// console.log(num);
// --------------------
// if (true) {
// 	var a = 42;
// }

// console.log(a);

// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// Using 'var' we can use the variable behind a scope
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

// --------------------
// if (true) {
// 	let a = 42;
// }

// console.log(a); // a is not defined
// --------------------
// let a = 24;

// if (true) {
// 	let a = 42;

// 	console.log('a inside if: ',a); // a inside if: 42
// }

// console.log(a); // 24
//----------------------

// Hoisting

// console.log(b); // undefined

// var b = 10;
// -------------------------

// b = 20;

// console.log(b); // 20

// var b = 10;
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// we can apply to b before declaration
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// -------------------------

// b = 20;

// console.log(b); // Cannot access 'b' before initialization

// let b = 10;
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// We can't apply to variables before initialization with let
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
//-----------------------------

// function hoisted() {
// 	age = 26;
// }

// let age;
// hoisted();
// console.log(age); // 26
// --------------------------------




// Const ======================================================================
// const COLOR = '#ffeebb';
// // COLOR = '#000000'; // Assignment to constant variable.
// console.log(COLOR); // #ffeebb

// const array = [1, 1, 2, 3, 5, 8];
// // array = 23; // Assignment to constant variable.

// console.log(array); // (6) [1, 1, 2, 3, 5, 8]

// array.push(13);

// console.log(array); // (7) [1, 1, 2, 3, 5, 8, 13]
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// We can change constanted arrays INSIDE
// We can not change the variable array like this 'array = something'
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// -------------------------------------------

// const obj = { a: 42 };
// // obj = 123; // Assignment to constant variable.
// obj.name = 'Matty'; // No error like with arrays

// console.log(obj); // {a: 42, name: "Matty"}