import React from 'react';
import './home.scss'
import Header from '../../components/Header/header'
import AboutMe from '../../components/AboutMe/aboutme'
import Skills from '../../components/Skills/skills';

function Home() {
  return (
    <div className="container">
      <Header />
      <AboutMe />
      <Skills />
    </div>
  );
}

export default Home;
