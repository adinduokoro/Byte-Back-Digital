import React from "react";
import styles from "./Gallery.module.css";
import arrow from "../../assets/arrow-right.svg";
import { projects } from "./data";

const Gallery = () => {
  return (
    <section className={styles.gallery}>
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

      <div className={styles.gallery}>gallery pics, need to learn grid</div>
    </section>
  );
};

export default Gallery;
