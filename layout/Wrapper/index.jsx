import React from 'react'

import Header from 'layout/Header'
import Footer from 'layout/Footer'

import styles from './index.module.scss'

const Wrapper = ({ children }) => {
  return (
    <div className={styles.wrapper}>
        <Header />
        <div className={`${styles.wrapper_view} e-container`}>{children}</div>
        <Footer />
    </div>
  )
}

export default Wrapper
