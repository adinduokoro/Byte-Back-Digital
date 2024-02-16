import React, { useRef } from "react";
import styles from "./Gallery.module.css";
import arrow from "../../assets/arrow-right.svg";
import { projects } from "./data";
import linkicon from "../../assets/link-icon.svg"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
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

  },{
    scope: container
  });

  const handleMouseLeave = (index) => {
    const projectContainer = container.current.querySelector(`#project-container-${index}`);
    projectContainer.scrollTop = 0;
  };

  return (
    <section className={styles.gallery} ref={container}>
      <div className={styles["gallery-header"]}>
        <div className={`${styles.subHeading} subHead-text`} id="subheading">
          <img className={styles.icon} src={arrow} alt="" />
          Recent Works Gallery
        </div>
        <div className={styles["heading-content"]}>
          <div className={`${styles.heading} d-text`} id="heading">
            Take a Look at Our Recent Project Gallery
          </div>
          <button className={`${styles.button} link-text`}>
            View More Projects
          </button>
        </div>
      </div>

      <div className={styles["gallery-container"]}>
        {projects.map((project, index) => {
          return (
            <div className={styles.project} key={index} onMouseLeave={() => handleMouseLeave(index)}>
              <div className={styles["project-container"]} id={`project-container-${index}`} >
                <img src={project.image} alt="" />
              </div>
              <div className={`${styles.title} title-text`}>
                {project.title}
                <img src={linkicon} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;