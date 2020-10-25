// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// Это дизайн паттерн, к-й в первую очередь позволяет выстраивать очень
// плотную и тесную коммуникацию между различными объектами разного типа
// При этом он представляет собой некую централизованную абстракцию, к-я
// позволяет взаимодействовать группе объектов через друг друга 
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
class User {
	constructor(name) {
		this.name = name;
		this.room = null;
	}

	send(message, to) {
		this.room.send(message, this, to);
	}

	receive(message, from) {
		console.log(`${from.name} => ${this.name}: ${message}`);
	}
}

class ChatRoom {
	constructor() {
		this.users = {};
	}

	register(user) {
		this.users[user.name] = user;
		user.room = this;
	}

	send(message, from, to) {
		if (to) {
			to.receive(message, from);
		} else {
			Object.keys(this.users).forEach(key => {
				if (this.users[key] !== from) {
					this.users[key].receive(message, from);
				}
			});
		}
	}
}

const user1 = new User('Matty');
const user2 = new User('Vladilen');
const chatRoom = new ChatRoom();
chatRoom.register(user1);
chatRoom.register(user2);

user1.send('Hey, Vladilen', user2);
user2.send('Hey, Matty', user1);