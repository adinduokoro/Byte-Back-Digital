import React , { useRef } from 'react'
import styles from "../hosting/Hosting.module.css"
import { DomainChecker, Header, HostingCta, HostingFeatures, HostingHero, HostingPlans } from '../../components'

const Hosting = () => {
  const hostingPlansRef = useRef(null);

  const scrollToHostingPlans = () => {
    hostingPlansRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Header headerTitle={"Web Hosting"}/>
      <HostingCta scrollToHostingPlans={scrollToHostingPlans} />
      <DomainChecker />
      <HostingHero />
      <HostingPlans forwardedRef={hostingPlansRef} />
      {/* <HostingFeatures /> */}
    </div>
  )
}

export default Hosting