import React from 'react';
import './skills.scss'

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
          <span class="tooltiptext">Tooltip text</span>
          <img src={require('../../assets/html-5.png')} />
        </div>
        <div className="skill-item">
          <span class="tooltiptext">Tooltip text</span>
          <img src={require('../../assets/css.png')} />
        </div>
        <div className="skill-item">
          <span class="tooltiptext">Tooltip text</span>
          <img src={require('../../assets/react.png')} />
        </div>
        <div className="skill-item">
          <span class="tooltiptext">Tooltip text</span>
          <img src={require('../../assets/angular.png')} />
        </div>
        <div className="skill-item">
          <span class="tooltiptext">Tooltip text</span>
          <img src={require('../../assets/js.png')} />
        </div>
        <div className="skill-item">
          <span class="tooltiptext">Tooltip text</span>
          <img src={require('../../assets/sass.png')} />
        </div>
        <div className="skill-item">
          <span class="tooltiptext">Tooltip text</span>
          <img src={require('../../assets/bootstrap.png')} />
        </div>
        <div className="skill-item">
          <span class="tooltiptext">Tooltip text</span>
          <img src={require('../../assets/firebase.png')} />
        </div>
        <div className="skill-item">
          <span class="tooltiptext">Tooltip text</span>
          <img src={require('../../assets/flutter.png')} />
        </div>
        <div className="skill-item">
          <span class="tooltiptext">Tooltip text</span>
          <img src={require('../../assets/github.png')} />
        </div>
        <div className="skill-item">
          <span class="tooltiptext">Tooltip text</span>
          <img src={require('../../assets/rn.png')} />
        </div>
        <div className="skill-item">
          <span class="tooltiptext">Tooltip text</span>
          <img src={require('../../assets/photoshop.png')} />
        </div>
      </div>
    </div>
  );
}

export default Skills;
