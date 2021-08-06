import React from 'react'
import { CDN_PATH } from 'assets/Utils/Constants'
import styles from './index.module.scss'

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className="e-container">
        <div className={styles.header}>
          <div>
            <img src={`${CDN_PATH}/logo-tripbuddy.svg`} alt="chart" />
            {/* <img src="https://file-loenviamostest.s3.amazonaws.com/images/logo-tripbuddy.svg" alt="chart" /> */}
          </div>
          <div className={styles.header_user}>
            <button className={styles.header_button}>
              Comienza tu viaje
            </button>
            <div className={styles.user}>
              ${ 'user' }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
