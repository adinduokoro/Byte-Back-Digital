import React, { useRef, useEffect } from "react";
import styles from "./Gallery.module.css";
import { projects } from "./data";
import linkicon from "../../assets/link-icon.svg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const container = useRef();

  // useGSAP(
  //   () => {
  //     gsap.from(["#subheading", "#heading"], {
  //       opacity: 0,
  //       y: 50,
  //       stagger: 0.2,
  //       scrollTrigger: {
  //         trigger: ["#subheading", "#heading"],
  //         scrub: 3,
  //         start: "top 90%",
  //         end: "top 90%",
  //       },
  //     });

  //     if (window.innerWidth > 768) {
  //       gsap.from(`.${styles.project}:nth-child(odd)`, {
  //         opacity: 0,
  //         x: -150,
  //         stagger: 0.2,
  //         scrollTrigger: {
  //           trigger: "#gallery-container",
  //           scrub: 3,
  //           start: "top 95%",
  //           end: "50% 95%",
  //         },
  //       });
  //       gsap.from(`.${styles.project}:nth-child(even)`, {
  //         opacity: 0,
  //         x: 150,
  //         stagger: 0.2,
  //         scrollTrigger: {
  //           trigger: "#gallery-container",
  //           scrub: 3,
  //           start: "top 95%",
  //           end: "25% 95%",
  //         },
  //       });
  //     }
  //     else{
  //       // coming back, needs animation
  //     }
  //   },
  //   { scope: container }
  // );

  const handleMouseLeave = (index) => {
    const projectContainer = container.current.querySelector(
      `#project-container-${index}`
    );
    projectContainer.scrollTop = 0;
  };

  return (
    <section className={styles.gallery} ref={container}>
      <div className={styles["gallery-header"]}>
        <div className={`${styles.subHeading} subHead-text`} id="subheading">
          Recent Works Gallery
        </div>
        <div className={styles["heading-content"]}>
          <div className={`${styles.heading} d-text`} id="heading">
            Take a Look at Our Recent Project Gallery
          </div>
          {/* <button className={`${styles.button} link-text`}>
            View More Projects
          </button> */}
        </div>
      </div>

      <div className={styles["gallery-container"]} id="gallery-container">
        {projects.map((project, index) => {
          return (
            <div
              className={styles["project-card"]}
              key={index}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <div
                className={styles["project-img-container"]}
                id={`project-container-${index}`}
              >
                <img className={styles.image} src={project.image} alt="" />
              </div>
              <div className={`${styles.title} title-text`}>
                {project.title}
                <a target="_blank" href={project.link}>
                  <img src={linkicon} alt="" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;
