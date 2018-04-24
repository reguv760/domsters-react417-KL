import React from 'react';
import { Link } from 'react-router-dom'



//setup multi-page website:::
//step 4: define links for Router to listen to
const Navigation = () =>
{
  return (
    <nav id="navigation">
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/photos'>Photos</Link></li>
        <li><Link to='/live'>Live</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
    </nav>
  );
}
export default Navigation;
