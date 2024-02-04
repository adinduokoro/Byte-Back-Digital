import React from "react";
import styles from "./Testimonials.module.css";
import clientPic from "../../assets/client-picture.png";

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
      </div>
      <div className={styles["testimonial-content"]}>
        <div className={styles.left}>
          <div className={styles.review}>
            <div className={styles.rating}> 5 stars</div>
            <div className={`${styles.feedback} subHead-text`}>
              Incredible custom design! The team's dedication, creativity, and
              attention to detail exceeded our expectations. Highly recommend
              their top-notch service!
            </div>
          </div>
          <div className={styles.info}>
            <div className={`${styles.name} title-text`}>Jane Doe</div>
            <div className={`${styles.title} body-text`}>CEO & Founder</div>
            <div className={styles["slide-controls"]}>
              <div className={styles["left-button"]}></div>
              <div className={styles.index}>
                <div className={styles.index1}></div>
                <div className={styles.index2}></div>
                <div className={styles.index3}></div>
              </div>
              <div className={styles["right-button"]}>
                <div className={styles["image-container"]}>
                  <img src="" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <img className={styles["client-pic"]} src={clientPic} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
