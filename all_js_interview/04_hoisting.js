// console.log(sum(1, 41)); // Можем вызвать до определения

// function sum(a, b) {
// 	return a + b;
// }
// -------------------------------------
// console.log(i); // undefined
// var i = 42;
// console.log(i); // 42
// -------------------------------------
// var i;
// console.log(i); // undefined
// var i = 42;
// console.log(i); // 42
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// let и const не подвержены hoisting'у
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// console.log(num); // ReferenceError: Cannot access 'num' before initialization
// const num = 42;
// console.log(num);
// ----------------------------------------
// Function Expression & Function Declaration =================================
// console.log(square(25)); // 625

// function square(num) { // Function Declaration
// 	return num ** 2;
// }
// ----------------------------------------
console.log(square(25));	// ReferenceError: Cannot access 'square' before 
													// initialization
const square = function(num) { // Function Expression
	return num ** 2;
}