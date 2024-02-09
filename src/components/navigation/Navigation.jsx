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
    console.log(isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

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
      <div
        className={
          isOpen
            ? `${styles["toggle-overlay"]}`
            : `${styles["toggle-overlay"]} ${styles["menu-close"]}`
        }
        onClick={closeMenu}
      ></div>

      <div
        className={
          isOpen
            ? `${styles["toggle-menu"]}`
            : `${styles["toggle-menu"]} ${styles["menu-close"]}`
        }
      >
        <Icon icon="fa:close" className={styles["close-icon"]} onClick={closeMenu}/>
        <form action="">
          <div className={`${styles["nav-header"]} title-text`}>
            Book Appointment
          </div>
          <label>
            <div className="body-text">Full Name:</div>
            <input className="body-text" maxLength={25} type="text" />
          </label>
          <label>
            <div className="body-text">Email:</div>
            <input className="body-text" maxLength={25} type="email" />
          </label>
          <label>
            <textarea
              className="body-text"
              type="message"
              placeholder="Message:"
              rows={4}
              cols={40}
              maxLength={200}
            />
          </label>
          <button className={`${styles.button} link-text`}>Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Navigation;
