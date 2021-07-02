import React from 'react';
import './style.css';

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
                        <img src="assets/images/what's-the-song.png" alt="what is the Song? app"/>
                    </div>
                    <p className="project-item-title">What's the Song? app</p>
                    <a href="https://asia-codeing.github.io/Whats-Song-is-That-the-app/" target="_blank" class="outer-shadow hover-in-shadow btn">See it live</a>
                    <a href="https://github.com/asia-codeing/Whats-Song-is-That-the-app.git" target="_blank" class="outer-shadow hover-in-shadow btn">View Code</a>
                    </div>
                </div>
                <div classN="project-item">
                    <div className="project-item-inner outer-shadow hover-in-shadow ">
                    <div className="project-item-img">
                        <img src="assets/images/moi-me-ries.png" alt="moi-me-ries"/>
                    </div>
                    <p className="project-item-title">MOI-ME-RIES</p>
                    <a href="https://blooming-ocean-65385.herokuapp.com/" target="_blank" className="outer-shadow hover-in-shadow btn">See it live</a>
                    <a href="https://github.com/asia-codeing/moi-me-ries.git" target="_blank" className="outer-shadow hover-in-shadow btn">View Code</a>
                    </div>
                </div>

                <div className="project-item">
                    <div className="project-item-inner outer-shadow hover-in-shadow ">
                    <div className="project-item-img">
                        <img src="assets/images/tech-blog.gif" alt="the-tech-blog">
                    </div>
                    <p className="project-item-title">The Tech Blog</p>
                    <a href="https://mvc--tech--blog.herokuapp.com/" target="_blank" className="outer-shadow hover-in-shadow btn">See it live</a>
                    <a href="https://github.com/asia-codeing/MVC-Tech-Blog.git" target="_blank" class="outer-shadow hover-in-shadow btn">View Code</a>
                    </div>
                </div>
                <div class="project-item">
                    <div class="project-item-inner outer-shadow hover-in-shadow ">
                    <div class="project-item-img">
                        <img src="assets/images/notes-taker.gif" alt="notes-taker"/>
                    </div>
                    <p class="project-item-title">Notes Taker</p>
                    <a href="https://notes--application.herokuapp.com/" target="_blank" class="outer-shadow hover-in-shadow btn">See it live</a>
                    <a href="https://github.com/asia-codeing/Note-Taker.git" target="_blank" class="outer-shadow hover-in-shadow btn">View Code</a>
                    </div>
                </div>
                <div class="project-item">
                    <div class="project-item-inner outer-shadow hover-in-shadow  ">
                    <div class="project-item-img">
                        <img src="assets/images/weather-app.png" alt="weather-dashboard"/>
                    </div>
                    <p class="project-item-title">Weather Dashboard app</p>
                    <a href="https://asia-codeing.github.io/weather-dashboard/" target="_blank" class="outer-shadow hover-in-shadow btn">See it live</a>
                    <a href="https://github.com/asia-codeing/weather-dashboard.git" target="_blank" class="outer-shadow hover-in-shadow btn">View Code</a>
                    </div>
                </div>
                <div class="project-item">
                    <div class="project-item-inner outer-shadow hover-in-shadow ">
                    <div class="project-item-img">
                        <img src="assets/images/quiz-app.png" alt="quiz-challenge"/>
                    </div>
                    <p class="project-item-title">Quiz Challenge</p>
                    <a href="https://asia-codeing.github.io/quiz-application/" target="_blank" class="outer-shadow hover-in-shadow btn">See it live</a>
                    <a href="https://github.com/asia-codeing/quiz-application.git" target="_blank" class="outer-shadow hover-in-shadow btn">View Code</a>
                    </div>
                </div>
                </div>
            </div>   
        </div>
    )
}

