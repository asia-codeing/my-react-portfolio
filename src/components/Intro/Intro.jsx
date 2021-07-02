import React from 'react';
import "./style.css";
import MyImage from '../../../public/assets/images/profile.png'

export default function Inrto() {
    return (
        <div className="home-section" id="intro">
           <div class="container">
               <div class="row full-screen">
                    <div class="home-text">
                        <p>Hello</p>
                        <h2>I'm Asia Alnahi</h2>
                        <h1>Web Developer</h1>
                    </div>
                    <div class="home-img">
                        <div class="img-box inner-shadow">
                            <img src={MyImage} class="outer-shadow" alt="myprofile"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
