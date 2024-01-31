import React from "react";
import styles from "./Offer.module.css";
import arrow from "../../assets/arrow-right.svg";

const Offer = () => {
  return (
    <section className={styles.offer}>
      <div className={styles.marquee}>
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
          <div className={`${styles.subHeading} subHead-text`}>
            <img className={styles.icon} src={arrow} alt="" />
            What We Do
          </div>
          <div className={`${styles.heading} d-text`}>
            Service That Makes Your Brand Stand Out and Grow
          </div>
          <div className={styles["offer-cards"]}>
            {/* create card */}
          </div>
        </div>
        <div className={styles.right}>img</div>
      </div>
    </section>
  );
};

export default Offer;
