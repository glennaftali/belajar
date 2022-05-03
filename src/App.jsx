import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/navbar/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Testimonial from "./components/tertimonials/Testimonial";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Testimonial />
      <Portfolio />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
