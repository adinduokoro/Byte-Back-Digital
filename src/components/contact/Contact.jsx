import React from "react";
import styles from "./Contact.module.css";
import arrow from "../../assets/arrow-right.svg";
import { contacts } from "./data";

const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.left}>
        <div className={`${styles.subHeading} subHead-text`}>
          <img className={styles.icon} src={arrow} alt="" />
          Contact Us
        </div>
        <div className={`${styles.heading} d-text`}>
          Ready to Work <span>your</span> Next Project{" "}
        </div>
        <div className={styles.contacts}>
          {contacts.map((contact, index) => {
            return (
              <div className={styles["contact-card"]} key={index}>
                <img src={contact.img} alt="" />
                <div className={`${styles["contact-type"]} title-text`}>
                  {contact.title}
                </div>
                <div className={`${styles.method} body-text`}>
                  <span>{contact.method}:</span> {contact.details}
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.socials}>
          <div className={`${styles["follow-us"]} title-text`}>Follow Us</div>
          Links
        </div>
      </div>
      <div className={styles.right}>
        <form action="">
          <div className={styles["form-header"]}>
            <div className={`${styles.subHeading} subHead-text`}>
              <img className={styles.icon} src={arrow} alt="" />
              Contact Us
            </div>
            <div className={`${styles.heading} d-text`}>Drop a Message</div>
          </div>

          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
