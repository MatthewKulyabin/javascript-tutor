const map = new Map(
	[['a', 1]]
);

// console.log(map); // Map(1) {"a" => 1}
// console.log(map.get('a')); // 1
map
	.set('b', 2)
	.set(NaN, 'Not a Number');
// console.log(map); // Map(3) {"a" => 1, "b" => 2, NaN => "Not a Number"}
// console.log(map.get(NaN)); // Not a Number
// get(), set(), has(), size, clear(), delete()
// ------------------------------------------------
// console.log(map.keys()); // MapIterator {"a", "b", NaN}
// console.log(map.entries()); // MapIterator {"a" => 1, "b" => 2, NaN => "Not a Number"}
// console.log(map.values()); // MapIterator {1, 2, "Not a Number"}
// ------------------------------------------------

// Set ========================================================================
const set = new Set([1, 1, 2, 3, 5, 8, 1, 1, 2, 3, 5]);
console.log(set); // Set(5) {1, 2, 3, 5, 8}
// add(), size, clear(), delete()
// ------------------------------
// keys(), values(), entries()