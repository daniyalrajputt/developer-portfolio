import React from "react"
import './navbar.scss';
import { NavLink } from 'react-router-dom'

export default (props) => {
    return (
        // <div className="navbar">
        //     <div className="title-name"><h2><span>&lt;/</span>Rao Daniyal</h2></div>
        //     <div className="menu-bar">
        //         <NavLink activeClassName='selected' to='home'><span className="slash">/</span>Home<span className="slash">/</span></NavLink>
        //         <NavLink activeClassName='selected' to='about'><span className="slash">/</span>About<span className="slash">/</span></NavLink>
        //         <NavLink activeClassName='selected' to='work'><span className="slash">/</span>Work<span className="slash">/</span></NavLink>
        //         <NavLink activeClassName='selected' to='contact'><span className="slash">/</span>Contact Me<span className="slash">/</span></NavLink>
        //         <button>breif me <span>/&gt;</span></button>
        //     </div>
        // </div>
        <div className="navbar">
            <a href="#" className="logo"><span>&lt;/</span>Rao Daniyal</a>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
            <ul className="menu">
                <li><NavLink activeClassName='selected' to='home'><span className="slash">/</span>Home<span className="slash">/</span></NavLink></li>
                <li><NavLink activeClassName='selected' to='about'><span className="slash">/</span>About<span className="slash">/</span></NavLink></li>
                <li><NavLink activeClassName='selected' to='work'><span className="slash">/</span>Work<span className="slash">/</span></NavLink></li>
                <li><NavLink activeClassName='selected' to='contact'><span className="slash">/</span>Contact Me<span className="slash">/</span></NavLink></li>
                {/* <li><button>breif me <span>/&gt;</span></button></li> */}
            </ul>
        </div>
    );
}
