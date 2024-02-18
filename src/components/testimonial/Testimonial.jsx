import React, { useState } from "react";
import styles from "./Testimonials.module.css";
import clientPic from "../../assets/client-picture.png";
import star from "../../assets/star-bold.svg";
import leftBtn from "../../assets/left-vector.svg";
import rightBtn from "../../assets/right-vector.svg";
import { testimonials } from "./data";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = testimonials.length;

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
    console.log(currentIndex);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
    console.log(currentIndex);
  };

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
              <img className="star" src={star} alt="" />
              <img className="star" src={star} alt="" />
              <img className="star" src={star} alt="" />
              <img className="star" src={star} alt="" />
              <img className="star" src={star} alt="" />
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
          </div>
          <div className={styles["slide-controls"]}>
            <img
              className={styles["left-button"]}
              src={rightBtn}
              onClick={prevSlide}
              alt=""
            />
            <div className={styles.index}>
              <div
                className={`${styles["point-active"]} ${styles.point}`}
              ></div>
              <div className={styles.point}></div>
              <div className={styles.point}></div>
            </div>
            <img
              className={styles["right-button"]}
              src={leftBtn}
              onClick={nextSlide}
              alt=""
            />
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
