function map(arr, callback) {
	const result = [];
	for (let i = 0; i < arr.length; i++) {
		result.push(callback(arr[i], i, arr));
	}
	return result;
}

// function reduce(arr, callback, acc) {
// 	// const accumulator = acc;
// 	for (let i = 0; i < arr.length; i++) {
// 		acc = callback(acc, arr[i], i, arr);
// 	}
// 	return acc
// }

module.exports = {map};