import React from "react";
import "./Navigation.module.css";
import styles from "./Navigation.module.css";
import logo from "../../assets/logo.svg";
import menuToggle from "../../assets/menuToggle.svg";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <section className={styles.navigation}>
      <div className={styles["nav-container"]}>
        <Link to="/">
          <img className={styles.logo} src={logo} alt="logo" />
        </Link>

        <ul className={styles.navLinks}>
          <li className={`${styles.navLink} link-text`}><Link to="/">Home</Link></li>
          <li className={`${styles.navLink} link-text`}><Link>About Us</Link></li>
          <li className={`${styles.navLink} link-text`}><Link>Portfolio</Link></li>
          <li className={`${styles.navLink} link-text`}><Link>Services</Link></li>
          <li className={`${styles.navLink} link-text`}><Link to="/contact">Contact</Link></li>
        </ul>
        <div className={styles.menuToggle}>
          <img className={styles.toggle} src={menuToggle} alt="menu" />
        </div>
      </div>
    </section>
  );
};

export default Navigation;
