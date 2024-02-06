import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <footer>
      <section className={styles.footer}>
        <div className={styles["footer-top"]}>
          <img className={styles.logo} src={logo} alt="" />
          <ul className={styles["footer-socials"]}>
            <li className={`${styles.social} body-text`}>
              <img src="" alt="" />
              Facebook
            </li>
            <li className={`${styles.social} body-text`}>
              <img src="" alt="" />
              Twitter
            </li>
            <li className={`${styles.social} body-text`}>
              <img src="" alt="" />
              LinkedIn
            </li>
            <li className={`${styles.social} body-text`}>
              <img src="" alt="" />
              Instagram
            </li>
          </ul>
        </div>
        <div className={styles["footer-bottom"]}>
          <div className={styles["footer-bottom-left"]}>hi</div>
          <div className={styles["footer-bottom-right"]}>
            <div className={styles["footer-bottom-right-top"]}>
              <div className={`${styles["quick-link"]} title-text`}>
                Quick Links
              </div>
              <ul className={styles.links}>
                <li className={`${styles.link} body-text`}>Home</li>
                <li className={`${styles.link} body-text`}>About Us</li>
                <li className={`${styles.link} body-text`}>Portfolio</li>
                <li className={`${styles.link} body-text`}>Service</li>
                <li className={`${styles.link} body-text`}>Contact</li>
              </ul>
            </div>
            <div
              className={`${styles["footer-bottom-right-bottom"]} label-text`}
            >
              <p>Copyright @2023, <span>&nbsp;Byte Back Digital&nbsp;</span>{" "}  All Rights
              Reserved</p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
