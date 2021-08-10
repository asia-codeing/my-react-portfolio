import React from 'react';
import './style.css';
import image from '../../assets/images/profile2.png';
import Resume from '../../assets/my-resume.pdf';

export default function About() {
    return (
        <div className='about-section'>
            <div className="container">
            <div className="section-title">
              <h2 data-heading="main info">About me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-img">
               <div className="img-box inner-shadow">
                 <img src={image} className="outer-shadow" alt="ASia"/>
               </div>
            </div>
            <div className="info">
              <p><span>My Name is Asia Alnahi</span> A full-stack web developer with a passion for creating interactive and responsible web applications. Recently earned a certificate in Full Stack Web Development from the University of Washington and I gained experience in the foundations of web development while honing my skills in HTML, CSS, Bootstrap, GitHub, JavaScript, Node js, Sequelize, My SQL, Handlebars, Express, MongoDB, React.js,Heroku, and responsive web design. I am able to collaborate and work with a team while solving problems in high-stress environments and having an appetite for continuous learning. Excited to leverage my skills in the future as part of a fast-paced, quality-driven team in order to build better experiences on the web.
              </p>
              <a href={Resume} target="_blank" className="outer-shadow hover-in-shadow btn" rel="noreferrer">Download Resume</a>
            </div>
          </div>
        </div>        
    )
}
