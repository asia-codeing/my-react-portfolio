import React from 'react';
import './style.css';
import songapp from "../../assets/images/what's-the-song.png";
import moi from '../../assets/images/moi-me-ries.png';
import tech from '../../assets/images/tech-blog.gif';
import note from  '../../assets/images/notes-taker.gif';
import weather from '../../assets/images/weather-app.png';
import quiz from '../../assets/images/quiz-app.png';

export default function Projects() {
    return (
        <div className='projects-section'>
            <div className="container">
                <div className="section-title">
                    <h2 data-heading="my works">Projects</h2>
                </div>
                </div>
                <div className="row project-items">
                <div className="project-item">
                    <div className="project-item-inner outer-shadow hover-in-shadow  ">
                    <div className="project-item-img">
                        <img src={songapp} alt="what is the Song? app"/>
                    </div>
                    <p className="project-item-title">What's the Song? app</p>
                    <a href="https://asia-codeing.github.io/Whats-Song-is-That-the-app/" target="_blank" class="outer-shadow hover-in-shadow btn" rel="noreferrer">See it live</a>
                    <a href="https://github.com/asia-codeing/Whats-Song-is-That-the-app.git" target="_blank" class="outer-shadow hover-in-shadow btn" rel="noreferrer">View Code</a>
                    </div>
                </div>
                <div className="project-item">
                    <div className="project-item-inner outer-shadow hover-in-shadow ">
                    <div className="project-item-img">
                        <img src={moi} alt="moi-me-ries"/>
                    </div>
                    <p className="project-item-title">MOI-ME-RIES</p>
                    <a href="https://blooming-ocean-65385.herokuapp.com/" target="_blank" className="outer-shadow hover-in-shadow btn" rel="noreferrer">See it live</a>
                    <a href="https://github.com/asia-codeing/moi-me-ries.git" target="_blank" className="outer-shadow hover-in-shadow btn" rel="noreferrer">View Code</a>
                    </div>
                </div>

                <div className="project-item">
                    <div className="project-item-inner outer-shadow hover-in-shadow ">
                    <div className="project-item-img">
                        <img src={tech} alt="the-tech-blog"/>
                    </div>
                    <p className="project-item-title">The Tech Blog</p>
                    <a href="https://mvc--tech--blog.herokuapp.com/" target="_blank" className="outer-shadow hover-in-shadow btn" rel="noreferrer">See it live</a>
                    <a href="https://github.com/asia-codeing/MVC-Tech-Blog.git" target="_blank" class="outer-shadow hover-in-shadow btn" rel="noreferrer">View Code</a>
                    </div>
                </div>
                <div class="project-item">
                    <div class="project-item-inner outer-shadow hover-in-shadow ">
                    <div class="project-item-img">
                        <img src={note} alt="notes-taker"/>
                    </div>
                    <p class="project-item-title">Notes Taker</p>
                    <a href="https://notes--application.herokuapp.com/" target="_blank" class="outer-shadow hover-in-shadow btn" rel="noreferrer">See it live</a>
                    <a href="https://github.com/asia-codeing/Note-Taker.git" target="_blank" class="outer-shadow hover-in-shadow btn" rel="noreferrer">View Code</a>
                    </div>
                </div>
                <div class="project-item">
                    <div class="project-item-inner outer-shadow hover-in-shadow  ">
                    <div class="project-item-img">
                        <img src={weather} alt="weather-dashboard"/>
                    </div>
                    <p class="project-item-title">Weather Dashboard app</p>
                    <a href="https://asia-codeing.github.io/weather-dashboard/" target="_blank" class="outer-shadow hover-in-shadow btn" rel="noreferrer">See it live</a>
                    <a href="https://github.com/asia-codeing/weather-dashboard.git" target="_blank" class="outer-shadow hover-in-shadow btn" rel="noreferrer">View Code</a>
                    </div>
                </div>
                <div class="project-item">
                    <div class="project-item-inner outer-shadow hover-in-shadow ">
                    <div class="project-item-img">
                        <img src={quiz} alt="quiz-challenge"/>
                    </div>
                    <p class="project-item-title">Quiz Challenge</p>
                    <a href="https://asia-codeing.github.io/quiz-application/" target="_blank" class="outer-shadow hover-in-shadow btn" rel="noreferrer">See it live</a>
                    <a href="https://github.com/asia-codeing/quiz-application.git" target="_blank" class="outer-shadow hover-in-shadow btn" rel="noreferrer">View Code</a>
                    </div>
                </div>
                </div>
            </div>   
    )
}

