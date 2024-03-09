import React from "react";
import styles from "./HostingPlans.module.css";
import { packages } from "./data";

const HostingPlans = () => {
  return (
    <section className={`${styles.hostingPlans} xlg`}>
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
                <div className={styles.price}>
                  ${plan.price}mo
                </div>
                <div className={styles.perks}>
                  {plan.perks.map((perk, index) => {
                    return (
                      <div className={styles.perks} key={index}>
                        {perk.icon}
                        {perk.perk}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className={styles.bottom}>
                <button className={styles.planBtn}>Get Started</button>
              </div>
            </div>
          );
        })}
      </div>
      {/* extra content */}
    </section>
  );
};

export default HostingPlans;
