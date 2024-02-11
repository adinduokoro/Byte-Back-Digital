import React, { useRef } from "react";
import styles from "./Hero.module.css";
import bg1 from "../../assets/background-img1.png";
import bg2 from "../../assets/background-img2.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const hero = useRef();
  const tl = useRef();

  useGSAP(
    () => {
      tl.current = gsap.timeline()
    },
    { scope: hero }
  );

  return (
    <section className={styles.hero} ref={hero}>
      <div className={styles["hero-content"]}>
        <div className={styles["hero-logo"]}>
          <div
            className={styles.text}
            style={{ marginLeft: "0" }}
            id="hero-text"
          >
            <span id="single-letter">W</span>
            <span id="single-letter">E</span>
            <span id="single-letter">B</span>
          </div>
          <div
            className={styles.text}
            style={{ marginLeft: "8.69rem" }}
            id="hero-text"
          >
            DE
          </div>
          <div
            className={styles.text}
            style={{ marginLeft: "16.06rem" }}
            id="hero-text"
          >
            <span id="single-leter">S</span>
            <span id="single-leter">I</span>
            <span id="single-ltter">G</span>
          </div>

          <div className={styles["text-content"]}>
            <div className={styles.bar}>
              <div className={styles.tag}>COMPANY</div>
            </div>
            <div className={styles.text}>N</div>
          </div>
        </div>
        <div className={styles.left}>
          <img className={styles.bg1} src={bg1} id="bg1" alt="" />
        </div>
        <div className={styles.right}>
          <img className={styles.bg2} src={bg2} id="bg2" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
