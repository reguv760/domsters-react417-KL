import React from 'react';
import { Switch, Route } from 'react-router-dom'; //import Switch + Route functions:::

//import content
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Live from './Live';
import Photos from './Photos';
import NotFound from './NotFound';



//setup multi-page website:::
//step 3:
//define links as Routes

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"

const Content = () =>
{
  return(
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/contact' component={Contact}/>
      <Route path='/live' component={Live}/>
      <Route path='/photos' component={Photos}/>
      <Route component={NotFound} />
    </Switch>
  );
}

export default Content;
