import React from "react";
import styles from "./Offer.module.css";

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
        <div className={styles["marquee-text"]}>
          Byte <span>Back</span> Digital
        </div>
        <div className={styles["marquee-text"]}>
          Byte <span>Back</span> Digital
        </div>
      </div>
      <div className={styles["offer-content"]}>content</div>
    </section>
  );
};

export default Offer;
