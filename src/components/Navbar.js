import React from 'react';
import {Link, NavLink} from 'react-router-dom';


function Navbar () {
	return(
	<nav className='ui raised padded inverted segment '>
	  <div className='ui right floated large button '>
	  	<a className='ui button'><Link to="./">Home</Link></a>
	  	<a className='ui button'><NavLink to="./about">About</NavLink></a>
	  	<a className='ui button'><NavLink to="./contact">Contact</NavLink></a>
	  </div>
	  	<a className=''><img className='ui avatar image' src="proimg.jpeg" alt="avatar" /></a>
	  	<a className='ui big button' ><NavLink to='./' className='ui outline'>Israel</NavLink></a>
	</nav>
	)
}

export default Navbar;

 //<Link to='/ISRAEL'></Link>