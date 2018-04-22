import React from 'react';
import { Link } from 'react-router-dom'



//setup multi-page website:::
//step 4: define links for Router to listen to
const Navigation = () =>
{
  return (
    <div id="navigation">
      <ul>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/photos'>Photos</Link>
        <Link to='/live'>Live</Link>
        <Link to='/contact'>Contact</Link>
      </ul>
    </div>
  );
}
export default Navigation;
