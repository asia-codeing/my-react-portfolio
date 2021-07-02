import React from 'react';
import "./style.css";
import image from '../../assets/images/profile.png'

export default function Inrto() {
    return (
        <div className="home-section" id="intro">
           <div className="container">
               <div className="row full-screen">
                    <div className="home-text">
                        <p>Hello</p>
                        <h3>I'm Asia Alnahi</h3>
                        <h1>Full Stack Web Developer</h1>
                    </div>
                    <div className="home-img">
                        <div className="img-box inner-shadow">
                            <img src={image} className="outer-shadow" alt="Asia"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
