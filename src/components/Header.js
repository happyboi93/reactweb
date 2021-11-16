import React from 'react';
import {Link, NavLink} from 'react-router-dom';

 class Header extends React.Component {

    state = {user:''}
      componentDidMount(){
        let user = this.props.match.params.user
        this.setState({ user })
      }
  render() {
    const {user} = this.state
    return (
      <div>
        <div className='ui raised inverted very padded center aligned segment'>
        <a href='#' className='ui button right floated'><Link to='./home'>Back</Link></a>
        <h1 className='ui header'>This is a page for {user}</h1>
        <img className='ui fluid image' src='proimg.jpeg' alt='' />
      </div>
        <h3 className='ui teal header'>Author : {user} (React Webdev)</h3>
      </div>
    )
  }
}

export default Header;