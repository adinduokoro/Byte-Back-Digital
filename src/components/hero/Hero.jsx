import React, { useRef } from "react";
import styles from "./Hero.module.css";
import bg1 from "../../assets/background-img1.png";
import bg2 from "../../assets/background-img2.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const container = useRef();
  const timeline = useRef();

  useGSAP(
    () => {
      timeline.current = gsap
        .timeline()
        .from("#bg1", {
          delay: 0.6,
          duration: 1.2,
          xPercent: -110,
          ease: "power2.inOut",
        })
        .from(
          "#bg2",
          {
            duration: 1.2,
            xPercent: 110,
            ease: "power1",
          },
          ">-1.2"
        )
        .from("#web-text", { stagger: 0.15, y: -100, opacity: 0 }, ">=-0.2")
        .from(
          "#de",
          {
            stagger: 0.15,
            x: 100,
            opacity: 0,
          },
          ">=-0.3"
        )
        .from(
          "#sig",
          {
            stagger: 0.15,
            y: -100,
            opacity: 0,
          },
          ">=-0.4"
        )
        .from(
          "#n-text",
          {
            stagger: 0.15,
            y: 100,
            opacity: 0,
          },
          ">=-0.4"
        )
        .from(
          "#bar",
          {
            stagger: 0.15,
            x: -300,
            opacity: 0,
          },
          "<"
        );
    },
    { scope: container }
  );

  return (
    <section className={styles.hero} ref={container}>
      <div className={styles["hero-content"]}>
        <div className={styles["hero-logo"]}>
          <div className={styles.text} style={{ marginLeft: "0" }}>
            <div id="web-text">W</div>
            <div id="web-text">E</div>
            <div id="web-text">B</div>
          </div>
          <div className={styles.text} style={{ marginLeft: "8.69rem" }}>
            <div id="de">D</div>
            <div id="de">E</div>
          </div>
          <div className={styles.text} style={{ marginLeft: "16.06rem" }}>
            <div id="sig">S</div>
            <div id="sig">I</div>
            <div id="sig">G</div>
          </div>

          <div className={styles["text-content"]}>
            <div className={styles.bar} id="bar">
              <div className={styles.tag}>COMPANY</div>
            </div>
            <div className={styles.text} id="n-text">
              N
            </div>
          </div>
        </div>
        <div className={styles.left}>
          <img className={styles.bg1} src={bg1} alt="" id="bg1" />
        </div>
        <div className={styles.right}>
          <img className={styles.bg2} src={bg2} alt="" id="bg2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
