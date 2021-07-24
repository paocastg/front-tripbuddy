import React from 'react'

import styles from './index.module.scss'

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className="e-container">
        <div className={styles.header}>
          <div>
            {/* <img src={Chart} alt="chart" /> */}
            Logo
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
