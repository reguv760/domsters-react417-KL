import React from 'react';
import { Switch, Route } from 'react-router-dom'; //import Switch + Route functions:::

//import content
import About from './../pages/About';
import Contact from './../pages/Contact';
import Home from './../pages/Home';
import Live from './../pages/Live';
import Photos from './../pages/Photos';
import NotFound from './../pages/NotFound';

//setup multi-page website:::
//step 3:
//modularize "pages" + define links as Routes
//then add in Navigation.js

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"

const Content = () =>
(
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/about' component={About}/>
    <Route path='/contact' component={Contact}/>
    <Route path='/live' component={Live}/>
    <Route path='/photos' component={Photos}/>
    <Route component={NotFound} />
  </Switch>
);

export default Content;
