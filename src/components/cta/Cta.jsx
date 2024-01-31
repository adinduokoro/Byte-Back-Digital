import React from "react";
import styles from "./Cta.module.css";
import ctaImage from "../../assets/cta-img.png";
import arrow from "../../assets/arrow-right.svg"

const Cta = () => {
  return (
    <section className={styles.cta}>
      <div className={styles["cta-left"]}>
        <img className={styles.ctaImage} src={ctaImage} alt="" />
      </div>
      <div className={styles["cta-right"]}>
        <div className={`${styles.subHeading} subHead-text`}>
          <img className={styles.icon} src={arrow} alt="" />
          Our Company
        </div>
        <div className={`${styles.heading} d-text`}>
          Where Your Vision Becomes Our Code
        </div>
        <div className={`${styles.description} body-text`}>
          Embark on a digital journey where every pixel tells your story. Merge
          custom web design with your brand's DNA to elevate your online
          presence uniquely. Your vision and our precisely crafted code, ensures
          distinction in every aspect. Choose us for a web experience that goes
          beyond the ordinary.
        </div>
        <div className={`${styles.label} label-text`}>
          {/* icon */}
          Read More
        </div>
      </div>
    </section>
  );
};

export default Cta;
