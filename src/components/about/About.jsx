import React from 'react';
import "./about.css";
import AboutPic from "../../assets/profile-4.JPG"

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={AboutPic} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I am Raphael Kim, a graduating student with BCS (Bachelor of Computer Science) 
              from University of Waterloo and BBA (Bachelor of Business Administration) from Wilfrid Laurier University.
              I have experiences in Data Engineering, Automation, Analysis, and Accounting. I solve problems in 
              creative, efficient, and scalable ways.
            </p>
            <a href="#home" className="btn">Download CV</a>
          </div>
          
          <div className="about__skills grid">
            <p>placeholder, will put in tech stack pics</p>
            
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default About