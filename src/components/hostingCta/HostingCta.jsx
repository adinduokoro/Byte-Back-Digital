import React from "react";
import styles from "./HostingCta.module.css";
import image from "../../assets/hostingCtaImage.png"

const HostingCta = () => {
  return (
    <section className={styles.hostingCta}>
      <div className={styles["cta-left"]}>
        <div className={`${styles.subHeading} subHead-text`} id="subheading">
          What We Offer
        </div>
        <div className={`${styles.heading} d-text`} id="heading">
          Affordable Design, Reliable Hosting: Let's Get Started!
        </div>
        <div id="body">
          <div className={`${styles.description} body-text`}>
            Empower Your Business: Choose Our Premium Hosting for Expert Support
            and Cutting-Edge Technology, Keeping Your Website Ahead!
          </div>
        </div>
        <div className={styles.ctaButtons}>
          <button className={`${styles.gsButton} body-text`} >Get Started</button>
          <button className={`${styles.ppButton} body-text`}>Plan & Pricing</button>
        </div>
      </div>
      <div className={styles["cta-right"]}>
        <img className={styles["cta-image"]} src={image} alt="" />
      </div>
    </section>
  );
};

export default HostingCta;
