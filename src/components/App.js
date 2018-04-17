import React, { Component } from 'react';
import './../css/basic.css';
import Header from './Header';
import Navigation from './Navigation';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Live from './Live';
import Photos from './Photos';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navigation/>
        <Home />
        <About />
        <Contact />
        <Photos />
        <Live />
      </div>
    );
  }
}

export default App;
