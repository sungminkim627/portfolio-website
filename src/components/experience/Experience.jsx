import React from 'react';
import "./experience.css";
import Data from  "./Data"
import Card from "./Card"

const Experience = () => {
  return (
    <section className="experience container section" id="experience">
      <h2 className="section__title">Experience</h2>

      <div className="experience__container grid">
        <div className="timeline grid">
          {Data.map((val, id) => {
            if (val.category === "education") {
              return (
                <Card key={id} icon={val.icon} title={val.title} year={val.year} place={val.place} desc={val.desc} />
              )
            }
            return null;
          })}
        </div>

        <div className="timeline grid">
          {Data.map((val, id) => {
            if (val.category === "experience") {
              return (
                <Card key={id} icon={val.icon} title={val.title} year={val.year} place={val.place} desc={val.desc} />
              )
            }
            return null;
          })}
        </div>
      </div>
    </section>
  )
}

export default Experience