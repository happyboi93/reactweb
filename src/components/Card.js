import React from 'react';

const Card = (props) => {
	return (
		<div>
		  <div className='ui segment' style={{margin:'40px'}}>
			  <div className='ui content header'>
			  	{props.name}
			  </div>
			  <div className='content description'>
			    {props.comment} <i className='hand point down'></i>
			  </div>
			  <div className='extra content'>
			  	<i className='ui user icon'></i>
			  	<a href={props.link} >Israel</a>
			  </div>
			</div>
		</div>
	)
}

export default Card