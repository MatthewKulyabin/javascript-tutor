// const array = [10, 20, 30, 40];
// const str = 'Hello';

// console.log(array[Symbol.iterator]); // ƒ values() { [native code] }
// console.log(str[Symbol.iterator]); // ƒ [Symbol.iterator]() { [native code] }

// const iter = array[Symbol.iterator]();

// console.log(iter.next()); // {value: 10, done: false}
// console.log(iter.next()); // {value: 20, done: false}
// console.log(iter.next()); // {value: 30, done: false}
// console.log(iter.next()); // {value: 40, done: false}
// console.log(iter.next()); // {value: undefined, done: true}

// const iter = str[Symbol.iterator]();

// console.log(iter.next()); // {value: 'H', done: false}
// console.log(iter.next()); // {value: 'e', done: false}
// console.log(iter.next()); // {value: 'l', done: false}
// console.log(iter.next()); // {value: 'l', done: false}
// console.log(iter.next()); // {value: 'o', done: false}
// console.log(iter.next()); // {value: undefined, done: true}

// for (let item of array) {
// 	console.log(item);
// } // 10
//   // 20
//   // 30
//   // 40

// for (let item of str) {
// 	console.log(item);
// } // H
//   // e
//   // (2)l
//   // o

// const countries = {
// 	values: ['ru', 'kz', 'us', 'by'],
// 	[Symbol.iterator]() {
// 		let i = 0;
// 		return {
// 			next:() => {
// 				if (i < this.values.length) {
// 					return {value: ++i, done: false};
// 				}
// 					return {value: undefined, done: true};
// 			}
// 		};
// 	}
// };
// ------------------------------------------------------
// Generator ==================================================================
// function* gen(num = 4) {
// 	for (let i = 0; i < num; i++) {
// 		yield i;
// 	}
// }

// const iter = gen(3);
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// ------------------------------
// for (let i of gen(4)) {
// 	console.log(i);
// }
// ------------------------------
function* gen(num = 4) {
	for (let i = 0; i < num; i++) {
		try {
			yield i;
		} catch(e) {
			console.log('Error:', e); // Error: My error
		}
	}
}

const iter = gen(3);
console.log(iter.next()); // {value: 0, done: false}
console.log(iter.throw('My error')); // {value: 1, done: false}
console.log(iter.next()); // {value: 2, done: false}
console.log(iter.next()); // {value: undefined, done: true}
console.log(iter.next()); // {value: undefined, done: true}