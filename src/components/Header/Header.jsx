import React from 'react';
import Nav from '../Nav/Nav'
import './style.css';

export default function Header() {
    return (
        <div className='header'>
            <div className='header-wrapper'>
                <div className="left">
                    <div className='logo'> 
                        <a href='#home'>Asia Alnahi.</a>    
                    </div>
                </div>
                    <div className="right">
                        <Nav/>
                </div>   
            </div>
        </div>
    )
}
