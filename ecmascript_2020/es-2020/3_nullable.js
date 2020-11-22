const values = {
	undefined: undefined,
	null: null,
	false: false,
	zero: 0,
	empty: '',
};

console.log(values.undefined || 'defauld undefined');
console.log(values.undefined ?? 'defauld undefined');

console.log(values.null || 'defauld null');
console.log(values.null ?? 'defauld null');

console.log(values.false || 'defauld false');
console.log(values.false ?? 'defauld false');

console.log(values.zero || 'defauld zero');
console.log(values.zero ?? 'defauld zero');

console.log(values.empty || 'defauld empty');
console.log(values.empty ?? 'defauld empty');
