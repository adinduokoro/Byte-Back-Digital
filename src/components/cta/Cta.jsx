import React, { useRef } from "react";
import styles from "./Cta.module.css";
import ctaImage from "../../assets/cta-img.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

const Cta = () => {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from("#cta-left", {
        y: -200,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: "#cta-left",
          scrub: 3,
          start: "top 80%",
          end: "top 80%",
        },
      });

      gsap.from(["#subheading", "#heading", "#body"], {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ["#subheading", "#heading", "#body"],
          scrub: 3,
          start: "top 90%",
          end: "top 90%",
        },
      });
    },
    {
      scope: container,
    }
  );

  return (
    <section className={styles.cta} ref={container}>
      <div className={styles["cta-left"]} id="cta-left">
        <img className={styles.ctaImage} src={ctaImage} alt="" />
      </div>
      <div className={styles["cta-right"]} id="cta-right">
        <div className={`${styles.subHeading} subHead-text`} id="subheading">
          Our Company
        </div>
        <div className={`${styles.heading} d-text`} id="heading">
          Where Your Vision Becomes Our Code
        </div>
        <div id="body">
          <div className={`${styles.description} body-text`}>
            Embark on a digital journey where every pixel tells your story.
            Merge custom web design with your brand's DNA to elevate your online
            presence uniquely. Your vision and our precisely crafted code,
            ensures distinction in every aspect. Choose us for a web experience
            that goes beyond the ordinary.
          </div>
          {/* <div className={`${styles.label} label-text`}>
            Read More
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Cta;
