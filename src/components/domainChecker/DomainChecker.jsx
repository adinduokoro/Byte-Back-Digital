import React from "react";
import styles from "./DomainChecker.module.css";

const DomainChecker = () => {
  const prices = [
    {
      domain: ".com",
      price: 9.99
    },
    {
      domain: ".net",
      price: 9.99
    },
    {
      domain: ".org",
      price: 9.99
    },
    {
      domain: ".co",
      price: 9.99
    },
    {
      domain: ".us",
      price: 9.99
    },
    {
      domain: ".edu",
      price: 9.99
    },
  ]

  return (
    <section className={`${styles.domainChecker} small`}>
      <div className={styles.left}>
        <div className={`${styles.subHeading} subHead-text`}>All Prices Per Year</div>
        <div className={`${styles.heading} d-text`}>Search Your Domain Name</div>
      </div>
      <div className={styles.right}>
        <div className={styles["search-content"]}>
          <input type="text" className={styles.search} />
          <button className={`${styles["search-btn"]} body-text`}>Check</button>
        </div>
        <div className={styles.prices}>
          {prices.map((price, index) => {
            return(
              <div className={styles.card} key={index}>
                <div className={`${styles.top} label-text`}>{price.domain}</div>
                <div className={`${styles.bottom} label-text`}>${price.price}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default DomainChecker;
