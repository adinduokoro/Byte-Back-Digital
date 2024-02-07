import React, { useState } from "react";
import "./Navigation.module.css";
import styles from "./Navigation.module.css";
import logo from "../../assets/logo.svg";
import menuToggle from "../../assets/menuToggle.svg";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false)
    console.log(isOpen)
  }

  return (
    <section className={styles.navigation}>
      <div className={styles["nav-container"]}>
        <Link to="/">
          <img className={styles.logo} src={logo} alt="logo" />
        </Link>
        <ul className={styles.navLinks}>
          <li className={`${styles.navLink} link-text`}>
            <Link to="/">Home</Link>
          </li>
          <li className={`${styles.navLink} link-text`}>
            <Link>About</Link>
          </li>
          <li className={`${styles.navLink} link-text`}>
            <Link>Portfolio</Link>
          </li>
          <li className={`${styles.navLink} link-text`}>
            <Link>Services</Link>
          </li>
          <li className={`${styles.navLink} link-text`}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className={styles.menuToggle} onClick={toggleMenu}>
          <img className={styles.toggle} src={menuToggle} alt="menu" />
        </div>
      </div>
      <div className={styles["toggle-overlay"]} onClick={closeMenu}></div>
      <div className={styles["toggle-menu"]}>
        <Icon icon="fa:close" className={styles["close-icon"]} onClick={closeMenu}/>
        <div className={`${styles["nav-header"]} title-text`}>
          Book Appointment
        </div>


        Email Message Submit Now Socials
      </div>
    </section>
  );
};

export default Navigation;
