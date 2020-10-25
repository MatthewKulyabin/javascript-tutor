// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// Структурные дизайн паттерны это те патерны, к-е позволяют уже в существующее
// какое-то приложение внедрить новый функционал при этом не ломая прошлый
// Позволяет инегрировать старый интерфейс какого-то класс в новый интерфейс и
// позволяет им работать совместно не ломая всё приложение
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
class OldCalc {
	operations(t1, t2, operation) {
		switch (operation) {
			case 'add': return t1 + t2;
			case 'sub': return t1 - t2;
			default: return NaN;
		}
	}
}

class NewCalc {
	add(t1, t2) {
		return t1 + t2;
	}

	sub(t1, t2) {
		return t1 - t2;
	}
}
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// Наш класс adapter позволит скомбинировать функционал первого класса и
// второго класса получив при этом высшую абстракцию
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
class CalcAdapter {
	constructor() {
		this.calc = new NewCalc();
	}

	operations(t1, t2, operation) {
		switch (operation) {
			case 'add': return this.calc.add(t1, t2);
			case 'sub': return this.calc.sub(t1, t2);
			default: return NaN;
		}
	}
}

const oldCalc = new OldCalc();
console.log(oldCalc.operations(10, 5, 'add')); // 15

const newCalc = new NewCalc();
console.log(newCalc.add(10, 5)); // 15

const calcAdapter = new CalcAdapter();
console.log(calcAdapter.operations(10, 5, 'add')); // 15