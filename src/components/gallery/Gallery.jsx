import React from "react";
import styles from "./Gallery.module.css";
import arrow from "../../assets/arrow-right.svg";

const Gallery = () => {
  return (
    <section className={styles.gallery}>
      <div className={styles["header-content"]}>
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
      <div className={styles.gallery}></div>
    </section>
  );
};

export default Gallery;
