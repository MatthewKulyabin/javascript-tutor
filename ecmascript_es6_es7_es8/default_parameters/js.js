// function compute1(a, b) {
// 	return a + b;
// }

// function compute2(a, b = 20) {
// 	return a + b;
// }

// function compute3(a = 10, b) {
// 	return a + b;
// }

// const defaultB = 30;
// function compute4(a = 10, b = defaultB) {
// 	return a + b;
// }

// const getDefault = c => c * 2;
// function compute5(a = 10, b = getDefault(10)) {
// 	return a + b;
// }

const getDefault = c => c * 2;
function compute6(a = 10, b = getDefault(a)) {
	return a + b;
}

// console.log(compute1()); // NaN
// console.log(compute1(10, 20)); // 30
// console.log(compute2(10)); // 30
// console.log(compute2(10, 30)); // 40
// console.log(compute3(20)); // NaN
// console.log(compute4(20)); // 50 
// console.log(compute5(20)); // 40
// console.log(compute6(20)); // 60
// console.log(compute6()); // 30