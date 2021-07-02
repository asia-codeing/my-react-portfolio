import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';
export default function Nav() {
    return (
        <div className='navbar-items'>
            <Link to='/'><p className='home'>Home</p></Link>
            <Link to='/about'><p className='about'>About</p></Link>
            <Link to='/projects'><p className='projects'>Projects</p></Link>
            <Link to='/contact'><p className='contact'>Contact</p></Link>
        </div>
    )
}