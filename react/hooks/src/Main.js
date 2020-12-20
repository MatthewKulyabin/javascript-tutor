import React from 'react';

import {useAlert} from './alert/AlertContext.js';

export default function Main() {
	const {show} = useAlert();

	return (
		<div>
			<h1>Hello in Context Example</h1>
			<button
				onClick={() => {show('This text from Main.js')}}
				className="btn btn-success"
			>
				Show Alert
			</button>
		</div>
	);
}
