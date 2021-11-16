import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Home from './Home';
import Header2 from './Header2';

export default function About() {
	return (
		<div>
		<Header2 />
		<nav className='ui raised padded segment'>
		 {/*<div className='ui right floated large button '>
		 	<a href='/' className='ui big button teal inverted icon' ><i className='hand point down outline inverted teal icon'></i></a>
		 	<a href='/' className='ui big button teal inverted icon'><NavLink to="./contact"><i className='hand point down outline inverted teal icon button'></i></NavLink></a>
		 </div>
		 	<a href='/' className=''><Link to='/ISRAEL'><img className='ui avatar image' src="proimg.jpeg" alt="avatar" /></Link></a>*/}
		 <div className='ui segment'>
		 <div className='ui raised very padded inverted center aligned segment'>  
		  	<h2 className="ui header">
		  	<div className="content">
		  	<i className='hand point down outline inverted teal icon'></i>
		  		- Learn More -
		  	<i className='hand point down outline inverted teal icon'></i>
		  	</div>
		  	</h2>
		  	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		  </div>
		  </div>	
		</nav>
		</div>
	)
}



// ui square button test ad
