// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// Идея: существует какой-то класс в приложении, например, и в приложении может
// быть только один инстанс данного класса
// Реальным примером может быть работа с БД
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
class Database {
	constructor(data) {
		if (Database.exists) {
			return Database.instance;
		}
		Database.instance = this;
		Database.exists = true;
		this.data = data;
	}

	getData() {
		return this.data;
	}
}

const mongo = new Database('MongoDB'); // MongoDB
console.log(mongo.getData());

const mysql = new Database('MySQL'); // MongoDB
console.log(mysql.getData());
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// Всегда используем один инстанс у Database
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;