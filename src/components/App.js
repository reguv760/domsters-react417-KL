import React from 'react';
import './../css/basic.css';
import Header from './Header';
import Navigation from './Navigation'
import Content from './Content';

//setup multi-page website
//Step 2b: //load and call out Content.js

const App = () =>
(
  <div>
    <Header />
    <Navigation/>
    <Content/>
  </div>
);

export default App;
