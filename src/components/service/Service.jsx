import React, { useRef } from "react";
import styles from "../../components/service/Service.module.css";
import arrow from "../../assets/arrow-right.svg";
import { badges } from "./data";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

const Service = () => {
  const container = useRef();

  useGSAP(() => {
    gsap.from(["#subheading", "#heading"], {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ["#subheading", "#heading"],
        scrub: 3,
        start: "top 80%",
        end: "top 80%",
      }
    })
    gsap.from("#badge", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      scale: 1.25,
      scrollTrigger: {
        trigger: ["#badge"],
        scrub: 3,
        start: "top 80%",
        end: "top 80%",
      }
    })


  },{scope: container})

  return (
    <section className={styles.service} ref={container}>
      <div className={styles.header}>
        <div className={`${styles.subHeading} subHead-text`} id="subheading">
          <img className={styles.icon} src={arrow} alt="" />
          Popular Services
        </div>
        <div className={`${styles.heading} d-text`} id="heading">
          Crafting Outstanding Web Design Solutions
        </div>
      </div>
      <div className={styles.badges} id="badges">
        {badges.map((badge, index) => {
          return (
            <div className={styles.badge} key={index} id="badge">
              <img className={styles.badgeImage} src={badge.image} alt="" />
              <div className={`${styles["badge-title"]} title-text`}>{badge.topic}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Service;
