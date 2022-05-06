import React from "react";
import "./services.css";
import { BsCheckLg } from "react-icons/bs";

export const Services = () => {
  return (
    <section id="services" className="range">
      <h5>What i offer</h5>
      <h2>Services</h2>

      <div className="container service__container">
        <article className="service">
          <div className="service__header">
            <h3>Frontend Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__header">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
