import React, { useRef } from "react";
import styles from "./Offer.module.css";
import { cards } from "./data";
import offerImage from "../../assets/offer-image.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

const Offer = () => {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from("#marquee", {
        opacity: 0,
        scale: 0.5,
        scrollTrigger: {
          trigger: "#marquee",
          scrub: 3,
          start: "top 80%",
          end: "top 80%"
        }
      })

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

      gsap.from("#card", {
        opacity: 0,
        x: -50,
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#card",
          scrub: 3,
          start: "top 80%",
          end: "top 80%"

        }
      })

      gsap.from("#img", {
        rotate: "2.5",
        scale: 0.9,
        scrollTrigger: {
          trigger: "#img",
          scrub: 3,
          start: "top 80%",
          end: "top 80%"

        }
      })
    },
    {
      scope: container,

    }

  );

  return (
    <section className={styles.offer} ref={container}>
      <div className={styles.marquee} id="marquee">
        <div className={styles["marquee-text"]}>
          Byte <span>Back</span> Digital
        </div>
        <div className={styles["marquee-text"]}>
          Byte <span>Back</span> Digital
        </div>
        <div className={styles["marquee-text"]}>
          Byte <span>Back</span> Digital
        </div>
      </div>
      <div className={styles["offer-content"]}>
        <div className={styles.left}>
          <div className={`${styles.subHeading} subHead-text`} id="subheading">
            What We Do
          </div>
          <div className={`${styles.heading} d-text`} id="heading">
            Service That Makes Your Brand <span>Stand Out</span> and Grow
          </div>
          <div className={styles["offer-cards"]}>
            {cards.map((card, index) => {
              return (
                <div className={styles.card} key={index} id="card">
                  <div className={`${styles["card-index"]} body-text`}>
                    {index + 1}
                  </div>
                  <div className={styles["card-content"]}>
                    <div className={`${styles["card-header"]} title-text`}>
                      {card.header}
                    </div>
                    <div className={`${styles["card-body"]} body-text`}>
                      {card.body}
                    </div>
                    <div className={styles["horizontal-rule"]}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.right}>
          <img className={styles.offerImage} src={offerImage} alt="" id="img"/>
        </div>
      </div>
    </section>
  );
};

export default Offer;
