import React from 'react';
import './header.scss'
import image from '../../assets/image.jpg'

function Header() {
  return (
    <div className="header">
      <div className="left-side">
        <div className="content">
          <h1>Bring your brand to Life with our <br /> help</h1>
          <p>A guy who loves Coding, Travelling, Sunsets, Beaches and waking up early in the morning. <br />
            ~ Software Engineer</p>
          <button className="contact-btn">Contact Me /&gt;</button>
          <div className="social-links">
            <a className=""><i className="fab fa-facebook-f"></i>Facebook</a>
            <a className=""><i className="fab fa-twitter"></i>Twitter</a>
            <a className=""><i className="fab fa-linkedin-in"></i>LinkedIn</a>
            <a className=""><i className="fab fa-github"></i>Github</a>
          </div>
        </div>
      </div>
      <div className="right-side">
        <div className="image-container">
          <img src={image} />
        </div>
      </div>
    </div>
  );
}

export default Header;
