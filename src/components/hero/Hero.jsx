import React from "react";
import styles from "./Hero.module.css";
import bg1 from "../../assets/background-img1.png";
import bg2 from "../../assets/background-img2.png";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <div className={styles.left}>
          <img className={styles.bg1} src={bg1} alt="" />
        </div>
        <div className={styles.right}>
          <img className={styles.bg2} src={bg2} alt="" />
        </div>
      </div>
      <div className={styles["hero-logo"]}>
        logo
      </div>
    </section>
  );
};

export default Hero;
