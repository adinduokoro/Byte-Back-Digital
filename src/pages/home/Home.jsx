import React from "react";
import "./Home.module.css";
import { Hero, Cta, Offer, Service, Gallery, Testimonial, Contact } from "../../components";

const Home = () => {
  return (
    <div>
      <Hero />
      <Cta />
      <Offer />
      <Service />
      <Gallery />
      <Testimonial />
      {/* <Contact /> */}
    </div>
  );
};

export default Home;
