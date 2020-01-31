import React from 'react';
import './home.scss'
import Header from '../../components/Header/header'
import AboutMe from '../../components/AboutMe/aboutme'
import Skills from '../../components/Skills/skills';
import Education from '../../components/Education';
import Footer from '../../components/Footer/footer';

function Home() {
  return (
    <div className="container">
      <Header />
      <AboutMe />
      <Skills />
      <Education/>
      <Footer/>
    </div>
  );
}

export default Home;
