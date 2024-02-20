import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/logo.svg";
import img from "../../assets/footer-img.png";
import { Link } from "react-router-dom";
import { navLinks } from "../navigation/data";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer>
      <section className={styles.footer}>
        <div className={styles["footer-top"]}>
          <Link to="/">
            <img className={styles.logo} src={logo} alt="" />
          </Link>
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
          <div className={styles["footer-bottom-left"]}>
            <div className={styles["footer-bottom-left-top"]}>
              <p className={styles["footer-cta"]}>
                <div className={styles["footer-img"]}>
                  <img src={img} alt="" />
                </div>
                Let's Work
              </p>
              <p className={styles["footer-cta"]}>Together</p>
            </div>
            <div className={styles["footer-bottom-left-bottom"]}>
              <div className={`${styles.email} body-text`}>
                bytebackdigital@gmail.com
              </div>
              <div className={`${styles.phone} body-text`}>
                +1 (800) 123 - 4567
              </div>
            </div>
          </div>
          <div className={styles["footer-bottom-right"]}>
            <div className={styles["footer-bottom-right-top"]}>

              
              <div className={`${styles["quick-link"]} title-text`}>
                Quick Links
              </div>
              <ul className={styles.links}>
                {navLinks.map((link, index) => {
                  return (
                    <Link to={link.path} key={index}>
                      <li className={`${styles.link} body-text`}>
                        {link.name}
                      </li>
                    </Link>
                  );
                })}
              </ul>


            </div>
            <div
              className={`${styles["footer-bottom-right-bottom"]} label-text`}
            >
              <p>
                Copyright @{year}, <span>&nbsp;Byte Back Digital&nbsp;</span>{" "}
                All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
