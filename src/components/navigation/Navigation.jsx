import React, { useRef, useState } from "react";
import styles from "./Navigation.module.css";
import logo from "../../assets/logo.svg";
import menuToggle from "../../assets/menuToggle.svg";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { navLinks } from "./data";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Navigation = () => {
  const form = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const initialState = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  async function sendEmail(e) {
    e.preventDefault();
    try {
      const result = await emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      );
      initialState();
      toast.success("Message Sent");
    } catch (error) {
      initialState();
      toast.error(error);
    }
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <navigation className={styles.navigation}>
      <div className={styles["nav-container"]} id="nav">
        <div className={styles["nav-content"]}>
          <Link to="/">
            <img className={styles.logo} src={logo} alt="logo" />
          </Link>
          <ul className={styles.navLinks}>
            {navLinks.map((link, index) => {
              return (
                <li className={`${styles.navLink} link-text`} key={index}>
                  <Link to={link.path}>
                    {" "}
                    <strong>{link.name}</strong>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className={styles.menuToggle} onClick={toggleMenu}>
            <img className={styles.toggle} src={menuToggle} alt="menu" />
          </div>
        </div>
      </div>
      {isOpen && (
        <>
          <div className={styles["toggle-overlay"]} onClick={closeMenu}></div>

          <div className={`${styles["toggle-menu"]}`}>
            <Icon
              icon="fa:close"
              className={styles["close-icon"]}
              onClick={closeMenu}
            />
            <form action="" ref={form} onSubmit={sendEmail}>
              <div className={`${styles["nav-header"]} title-text`}>
                Book Appointment
              </div>
              <label>
                <div className="body-text">Full Name:</div>
                <input
                  className="body-text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={25}
                  type="text"
                />
              </label>
              <label>
                <div className="body-text">Email:</div>
                <input
                  className="body-text"
                  name="name"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  maxLength={25}
                  type="email"
                />
              </label>
              <label>
                <textarea
                  className="body-text"
                  type="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
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
    </navigation>
  );
};

export default Navigation;
