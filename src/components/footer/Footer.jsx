import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <section className={styles.footer}>
        <div className={styles["footer-top"]}>
          Logo 
          Socials
        </div>
        <div className={styles["footer-bottom"]}>
          <div className={styles.left}>
            Header 
            Contact
          </div>
          <div className={styles.right}>
            <div className={styles["bottom-right-top"]}>
              Quick Links
            </div>
            <div className={styles["bottom-right-bottom"]}>
              Copyright
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
