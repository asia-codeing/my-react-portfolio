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
              <p><span>My Name is Asia Alnahi</span> Full stack web developer with background in HTML, CSS,Bootstrap, GitHub, JavaScript, Node js, Sequelize, My SQL, Handlebars, Express, MVC, MongoDB, React.js and Heroku. With passion for creating web applications that are easy to use and responsive so they can  work on different screen sizes. Innovative problem-solver and development. Strengths in creativity, teamwork, and building projects from ideation to execution.
              </p>
              <a href={Resume} target="_blank" className="outer-shadow hover-in-shadow btn" rel="noreferrer">Download Resume</a>
            </div>
          </div>
        </div>        
    )
}
