import React, { useRef, useEffect } from "react";
import './header.scss'
import image from '../../assets/image.jpg'
import { TweenMax } from "gsap";

const Header = () => {
  const blue = useRef(null);
  const red = useRef(null);
  const yellow = useRef(null);
  const green = useRef(null);

  useEffect(() => {
    TweenMax.fromTo(
      [blue.current, yellow.current],
      0.5,
      { y: 18 },
      { y: -18, yoyo: true, repeat: -1 }
    );
    TweenMax.fromTo(
      [red.current, green.current],
      0.5,
      { y: -18 },
      { y: 18, repeat: -1, yoyo: true }
    );
  }, []);



  return (
    <div className="header">
      <div className="left-side">
        <div className="content">
          <h1 >Frontend UI Developer</h1>
          <p>Bring your brand to Life with our help</p>
          <p>A guy who loves Coding, Travelling, Sunsets, Beaches and waking up early in the morning. <br />
            ~ Software Engineer</p>
          <button className="contact-btn">Contact Me /&gt;</button>
          <div className="social-links">
            <a ref={blue} className=""><i className="fab fa-facebook-f"></i>Facebook</a>
            <a ref={red} className=""><i className="fab fa-twitter"></i>Twitter</a>
            <a ref={yellow} className=""><i className="fab fa-linkedin-in"></i>LinkedIn</a>
            <a ref={green} className=""><i className="fab fa-github"></i>Github</a>
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
