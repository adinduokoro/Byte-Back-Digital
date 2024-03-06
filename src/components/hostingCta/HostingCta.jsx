import React from "react";
import styles from "./HostingCta.module.css";
import arrow from "../../assets/arrow-right.svg";

const HostingCta = () => {
  return (
    <section className={styles.hostingCta}>
      <div className={styles["cta-left"]}>
        <div className={`${styles.subHeading} subHead-text`} id="subheading">
          <img className={styles.icon} src={arrow} alt="" />
          What We Offer
        </div>
        <div className={`${styles.heading} d-text`} id="heading">
          Affordable Design, Reliable Hosting: Let's Get Started!
        </div>
        <div id="body">
          <div className={`${styles.description} body-text`}>
            Embark on a digital journey where every pixel tells your story.
            Merge custom web design with your brand's DNA to elevate your online
            presence uniquely. Your vision and our precisely crafted code,
            ensures distinction in every aspect. Choose us for a web experience
            that goes beyond the ordinary.
          </div>
        </div>
      </div>
      <div className={styles["cta-right"]}>
      </div>
    </section>
  );
};

export default HostingCta;
