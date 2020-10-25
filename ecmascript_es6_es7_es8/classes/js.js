class Person {
	type = 'human';

	constructor(name) {
		this.name = name;
	}

	greet() {
		console.log(this.name, 'says hello');
	}
}

// const matty = new Person('Matty');
// matty.greet(); // Matty says hello
// console.log(matty.type); // human
// --------------------
// console.log(matty.__proto__ === Person.prototype); // true
// --------------------
class Programmer extends Person {
	constructor(name, job) {
		super(name);
		this._job = job;
	}

	get job() {
		return this._job.toUpperCase();
	}

	set job(job) {
		if (job.length < 2) {
			throw new Error('Validation failed');
		}
		this._job = job;
	}

	greet() {
		super.greet();
		console.log('Rewritten');
	}
}
const frontend = new Programmer('Matty', 'Frontend');
// console.log(frontend);	// Programmer {type: "human", 
// 												// name: "Matty", _job: "Frontend"}
// frontend.greet(); 			// Matty says hello
// 												// Rewritten
// console.log(frontend.job); // "FRONTEND"
frontend.job = 'Backend';
// console.log(frontend.job); // Backend
// ----------------------------------------
// Static =====================================================================
// class Util {
// 	average(...args) {
// 		return args.reduce((total, item) => total + item, 0) / args.length;
// 	}
// }

// const util = new Util();
// console.log(util.average(1, 1, 2, 3, 5, 8, 13, 21)); // 6.75

class Util {
	static average(...args) {
		return args.reduce((total, item) => total + item, 0) / args.length;
	}
}

console.log(Util.average(1, 1, 2, 3, 5, 8, 13, 21)); // 6.75