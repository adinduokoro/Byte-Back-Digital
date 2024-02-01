import React from "react";
import styles from "../../components/service/Service.module.css";
import arrow from "../../assets/arrow-right.svg";
import { badges } from "./data";

const Service = () => {
  return (
    <section className={styles.service}>
      <div className={styles.header}>
        <div className={`${styles.subHeading} subHead-text`}>
          <img className={styles.icon} src={arrow} alt="" />
          Popular Services
        </div>
        <div className={`${styles.heading} d-text`}>
          Crafting Outstanding Web Design Solutions
        </div>
      </div>
      <div className={styles.badges}>
        {badges.map((badge, index) => {
          return (
            <div className={styles.badge} key={index}>
              <img className={styles.badgeImage} src={badge.image} alt="" />
              <div className={`${styles["badge-title"]} title-text`}>{badge.topic}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Service;
