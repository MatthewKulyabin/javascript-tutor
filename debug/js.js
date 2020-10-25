document.addEventListener('DOMContentLoaded',() => {
	const num1 = document.querySelector('#num1');
	const num2 = document.querySelector('#num2');
	const addBtn = document.querySelector('#add');
	const subBtn = document.querySelector('#sub');
	const output = document.querySelector('#output');

	function getInputValues() {
		const value1 = +num1.value;
		const value2 = +num2.value;

		return [value1, value2];
	}

	function addHandler() {
		const values = getInputValues();
		console.log(values);

		const result = values[0] + values[1];
		displayResult(result);
	}

	function subHandler() {
		const values = getInputValues();

		const result = values[0] - values[1];

		displayResult(result);
	}

	function displayResult(result) {
		// Позволяет найти ближайшего родителя по селектору
		output.closest('.card').style.display = 'block';
		output.innerHTML = `Result = ${result}`;
		console.trace(); // Какой стек был у данной ф-ии, что до этого происходило
	}

	addBtn.addEventListener('click', addHandler);
	subBtn.addEventListener('click', subHandler);
});