// Arrow functions
// function sum(a, b) {
// 	return a + b;
// }

// function cube(a) {
// 	return a ** 3;
// }

// const sum = (a, b) => a + b;
// const cube = a => a ** 3;

// console.log(sum(41, 1)); // 42
// console.log(cube(3)); // 27
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// Lumbda function is the name
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// -------------------------------------------

// setTimeout(function() {
// 	console.log('After 1 sec');
// }, 1000);

// setTimeout(() => console.log('After 1 sec'), 1000);




// Context ====================================================================

function log() {
	console.log(this);
}

const arrowLog = () => console.log(this);

const person = {
	name: 'Elena',
	age: 20,
	log: log,
	arrowLog: arrowLog,
	delayLog: function() {
		// const self = this; // desision
		// window.setTimeout(function() {
		// 	// console.log(this.name, this.age); // undefined
		// 	// console.log(self.name, self.age); // Elena 20
		// }, 500);
		window.setTimeout(() => console.log(this.name, this.age)); // Elena 20
	}
};

person.log(); // {name: "Elena", age: 20, log: ƒ, arrowLog: ƒ}
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// this = "object" before '.' (this.log())
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
person.arrowLog(); 	// Window {parent: Window, opener: null,
										// top: Window, length: 0, frames: Window, …}
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// Creating function with 'function' makes own context
// Arrow function not creates context
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

person.delayLog(); // undefined