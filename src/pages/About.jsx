import React from 'react'
import { Navbar } from '../components'
import styles from '../style'

const About = () => {
  return (
    <div className={`${styles.paddingX} ${styles.flexcenter} bg-primary w-full overflow-hidden`}>
    <div className={`${styles.boxwidth}`}>
      <Navbar />
    </div>
  </div>
  )
}

export default About
