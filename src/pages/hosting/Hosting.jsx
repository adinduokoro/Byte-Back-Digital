import React from 'react'
import { packages } from './data'
import styles from "../hosting/Hosting.module.css"
import { DomainChecker, Header, HostingCta, HostingHero, HostingPlans } from '../../components'

const Hosting = () => {
  return (
    <div>
      <Header headerTitle={"Web Hosting"}/>
      <HostingCta/>
      <DomainChecker />
      <HostingHero />
      <HostingPlans />
    </div>
  )
}

export default Hosting