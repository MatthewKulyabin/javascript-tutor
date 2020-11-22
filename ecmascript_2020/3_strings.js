const start = '          Hello YouTube ';
const end = 'This is new JavaScript features      ';

// console.log(start.trimStart() + end.trimEnd());
// console.log((start + end).trim());

// console.log('vk'.padStart(6, 'www.'));
// console.log('vk'.padStart(16, 'www.'));
// console.log('vk'.padStart(16));
// console.log('vk'.padStart(6, 'www.').padEnd(9, '!'));

function tag(strings, name, age) {
	// console.log(strings, name, age);
	return `${strings[0].trim()} ${name} ${strings[1].trim()} ${age}`
}

const person = {
	name: 'Max',
	age: 30,
};


const output = tag`Person with name ${person.name} is ${person.age}`;

console.log(output);
