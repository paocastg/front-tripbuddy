import styles from './index.module.scss'

const DayToDaySection = () => {
  return (
    <div className={styles.dayToDay}>
      <span className={styles.dayToDay__title}>Sat, May 15</span>
      <p className={styles.dayToDay__city}>Lima</p>
      <div className={styles.timeCard}>
        <div className={styles.timeCard__timeGroup}>
          <p className={styles.timeCard__time}>10:00am</p>
          <p className={`${styles.timeCard__time} ${styles.timeCard__time_opacity}`}>10:00am</p>
        </div>
        <img className={styles.timeCard__picture} src="/img-ciudad-cusco.png" alt="ciudad cusco" />
        <div className={styles.timeCard__content}>
          <h3 className={styles.timeCard__title}>San Pedro Church (Iglesia de san pedro)</h3>
          <p className={styles.timeCard__text}>
            Visit San Pedro Church (Iglesis de San Pedro), an impressive and
            atmospheric place of world
          </p>
        </div>
      </div>
    </div>
  )
}

export default DayToDaySection
