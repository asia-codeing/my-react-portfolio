import React from 'react';
import './style.css';
import memoirs from  '../../assets/images/memoirs.png';
import moi from '../../assets/images/moi-me-ries.png';
import songapp from "../../assets/images/what's-the-song.png";
import google from '../../assets/images/googlebooks.png';
import tech from '../../assets/images/tech-blog.png';
import weather from '../../assets/images/weather-app.png';
import quiz from '../../assets/images/quiz-app.png';

export default function Projects() {
    return (
        <div className='projects-section'>
            <div className="container">
                <div className="section-title">
                    <h2 data-heading="my works">Projects</h2>
                </div>
    
                <div className="row-project ">

                    <div className="project-item">
                        <div className="project-item-inner outer-shadow-p hover-in-shadow ">
                            <div className="project-item-img">
                                <img className='p-img' src={memoirs} alt="notes-taker"/>
                            </div>
                            <p className="project-item-title">ME-MOIRS</p>
                            <p className="project-description">React application, developed for the user to be able to share interests and life-events with friends across the app.</p>
                            <div className="project-links">
                                <a href="https://protected-basin-89410.herokuapp.com/" target="_blank" className="outer-shadow hover-in-shadow btn" rel="noreferrer">See it live</a>
                                <a href="https://github.com/asia-codeing/me-moirs.git" target="_blank" className="outer-shadow hover-in-shadow btn" rel="noreferrer">View Code</a>
                            </div>
                        </div>
                    </div>

                    <div className="project-item">
                        <div className="project-item-inner outer-shadow-p hover-in-shadow ">
                            <div className="project-item-img">
                                <img className='p-img' src={moi} alt="moi-me-ries"/>
                            </div>
                            <p className="project-item-title">MOI-ME-RIES</p>
                            <p className="project-description">An app created by JavaScript & Handlebars.js, used share bucket-list events both past and future.</p>
                            <div className="project-links">
                                <a href="https://blooming-ocean-65385.herokuapp.com/" target="_blank" className="outer-shadow hover-in-shadow btn" rel="noreferrer">See it live</a>
                                <a href="https://github.com/asia-codeing/moi-me-ries.git" target="_blank" className="outer-shadow hover-in-shadow btn" rel="noreferrer">View Code</a>
                            </div>
                        </div>
                    </div>

                    <div className="project-item">
                        <div className="project-item-inner outer-shadow-p hover-in-shadow  ">
                            <div className="project-item-img">
                                <img className='p-img' src={songapp} alt="what is the Song? app"/>
                            </div>
                            <p className="project-item-title">What's the Song? app</p>
                            <p className="project-description">This app created by JavaScript, give the user the ability to do a lyrics based search that returns the artist, album and link to listen on Spotify.</p>
                            <div className="project-links">
                                <a href="https://asia-codeing.github.io/Whats-Song-is-That-the-app/" target="_blank" className="outer-shadow hover-in-shadow btn" rel="noreferrer">See it live</a>
                                <a href="https://github.com/asia-codeing/Whats-Song-is-That-the-app.git" target="_blank" className="outer-shadow hover-in-shadow btn" rel="noreferrer">View Code</a>
                            </div>
                        </div>
                    </div>

                    <div className="project-item">
                        <div className="project-item-inner outer-shadow-p hover-in-shadow ">
                            <div className="project-item-img">
                                <img className='p-img' src={google} alt="notes-taker"/>
                            </div>
                            <p className="project-item-title">Google Books Search</p>
                            <p className="project-description">React Application give you ability to search for any book through google box.</p>
                            <div className="project-links">
                                <a href="https://google--search--books.herokuapp.com/" target="_blank" className="outer-shadow hover-in-shadow btn" rel="noreferrer">See it live</a>
                                <a href="https://github.com/asia-codeing/google-books-search.git" target="_blank" className="outer-shadow hover-in-shadow btn" rel="noreferrer">View Code</a>
                            </div>
                        </div>
                    </div>

                    <div className="project-item">
                        <div className="project-item-inner outer-shadow-p hover-in-shadow ">
                            <div className="project-item-img">
                                <img className='p-img' src={tech} alt="the-tech-blog"/>
                            </div>
                            <p className="project-item-title">The Tech Blog</p>
                            <p className="project-description">CMS-style blog site where developers can publish their blog posts and comment on other developers’ posts as well.</p>
                            <div className="project-links">
                                <a href="https://mvc--tech--blog.herokuapp.com/" target="_blank" className="outer-shadow hover-in-shadow btn" rel="noreferrer">See it live</a>
                                <a href="https://github.com/asia-codeing/MVC-Tech-Blog.git" target="_blank" className="outer-shadow hover-in-shadow btn" rel="noreferrer">View Code</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="project-item">
                        <div className="project-item-inner outer-shadow-p hover-in-shadow  ">
                        <div className="project-item-img">
                            <img className='p-img' src={weather} alt="weather-dashboard"/>
                        </div>
                        <p className="project-item-title">Weather Dashboard app</p>
                        <p className="project-description">Weather app created with HTML & Javascript helps to know the weather to make it easier to get dressed in the morning.</p>
                           
                        <div className="project-links">
                            <a href="https://asia-codeing.github.io/weather-dashboard/" target="_blank" className="outer-shadow hover-in-shadow btn" rel="noreferrer">See it live</a>
                            <a href="https://github.com/asia-codeing/weather-dashboard.git" target="_blank" className="outer-shadow hover-in-shadow btn" rel="noreferrer">View Code</a>
                        </div>
                        </div>
                    </div>
                    <div className="project-item">
                        <div className="project-item-inner outer-shadow-p hover-in-shadow ">
                        <div className="project-item-img">
                            <img className='p-img' src={quiz} alt="quiz-challenge"/>
                        </div>
                        <p className="project-item-title">Quiz Challenge</p>
                        <p className="project-description"> Quiz Challenge includes multiple-choice questions. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript.</p>
                        <div className="project-links">
                            <a href="https://asia-codeing.github.io/quiz-application/" target="_blank" className="outer-shadow hover-in-shadow btn" rel="noreferrer">See it live</a>
                            <a href="https://github.com/asia-codeing/quiz-application.git" target="_blank" className="outer-shadow hover-in-shadow btn" rel="noreferrer">View Code</a>
                        </div>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>   
    )
}

