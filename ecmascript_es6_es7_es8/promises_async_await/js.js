// const p = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve('Success');
// 	}, 500);
// })

const delay = ms => new Promise((resolve, reject) => {
	setTimeout(() => resolve('Done! ' + ms), ms);
})

// delay(500)
// 	.then(data => delay(500))
// 	.then(data => delay(500))
// 	.then(data => console.log(data))
// 	.then(err => console.error(err))
// 	.finally(() => console.log('Finally'));

// async function asyncDelay() {
// 	try {
// 		const data = await delay(500);
// 		console.log(data);
// 		console.log('Hello');
// 	} catch(e) {
// 		console.log(e);
// 	}
// }

// asyncDelay();
// -----------------------------------

// Promise.all([
// 	delay(1000),
// 	delay(500),
// 	delay(2000)
// ]).then(data => console.log(data)); // (3) ["Done! 1000", "Done! 500", "Done! 2000"]
// -----------------------------------
Promise.race([
	delay(1000),
	delay(500),
	delay(2000)
]).then(data => console.log(data)); // Done! 500