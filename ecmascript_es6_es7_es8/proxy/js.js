const validator = {
	get(target, prop) {
		return prop in target ? target[prop] : `No ${prop} in target`;
	},

	set(target, prop, value) {
		if (value.length > 2) {
			Reflect.set(target, prop, value);
		} else {
			console.log(`The length of ${value} must be more than 2 symbols`);
		}
	}
}

const form = {
	login: 'tester',
	password: '12345'
};

const formProxy = new Proxy(form, validator);

// console.log(formProxy); // Proxy {login: "tester", password: "12345"}
// console.log(formProxy.login); // tester
// console.log(formProxy.password); // 12345
// console.log(formProxy.username); // No username in target

// formProxy.password = '123';
// console.log(formProxy); // Proxy {login: "tester", password: "123"}
// formProxy.password = '12'; // The length of 12 must be more than 2 symbols
// -------------------------------------------------
function log(message) {
	console.log('[Log]: ', message);
}

const proxyLog = new Proxy(log, {
	apply(target, thisArg, argArray) {
		if (argArray.length === 1) {
			Reflect.apply(target, thisArg, argArray)
		} else {
			console.log('Number of args not suit');
		}
	}
});

proxyLog(1); // [Log]:  1
proxyLog(1, 2); // Number of args not suit
proxyLog(); // Number of args not suit