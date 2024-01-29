import React from "react";
import styles from "./Hero.module.css";
import bgi1 from "../../assets/background-img1.png";
import bgi2 from "../../assets/background-img2.png";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <img className="test1" src={bgi1} alt="" />
        <img className="test2" src={bgi2} alt="" />
      </div>
    </section>
  );
};

export default Hero;
