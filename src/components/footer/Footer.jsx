import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Pixmar Interactive</div>
      <div className={styles.text}>Pixmar Interactive © All rights deserved</div>
    </div>
  )
}

export default Footer