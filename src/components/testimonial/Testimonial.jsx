import React from "react";
import styles from "./Testimonials.module.css";
import clientPic from "../../assets/client-picture.png";
import star from "../../assets/star-bold.svg";
import leftBtn from "../../assets/left-vector.svg";
import rightBtn from "../../assets/right-vector.svg";

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
            <div className={styles.rating}>
              <img className="start" src={star} alt="" />
              <img className="start" src={star} alt="" />
              <img className="start" src={star} alt="" />
              <img className="start" src={star} alt="" />
              <img className="start" src={star} alt="" />
            </div>
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
              <img className={styles["left-button"]} src={rightBtn} alt="" />
              <div className={styles.indexs}>
                <div className={styles.index}></div>
                <div className={styles.index}></div>
                <div className={styles.index}></div>
              </div>
              <img className={styles["right-button"]} src={leftBtn} alt="" />
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
