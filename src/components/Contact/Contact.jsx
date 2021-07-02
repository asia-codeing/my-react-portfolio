import React from 'react';
import './style.css';

export default function Contact() {
    return (
        <div className='contact-section'>
            <div class="container">
                    <div class="section-title">
                    <h2 data-heading="contact">contact me</h2>
                    </div>
                <div class="row">
                    <div class="contact-item">
                        <div class="contact-item-inner outer-shadow hover-in-shadow ">
                            <img src="./assets/images/icons8-phone-case-64.png" alt="">

                            <span>phone</span>
                            <p>(360)842-3924</p>
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-item-inner outer-shadow hover-in-shadow ">
                            <img src="./assets/images/icons8-email-64.png" alt="">
                            <!-- <span>Email</span> -->
                            <a href="mailto:asia.alius@gmail.com"  target="_blank" class="outer-shadow hover-in-shadow btn">Email</a>
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-item-inner outer-shadow hover-in-shadow ">
                            <img src="./assets/images/icons8-linkedin-64 (1).png" alt="">
                            <a href="https://www.linkedin.com/in/asia-alnahi-1562aa183/"  target="_blank" class="outer-shadow hover-in-shadow btn">LinkedIn</a> 
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-item-inner outer-shadow hover-in-shadow ">
                            <img src="./assets/images/icons8-github.svg" alt="">
                            <a href="https://github.com/asia-codeing"  target="_blank" class="outer-shadow hover-in-shadow btn">Github</a> 
                        </div>
                    </div>
                </div>
          </div>        
        </div>
    )
}
