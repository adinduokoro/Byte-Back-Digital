import React, { useRef, useState } from "react";
import "./Navigation.module.css";
import styles from "./Navigation.module.css";
import logo from "../../assets/logo.svg";
import menuToggle from "../../assets/menuToggle.svg";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { navLinks } from "./data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger)

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const container = useRef()

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: container.current,
      markers: true,
      start: "top 9%",
      end: "center",
      toggleClass: {targets: "#nav", className: `${styles.active}`}
    })
  }, {
    scope : container
  })

  return (
    <div className={styles.test}>
    <section className={styles.navigation} ref={container}>
      <div className={styles["nav-container"]} id="nav">
        <Link to="/">
          <img className={styles.logo} src={logo} alt="logo" />
        </Link>
        <ul className={styles.navLinks}>
          {navLinks.map((link, index) => {
            return (
              <li className={`${styles.navLink} link-text`} key={index}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            );
          })}
        </ul>
        <div className={styles.menuToggle} onClick={toggleMenu}>
          <img className={styles.toggle} src={menuToggle} alt="menu" />
        </div>
      </div>
      {/* Conditionally render overlay and menu */}
      {isOpen && (
        <>
          {/* Overlay to close menu when clicked outside */}
          <div className={styles["toggle-overlay"]} onClick={closeMenu}></div>

          {/* Menu content */}
          <div className={`${styles["toggle-menu"]}`}>
            <Icon
              icon="fa:close"
              className={styles["close-icon"]}
              onClick={closeMenu}
            />
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
              <button className={`${styles.button} link-text`}>
                Send Message
              </button>
            </form>
          </div>
        </>
      )}
    </section>

    </div>
  );
};

export default Navigation;
