import React, { useEffect, useState } from "react";
import styles from "./Testimonials.module.css";
import clientPic from "../../assets/client-picture1.png";
import star from "../../assets/star-bold.svg";
import leftBtn from "../../assets/left-vector.svg";
import rightBtn from "../../assets/right-vector.svg";
import { testimonials } from "./data";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = testimonials.length;

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
    }, 7000);
    return () => clearInterval(interval);
  }, [currentIndex, length]);

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
          {testimonials.map((testimonial, index) => {
            return (
              <div
                className={
                  index === currentIndex
                    ? `${styles.review} ${styles.active}`
                    : `${styles.review}`
                }
              >
                <div className={styles.rating}>
                  {(() => {
                    const stars = [];
                    const maxStars = Math.min(testimonial.rating, 5);
                    for (let i = 0; i < maxStars; i++) {
                      stars.push(
                        <img className="star" src={star} alt="" key={i} />
                      );
                    }
                    return stars;
                  })()}
                </div>
                <div className={`${styles.feedback} subHead-text`}>
                  {testimonial.feedback}
                </div>
                <div className={styles.info}>
                  <div className={`${styles.name} title-text`}>
                    {testimonial.name}
                  </div>
                  <div className={`${styles.title} body-text`}>
                    {testimonial.title}
                  </div>
                </div>
              </div>
            );
          })}
          <div className={styles["slide-controls"]}>
            <img
              className={styles["left-button"]}
              src={rightBtn}
              onClick={prevSlide}
              alt=""
            />
            <div className={styles.index}>
              {testimonials.map((_, index) => (
                <div
                  className={
                    currentIndex === index
                      ? `${styles.point} ${styles["point-active"]}`
                      : styles.point
                  }
                  onClick={() => setCurrentIndex(index)}
                  key={index}
                ></div>
              ))}
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
          {testimonials.map((client, index) => {
            return(
              <img className={index === currentIndex ? `${styles["client-pic"]} ${styles.active}` : `${styles["client-pic"]}`} src={client.image} alt="" />

            )
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
