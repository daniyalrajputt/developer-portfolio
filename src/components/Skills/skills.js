import React from 'react';
import './skills.scss'
import html from '../../assets/html-5.png'
import css from '../../assets/css.png'
import js from '../../assets/js.png'
import react from '../../assets/react.png'
import angular from '../../assets/angular.png'
import sass from '../../assets/sass.png'
import bootstrap from '../../assets/bootstrap.png'
import firebase from '../../assets/firebase.png'
import flutter from '../../assets/flutter.png'
import git from '../../assets/git.png'
import reactNative from '../../assets/rn.png'
import photoshop from '../../assets/photoshop.png'
import adobeXd from '../../assets/adobeXd.png'
import gulp from '../../assets/gulp.png'


function Skills() {
  return (
    <div className="skills-section">
      <div className="heading">
        <div className="left-side"><h1>Skills</h1></div>
        <div className="right-side">
          <div className="line"></div>
        </div>
      </div>
      <div className="skills-content">
        <div className="skill-item">
          <span class="tooltiptext">HTML 5</span>
          <img src={html} />
        </div>
        <div className="skill-item">
          <span class="tooltiptext">CSS 3</span>
          <img src={css} />
        </div>
        <div className="skill-item">
          <span class="tooltiptext">React</span>
          <img src={react} />
        </div>
        <div className="skill-item">
          <span class="tooltiptext">Angular</span>
          <img src={angular} />
        </div>
        <div className="skill-item">
          <span class="tooltiptext">JavaScript</span>
          <img src={js} />
        </div>
        <div className="skill-item">
          <span class="tooltiptext">Scss</span>
          <img src={sass} />
        </div>
        <div className="skill-item">
          <span class="tooltiptext">Bootstrap</span>
          <img src={bootstrap} />
        </div>
        <div className="skill-item">
          <span class="tooltiptext">Firebase</span>
          <img src={firebase} />
        </div>
        <div className="skill-item">
          <span class="tooltiptext">Flutter</span>
          <img src={flutter} />
        </div>
        <div className="skill-item">
          <span class="tooltiptext">Git</span>
          <img src={git} />
        </div>
        <div className="skill-item">
          <span class="tooltiptext">React Native</span>
          <img src={reactNative} />
        </div>
        <div className="skill-item">
          <span class="tooltiptext">Adobe Photoshop</span>
          <img src={photoshop} />
        </div>
        <div className="skill-item">
          <span class="tooltiptext">Adobe XD</span>
          <img src={adobeXd} />
        </div>
        <div className="skill-item">
          <span class="tooltiptext">Gulp</span>
          <img src={gulp} />
        </div>
      </div>
    </div>
  );
}

export default Skills;
