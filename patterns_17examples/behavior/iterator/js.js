// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// Идея: мы создаём какой-то объект или в нашем случае класс у к-го мы сможем
// последовательно получать доступ до определённой информации, поэтому он
// и называется iterator
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
class MyIterator {
	constructor(data) {
		this.index = 0;
		this.data = data;
	}

	[Symbol.iterator]() {
		return {
			next: () => {
				if (this.index < this.data.length) {
					return {
						value: this.data[this.index++],
						done: false,
					}
				}
					return {
						value: undefined,
						done: true,
					}
			}
		}
	}
}

function* generator(collection) {
	let index = 0;

	while (index < collection.length) {
		yield collection[index++];
	}
}

const iterator = new MyIterator(['This', 'is', 'iterator']);
const gen = generator(['This', 'is', 'iterator']);

/*for (const val of iterator) {
	console.log(val);
} /*This
		is
		iterator*/

/*for (const val of gen) {
	console.log(val);
} /*This
		is
		iterator*/
console.log(gen.next().value); // This
console.log(gen.next().value); // is
console.log(gen.next().value); // iterator
console.log(gen.next().value); // undefined