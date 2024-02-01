import React from "react";
import styles from "./Offer.module.css";
import arrow from "../../assets/arrow-right.svg";
import { cards } from "./data";
import offerImage from "../../assets/offer-image.png";

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
            Service That Makes Your Brand <span>Stand Out</span> and Grow
          </div>
          <div className={styles["offer-cards"]}>
            {cards.map((card, index) => {
              return (
                <div className={styles.card} key={index}>
                  <div className={`${styles["card-index"]} body-text`}>
                    {index + 1}
                  </div>
                  <div className={styles["card-content"]}>
                    <div className={`${styles["card-header"]} title-text`}>
                      {card.header}
                    </div>
                    <div className={`${styles["card-body"]} body-text`}>
                      {card.body}
                    </div>
                    <div className={styles["horizontal-rule"]}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.right}>
          <img className={styles.offerImage} src={offerImage} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Offer;
