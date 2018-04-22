import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

//import App from './components/App';
import Router from './components/Router';

//setup multi-page website
//Step 1: Create BrowserRouter.js <reference Content.js>
//Render BrowserRouter.js in ReactDOM
ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();


