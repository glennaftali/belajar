import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

export const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills</h5>
      <h2>My experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>HTML</h4>
              <small className="text-light">Newbie</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>CSS</h4>
              <small className="text-light">Newbie</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>Bootstrap</h4>
              <small className="text-light">Newbie</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>JavaScript</h4>
              <small className="text-light">Newbie</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>ReactJS</h4>
              <small className="text-light">Newbie</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>NextJS</h4>
              <small className="text-light">Learning</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
