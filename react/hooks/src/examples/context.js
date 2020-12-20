import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Main from './Main.js';
import Alert from './alert/Alert.js';
import {AlertProvider} from './alert/AlertContext.js';

function App() {
  return (
  	<AlertProvider>
	  	<div className={'container pt-3'}>
	  		<Alert />
	  		<Main toggle={() => {}} />
	  	</div>
  	</AlertProvider>
  );
}

export default App;
