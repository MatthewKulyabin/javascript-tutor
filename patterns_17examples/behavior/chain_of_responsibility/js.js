// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// Поведенчиские дизайн паттерны позволяют нам улучшить коммуникацию между
// объектами разного типа и конкретно, если говорить о
// Chain of Responsibility, то это такой паттерн, к-й позволяет последовательно
// у одного и того же объекта вызывать какой-то набор операций и тем самым
// просто последовательно их модифицировать
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
class MySum {
	constructor(initialValue = 42) {
		this.sum = initialValue;
	}

	add(value) {
		this.sum += value;
		return this;
	}
}

const sum1 = new MySum();
console.log(sum1.add(5)); // MySum {sum: 47}
console.log(sum1.add(5).add(10).add(15).add(20).sum); // 97

const sum2 = new MySum(0);
console.log(sum2.add(5).add(10).add(15).add(20).sum); // 50