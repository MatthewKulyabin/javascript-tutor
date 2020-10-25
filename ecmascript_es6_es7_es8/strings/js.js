// const template = `<h1>Title</h1>`;

// console.log(template); <h1>Title</h1>
// -------------------

// const title = 'Hello'

// const template = `<h1 id='demo' style="color:red">${title}</h1>`;

// console.log(template); // <h1 id='demo' style="color:red">${title}</h1>
// -------------------

// const isVisible = () => Math.random() > 0.5;

// const title = 'Hello';

// const template = `
// 	${isVisible() ? `<p>Visible</p>` : ''}
// 	<h1 id='demo' style="color:red">${title}</h1>
// `;

// console.log(template); 	/*

// 	<p>Visible</p>
// 	<h1 id='demo' style="color:red">Hello</h1> */
// 												/*
	

// 	<h1 id='demo' style="color:red">Hello</h1>*/
// ----------------------------------

// Methods
const str = 'Hello';

// console.log(str.startsWith('He')); // true
// console.log(str.startsWith('e')); // false
// console.log(str.endsWith('lo'));	// true
// console.log(str.endsWith('e')); // false

// console.log(str.includes('ell')); // true

// console.log(str.repeat(4)); // HelloHelloHelloHello

// console.log(str.trim()); // Hello
// console.log(str.trimEnd()); //             Hello
// console.log(str.trimStart()); // Hello

// console.log(str.padStart(9, '1234')); // 1234Hello
// console.log(str.padEnd(9, '1234')); // Hello1234
// String.padStart||End(length, text); // Determinates minimal length of the String
// and fill empty space with optinal text
