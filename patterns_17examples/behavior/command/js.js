// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// Допустим у нас есть некоторый класс, к-й содержит в себе определённый набор
// функционала
// Command pattern позволяет создавать определённую обстракнтную оболочку над
// функционалом, к-й позволяет управлять, но уже через другой объект, и тем
// самым записывая определённые состояния, к-е были вызваны
// 
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
class MyMath {
	constructor(initialValue = 0) {
		this.num = initialValue;
	}

	square() {
		return this.num ** 2;
	}

	cube() {
		return this.num ** 3;
	}
}

class Command {
	constructor(subject) {
		this.subject = subject;
		this.commandsExecuted = [];
	}

	execute(command) {
		this.commandsExecuted.push(command);
		return this.subject[command]();
	}
}

const x = new Command(new MyMath(2));

console.log(x.execute('square')); // 4
console.log(x.execute('cube')); // 8

console.log(x.commandsExecuted); // (2) ["square", "cube"]