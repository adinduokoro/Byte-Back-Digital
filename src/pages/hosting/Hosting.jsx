import React from 'react'
import { packages } from './data'
import styles from "../hosting/Hosting.module.css"
import { DomainChecker, Header, HostingCta } from '../../components'

const Hosting = () => {
  return (
    <div>
      <Header headerTitle={"Web Hosting"}/>
      <HostingCta/>
     {/* <DomainChecker /> */}
    </div>
  )
}

export default Hosting