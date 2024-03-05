import React from 'react'
import styles from "./HostingCta.module.css"

const HostingCta = () => {
  return (
    <section className={styles.hostingCta}>
      <div className={styles["cta-left"]}></div>
      <div className={styles["cta-right"]}></div>
    </section>
  )
}

export default HostingCta