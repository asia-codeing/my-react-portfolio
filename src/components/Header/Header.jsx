import React from 'react';
import Nav from '../Nav/Nav'
import './style.css';

export default function Header() {
    return (
        <div className='header'>
            <div className='header-wrapper'>
                <div className='logo'> 
                    <a href='#home'>Asia Alnahi.</a>
                    <Nav/>
                </div>
            </div>
        </div>
    )
}
