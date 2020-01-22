import React from "react"
import './navbar.scss';
import { NavLink } from 'react-router-dom'

export default (props) => {
    return (
        <div className="navbar">
            <div className="title-name"><h2><span>&lt;/</span>Rao Daniyal</h2></div>
            <div className="menu-bar">
                <NavLink activeClassName='selected' to='home'><span className="slash">/</span>Home<span className="slash">/</span></NavLink>
                <NavLink activeClassName='selected' to='about'><span className="slash">/</span>About<span className="slash">/</span></NavLink>
                {/* <NavLink activeClassName='selected' to=''><span className="slash">/</span>Work<span className="slash">/</span></NavLink>
                <NavLink activeClassName='selected' to=''><span className="slash">/</span>Contact Me<span className="slash">/</span></NavLink> */}
                <button>breif me <span>/&gt;</span></button>
            </div>
        </div>
    )
}