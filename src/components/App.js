import React from 'react';
import './../css/basic.css';
import Header from './Header';
import Navigation from './Navigation'
import Content from './Content';

const App = () =>
{
  return (
    <div>
      <Header />
      <Navigation/>
      <Content/>
    </div>
  );
}

export default App;
