import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

//import App from './components/App';
import Router from './components/Router';

//setup multi-page website (4 steps)
//Step 1: Create Router component <reference Content.js>
//Render Router component in ReactDOM
ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();


