import React from 'react'
import "./Navigation.module.css"
import styles from "./Navigation.module.css"
import logo from "../../assets/logo.svg"
import menuToggle from "../../assets/menuToggle.svg"
import plusIcon from '../../assets/plus-icon.svg'

const Navigation = () => {
  return (
    <section className={styles.navigation}>
      <img className={styles.logo} src={logo} alt="logo" />
      <ul className={styles.navlinks}>
        <li className={`${styles.navlink} link-text`}>Home</li>
        <li className={`${styles.navlink} link-text`}>About Us</li>
        <li className={`${styles.navlink} link-text`}>Portfolio</li>
        <li className={`${styles.navlink} link-text`}>
          Services
          <img className={styles.dropdown} src={plusIcon}/>
        </li>
        <li className={`${styles.navlink} link-text`}>Contact</li>
      </ul>
      <div className={styles.menuToggle}>
        <img classNam={styles.toggle} src={menuToggle} alt="menu" />
      </div>
    </section>
  )
}

export default Navigation 