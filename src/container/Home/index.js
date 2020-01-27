import React from 'react';
import './home.scss'
import Header from '../../components/Header/header'
import AboutMe from '../../components/AboutMe/aboutme'

function Home() {
  return (
    <div className="container">
        <Header/>
        <AboutMe/>
    </div>
  );
}

export default Home;
