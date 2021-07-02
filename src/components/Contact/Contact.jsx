import React from 'react';
import './style.css';
import phone from '../../assets/images/icons8-phone-case-64.png';
import email from '../../assets/images/icons8-email-64.png';
import linkedin from '../../assets/images/icons8-linkedin.png';
import git from '../../assets/images/icons8-github.svg';

export default function Contact() {
    return (
        <div className='contact-section'>
            <div className="container">
                    <div className="section-title">
                    <h2 data-heading="contact">contact me</h2>
                    </div>
                <div className="row">
                    <div className="contact-item">
                        <div className="contact-item-inner outer-shadow hover-in-shadow ">
                            <img src={phone} alt="phone"/>
                            <span>phone</span>
                            <p>(360)842-3924</p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <div className="contact-item-inner outer-shadow hover-in-shadow ">
                            <img src={email} alt="email"/>
                            {/* <!-- <span>Email</span> --> */}
                            <a href="mailto:asia.alius@gmail.com"  target="_blank" className="outer-shadow hover-in-shadow btn" rel="noreferrer">Email</a>
                        </div>
                    </div>
                    <div className="contact-item">
                        <div className="contact-item-inner outer-shadow hover-in-shadow ">
                            <img src={linkedin} alt="linkedin"/>
                            <a href="https://www.linkedin.com/in/asia-alnahi-1562aa183/"  target="_blank" className="outer-shadow hover-in-shadow btn" rel="noreferrer">LinkedIn</a> 
                        </div>
                    </div>
                    <div className="contact-item">
                        <div className="contact-item-inner outer-shadow hover-in-shadow ">
                            <img src={git} alt="github"/>
                            <a href="https://github.com/asia-codeing"  target="_blank" className="outer-shadow hover-in-shadow btn" rel="noreferrer">Github</a> 
                        </div>
                    </div>
                </div>
          </div>        
        </div>
    )
}
