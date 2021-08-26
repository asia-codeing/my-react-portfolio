import React from 'react';
import './style.css';
import {Link, withRouter} from 'react-router-dom';
function Nav() {
    return (
        <div className='navbar-items'>
            <Link className='link' to='/'><p className='home'>Home</p></Link>
            <Link className='link' to='/about'><p className='about'>About</p></Link>
            <Link className='link' to='/projects'><p className='projects'>Projects</p></Link>
            <Link className='link' to='/contact'><p className='contact'>Contact</p></Link>
        </div>
    )
}
export default withRouter(Nav);