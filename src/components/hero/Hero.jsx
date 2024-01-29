import React from "react";
import styles from "./Hero.module.css";
import bgi1 from "../../assets/bgi1.png";
import bgi2 from "../../assets/bgi2.png";
import heroBanner from "../../assets/heroBanner.png";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroLogo}>
        <div className={styles.heroText} style={{ paddingLeft: "0rem" }}>
          WEB
        </div>
        <div className={styles.heroText} style={{ paddingLeft: "10.94rem" }}>
          DE
        </div>
        <div className={styles.heroText} style={{ paddingLeft: "20.06rem" }}>
          SIG
        </div>
        <div className={styles.heroAsset}>
          <div className={styles.banner}>
            <img src={heroBanner} alt=""/>
          </div>
          <div className={styles.heroText}>N</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
