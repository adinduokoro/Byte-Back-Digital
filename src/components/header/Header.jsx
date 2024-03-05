import React from "react";
import styles from "./Header.module.css";
import bg from "../../assets/web-hosting-half-hero.png"

const Header = ({ headerTitle }) => {
  return (
    <section className={`${styles.header} half`}>
      <img className={styles.bg} src={bg} alt="" />
      <h2 className={styles["header-title"]}>{headerTitle}</h2>
    </section>
  );
};

export default Header;
