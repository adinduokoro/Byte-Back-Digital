import React, { useRef, useState } from "react";
import styles from "./Contact.module.css";
import { contacts } from "./data";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const container = useRef();
  const form = useRef();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useGSAP(() => {
    gsap.from(["#subheading", "#heading"], {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ["#subheading", "#heading"],
        scrub: 3,
        start: "top 80%",
        end: "top 80%",
      }
    })
  },{scope: container})

  const initialState = () => {
    setName("");
    setPhone("");
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

  return (
    <section className={styles.contact} ref={container}>
      <div className={styles.left}>
        <div className={`${styles.subHeading} subHead-text`} id="subheading">
          Contact Us
        </div>
        <div className={`${styles.heading} d-text`} id="heading">
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
                  <span>{contact.method}:</span> <a href={contact.href}>{contact.details}
                    </a>
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
        <form action="" ref={form} onSubmit={sendEmail}>
          <div className={styles["form-header"]}>
            <div className={`${styles["subHeading"]} subHead-text`}>
              Contact Us
            </div>
            <div
              className={`${styles.heading} d-text`}
              style={{ marginBottom: "1.87rem" }}
            >
              Drop a Message
            </div>
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
            <div className="body-text">Phone:</div>
            <input
              className="body-text"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              maxLength={16}
              type="number"
            />
          </label>
          <label>
            <div className="body-text">Email:</div>
            <input
              className="body-text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              maxLength={50}
              type="email"
            />
          </label>

          <label>
            <textarea
              className="body-text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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

export default Contact;
