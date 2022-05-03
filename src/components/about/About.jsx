import React from "react";
import "./about.css";
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import {AiFillFolderOpen} from 'react-icons/ai'

const About = () => {
  return <section id="about">
    <h5>Get to know me</h5>
    <h2>About Me</h2>

    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="About Image" />
        </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <FaAward className="about__icon"/>
            <h5>Experience</h5>
            <smal>3+ years working</smal>
          </article>

          <article className="about__card">
            <FiUsers className="about__icon"/>
            <h5>Clients</h5>
            <smal>200+ Worldwide</smal>
          </article>

          <article className="about__card">
              <AiFillFolderOpen className="about__icon"/>
              <h5>Projects</h5>
              <small>80+</small>
          </article>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus qui consequuntur dolorum voluptate vero. Eveniet numquam ab soluta sed, velit illum earum exercitationem nisi, vero veniam delectus? Soluta, velit dicta!
        </p>
        <a href="#contact" className="btn btn-primary">Lets talk</a>
      </div>
    </div>
  </section>;
};

export default About;
