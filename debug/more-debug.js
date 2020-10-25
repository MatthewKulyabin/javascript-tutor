const people = [
	{id: 1, name: 'Vladilen', age: 20},
	{id: 2, name: 'Elena', age: 20},
	{id: 3, name: 'Igor', age: 20},
	{id: 4, name: 'Vasilisa', age: 20},
];

console.table(people);

console.time('timer');
const items = [];
for (let i = 0; i < 10000000; i++) {
	items.push({el: i + 1});
}
console.timeEnd('timer');