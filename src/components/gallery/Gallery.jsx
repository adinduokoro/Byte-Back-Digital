import React from "react";
import styles from "./Gallery.module.css";
import arrow from "../../assets/arrow-right.svg";
import { projects } from "./data";
import linkicon from "../../assets/link-icon.svg"

const Gallery = () => {
  return (
    <section className={styles.gallery}>
      <div className={styles["gallery-header"]}>
        <div className={`${styles.subHeading} subHead-text`}>
          <img className={styles.icon} src={arrow} alt="" />
          Recent Works Gallery
        </div>
        <div className={styles["heading-content"]}>
          <div className={`${styles.heading} d-text`}>
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
            <div className={styles.project} key={index}>
              <div className={styles["project-container"]}>
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
