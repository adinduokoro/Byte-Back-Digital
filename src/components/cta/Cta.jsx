import React from 'react'
import styles from "./Cta.module.css"
import ctaImage from "../../assets/cta-img.png"

const Cta = () => {
  return (
    <section className={styles.cta}>
        <div className={styles["cta-left"]}>
            <img src={ctaImage} alt="" />
        </div>
        <div className={styles["cta-right"]}>
            <div className={styles.subHeading}>
                {/* icon */}
                Our Company
            </div>
            <div className={styles.heading}>
                Where Your Vision Becomes Our Code
            </div>
            <div className={styles.description}>Embark on a digital journey where every pixel tells your story. Merge custom web design with your brand's DNA to elevate your online presence uniquely. Your vision and our precisely crafted code, ensures distinction in every aspect. Choose us for a web experience that goes beyond the ordinary.</div>
            <div className={styles.label}>Read More</div>
        </div>
    </section>
  )
}

export default Cta