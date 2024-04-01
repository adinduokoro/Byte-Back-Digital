import React from "react";
import styles from "./HostingPlans.module.css";
import { packages } from "./data";

const HostingPlans = ({ forwardedRef }) => {
  const features = [
    {
      id: "1",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/26720eab30f263c02159fbee500250666e274b1a365afbaf22511752f1bc4b7c?apiKey=5170a780d77646269f00d6a1e7072045&",
      description: "Easy WordPress Install",
    },
    {
      id: "2",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3faab94848eaaff9e796a149efe601c909924c58d17da8b47d4e847c09c37586?apiKey=5170a780d77646269f00d6a1e7072045&",
      description: "Custom Control Panel",
    },
    {
      id: "3",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e871c00f7affac0bfd1e3eefefa09033990fb15d5d2412aea065f1d43ee1e350?apiKey=5170a780d77646269f00d6a1e7072045&",
      description: "Award-Winning Support",
    },
  ];

  return (
    <section className={`${styles.hostingPlans} xlg`} ref={forwardedRef}>
      <div className={styles.header}>
        <div className={`${styles.subHeading} subHead-text`} id="subheading">
          Perfect hosting for your next site
        </div>
        <div className={`${styles.heading} d-text`} id="heading">
          Web Hosting Plans
        </div>
      </div>
      <div className={styles.hostingOptions}>
        {packages.map((plan, index) => {
          return (
            <div className={styles.package} key={index}>
              <div className={styles.top}>
                <img src={plan.image} className={styles.image} alt="" />
                <div className={styles["header-content"]}>
                  <div className={`${styles.name} title-text`}>{plan.name}</div>
                  <div className={`${styles.desc} label-text`}>{plan.desc}</div>
                </div>
                <div className={`${styles["price-content"]} label-text`}>
                  <span className={`${styles["dollar-sign"]}`}>$</span>
                  <span className={styles.price}>{plan.price}</span>
                  <span className={styles.rate}>mo</span>
                </div>
                <div className={styles.perks}>
                  {plan.perks.map((perk, index) => {
                    return (
                      <div className={styles.perk} key={index}>
                        {perk.icon}
                        {perk.perk}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className={styles.bottom}>
                <div className={styles.bottom}>
                  <button
                    className={styles.planBtn}
                    onClick={() => window.open(`${plan.link}`, "_blank")}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.features}>
        {features.map((feature, index) => (
          <div className={styles.feature} key={index}>
            <img className={styles.featureIcon} src={feature.imageSrc} alt="" />
            <p className={styles.featureDesc}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HostingPlans;
