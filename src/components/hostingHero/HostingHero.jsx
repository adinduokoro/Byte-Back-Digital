import React from "react";
import styles from "./HostingHero.module.css";
import img from "../../assets/hosting-hero-img.png";

const HostingHero = () => {
  return (
    <section className={styles.hostingHero}>
      <img className={styles.heroImg} src={img} alt="" />
      <div className={styles.marquee} id="marquee">
        <div className={styles["marquee-text"]}>
          Byte Back <span>Hosting</span>
        </div>
        <div className={styles["marquee-text"]}>
        Byte Back <span>Hosting</span>
        </div>
        <div className={styles["marquee-text"]}>
        Byte Back <span>Hosting</span>
        </div>
      </div>
    </section>
  );
};

export default HostingHero;
