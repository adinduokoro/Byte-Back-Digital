import React from "react";
import styles from "./Hero.module.css";
import bg1 from "../../assets/background-img1.png";
import bg2 from "../../assets/background-img2.png";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles["hero-content"]}>
        <div className={styles["hero-logo"]}>
          <div className={styles.text} style={{marginLeft: "0"}}>WEB</div>
          <div className={styles.text} style={{marginLeft: "8.69rem"}}>DE</div>
          <div className={styles.text} style={{marginLeft: "16.06rem"}}>SIG</div>
          <div className={styles["text-content"]}>
            <div className={styles.bar}>
                <div className={styles.tag}>COMPANY</div>
            </div>
            <div className={styles.text} >N</div>
          </div>
        </div>
        <div className={styles.left}>
          <img className={styles.bg1} src={bg1} alt="" />
        </div>
        <div className={styles.right}>
          <img className={styles.bg2} src={bg2} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
