import React from 'react';
import Navbar from './Navbar';

export default class Home extends React.Component {
	render() {
		return (
		<div>	
		<Navbar name={'ISRAEL'}/>	  
		  <div className='ui container grid row column segment'>
	      <div className='ui raised very padded center aligned segment'>
	        <img className='ui medium circular centered image' src='proimg.jpeg' alt=''></img>
	        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	      </div>
	      <footer className='ui feed event label image'><img alt='' src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"/>You are Born to break limits !! .always belive in yourself</footer>
	      </div>
		</div>
		)
	}
}