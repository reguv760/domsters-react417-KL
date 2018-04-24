import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.css';


//setup multi-page website:::
//step 4: define links for Router to listen to
const Navigation = () =>
{
  return (
    <nav className="nav">
      <ul>
        <li><NavLink exact activeClassName="is-active" to='/'>Home</NavLink></li>
        <li><NavLink activeClassName="is-active" to='/about'>About</NavLink></li>
        <li><NavLink activeClassName="is-active" to='/photos'>Photos</NavLink></li>
        <li><NavLink activeClassName="is-active" to='/live'>Live</NavLink></li>
        <li><NavLink activeClassName="is-active" to='/contact'>Contact</NavLink></li>
      </ul>
    </nav>
  );
}
export default Navigation;
