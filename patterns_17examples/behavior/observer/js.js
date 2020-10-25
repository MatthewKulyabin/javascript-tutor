// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// По сути, данный дизайн паттерн, он формирует зависимость один ко многим
// по англ. one to independences
// Идея в том, что по сути у нас есть некоторый объект, один, у к-го мы можем 
// стриггерить вызов изменений
// Дальше все другие объекты, к-е подписаны на эти изменения они получают эти
// обновления и делают какой-то свой функционал.
// Данный дизайн паттерн может называться по-разному, может называться нетолько
// observer, но и publisher subscriber, listener
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
class Subject {
	constructor() {
		this.observers = [];
	}

	subscribe(observer) {
		this.observers.push(observer);
	}

	unsubscribe(observer) {
		this.observers = this.observers.filter(obs => obs !== observer);
	}

	fire(action) {
		this.observers.forEach(observer => {
			observer.update(action);
		});
	}
}

class Observer {
	constructor(state) {
		this.state = state;
		this.initialState = state;
	}

	update(action) {
		switch (action.type) {
			case 'INCREMENT':
				this.state = ++this.state;
				break;
			case 'DECREMENT':
				this.state = --this.state;
				break;
			case 'ADD':
				this.state += action.payload;
				break;
			default: 
				this.state = this.initialState;
		}
	}
}

const stream$ = new Subject();

const obs1 = new Observer(1);
const obs2 = new Observer(42);

stream$.subscribe(obs1);
stream$.subscribe(obs2);
stream$.fire({type: 'ADD', payload: 10});
console.log(obs1); // Observer {state: 11, initialState: 1}
console.log(obs2); // Observer {state: 52, initialState: 42}