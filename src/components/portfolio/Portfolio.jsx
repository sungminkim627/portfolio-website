import React, { useState } from 'react';
import "./portfolio.css";
import Projects from './Projects';

const Portfolio = () => {
  const [items] = useState(Projects)
  return (
    <section className="work container section" id="work">
      <h2 className="section__title">Projects</h2>

      <div className="work__container grid">
        {items.map((elem) => {
          const {id, image, title, desc, link} = elem;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>

              <h3 className="work__title">{title}</h3>
              <p className="work__desc">{desc}</p>
              <a href={link} target="_blank" className="work__button" rel="noreferrer">
                <i className="icon-link work__button-icon"></i>
              </a>
            </div>
          )
        })}

      </div>
    </section>
  )
}

export default Portfolio