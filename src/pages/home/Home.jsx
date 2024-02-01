import React from "react";
import "./Home.module.css";
import { Hero, Cta, Offer, Service, Gallery } from "../../components";

const Home = () => {
  return (
    <div>
      <Hero />
      <Cta />
      <Offer />
      <Service />
      <Gallery />
    </div>
  );
};

export default Home;
