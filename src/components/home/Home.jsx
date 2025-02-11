import React from 'react';
import "./home.css";
import Me from "../../assets/profile-1.jpg"
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
  return (
    <section className="home containter" id="home">
      <div className="intro">
        <img src={Me} alt="" className="profile__img" />
        <h1 className="home__name">Raphael (Sungmin) Kim</h1>
        <span className="home__education">I'm a digital craftsman</span>
        <HeaderSocials />
        <ScrollDown />
      </div>
      <Shapes />
      
    </section>
  )
}

export default Home