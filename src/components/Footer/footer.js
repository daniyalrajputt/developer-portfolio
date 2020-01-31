import React from 'react';
import './footer.scss'

function Footer() {
    return (
        <div className="footer">
            <div className="left-side">
                <div className="content">
                    <h1>I'm available for freelance work, you can reach me by</h1>
                    <div className="social-links">
                        <a className=""><i className="fab fa-facebook-f"></i>Facebook</a>
                        <a className=""><i className="fab fa-twitter"></i>Twitter</a>
                        <a className=""><i className="fab fa-linkedin-in"></i>LinkedIn</a>
                        <a className=""><i className="fab fa-github"></i>Github</a>
                    </div>
                </div>
            </div>
            <div className="right-side">
                <div><p>2020 - All rights reserved - Rao Daniyal</p></div>
            </div>
        </div>
    );
}

export default Footer;
