import React from 'react';
import './aboutme.scss'

function AboutMe() {
    return (
        <div className="about-section">
            <div className="heading">
                <div className="left-side"><h1>About Me</h1></div>
                <div className="right-side">
                    <div className="line"></div>
                </div>
            </div>
            <div className="about-content">
                <div className="left-side">
                    <p>&lt;p&gt;</p>
                    <p>
                        A guy who loves Coding, Travelling, Sunsets, Beaches and waking up early in the morning.
                        ~ Software Engineer
                    </p>
                    <p>&lt;/p&gt;</p>
                </div>
                <div className="right-side">
                    <p>I'm an Intermediate front-end developer and my areas of expertise are:
                        graphics to web pages slicing: Photoshop, Sketch, Illustrator and Image to HTML Webpage.</p>
                    <ul>
                        <li>user interfaces developing</li>
                        <li>user interfaces developing</li>
                        <li>user interfaces developing</li>
                    </ul>
                    <p>My goal is to produce high quality, clean, modular code. In my work I use dev tools and 
                        systems like npm, git, etc. I'm sure - you will be satisfied with the result! </p>
                    <button>LinkedIn Profile <span>/&gt;</span></button>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
