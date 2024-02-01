import React from "react";
import "./Home.module.css";
import { Hero, Cta, Offer, Service } from "../../components";

const Home = () => {
  return (
    <div>
      <Hero />
      <Cta />
      <Offer />
      <Service />
    </div>
  );
};

export default Home;
