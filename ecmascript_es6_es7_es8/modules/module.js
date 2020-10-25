const privateVariable = 42;

export const COLOR = '#bababa';

export function compute(...array) {
	return array.reduce((total, item) => total + item, 0);
}

export default {
	log() {
		console.log(privateVariable);
	}
}