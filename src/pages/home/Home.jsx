import React from "react";
import "./Home.module.css";
import { Hero, Cta, Offer } from "../../components";

const Home = () => {
  return (
    <div>
      <Hero />
      <Cta />
      <Offer />
    </div>
  );
};

export default Home;
