import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header2(props) {
	return (
	<nav className='ui raised padded  segment '>
	  <div className='ui right floated large button '>
	  	<a className='ui  button teal inverted ' ><NavLink to="./"><i className='chevron left  teal icon'></i></NavLink></a>
 		<a className='ui  button teal inverted '><NavLink to="./contact"><i className='chevron right  teal icon'></i></NavLink></a>
	  </div>
	  	<a className='ui big inverted button' ><NavLink to='./'><img className='ui avatar image' src="proimg.jpeg" alt="avatar"/></NavLink></a>
	</nav>
	)
}

export default Header2;