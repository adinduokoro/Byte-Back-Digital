import React from "react";
import styles from "./Testimonials.module.css";

const Testimonial = () => {
  return (
    <section className={styles.testimonial}>
      <div className={styles.marquee}>
        <div className={styles["marquee-text"]}>
          CLIENTS <span>SAY</span>
        </div>
        <div className={styles["marquee-text"]}>
          CLIENTS <span>SAY</span>
        </div>
        <div className={styles["marquee-text"]}>
          CLIENTS <span>SAY</span>
        </div>
        <div className={styles["testimonial-content"]}>
          <div className={styles.left}>

          </div>
          <div className={styles.right}>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
