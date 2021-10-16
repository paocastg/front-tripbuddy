import styles from './index.module.scss'

const DayToDaySection = ({ day }) => {
  return (
    <div className={styles.dayToDay} id={day}>
      <span className={styles.dayToDay__title}>Sat, May {day}</span>
      <p className={styles.dayToDay__city}>Lima</p>
      <div className={styles.timeCard}>
        <div className={styles.timeCard__timeGroup}>
          <h3 className={`${styles.timeCard__time} ${styles.timeCard__time_bold}`}>10:00am</h3>
          <p className={styles.timeCard__time}>10:00am</p>
        </div>
        <figure className={styles.timeCard__figure}>
          <img className={styles.timeCard__picture} src="/img-ciudad-cusco.png" alt="ciudad cusco" />
        </figure>
        <div className={styles.timeCard__content}>
          <h3 className={styles.timeCard__title}>San Pedro Church (Iglesia de san pedro)</h3>
          <p className={styles.timeCard__text}>
            Visit San Pedro Church (Iglesis de San Pedro), an impressive and
            atmospheric place of world
          </p>
        </div>
      </div>
      <div className={styles.timeCard}>
        <div className={styles.timeCard__timeGroup}>
          <h3 className={`${styles.timeCard__time} ${styles.timeCard__time_bold}`}>10:00am</h3>
          <p className={styles.timeCard__time}>10:00am</p>
        </div>
        <figure className={styles.timeCard__figure}>
          <img className={styles.timeCard__picture} src="/img-ciudad-cusco.png" alt="ciudad cusco" />
        </figure>
        <div className={styles.timeCard__content}>
          <h3 className={styles.timeCard__title}>San Pedro Church (Iglesia de san pedro)</h3>
          <p className={styles.timeCard__text}>
            Visit San Pedro Church (Iglesis de San Pedro), an impressive and
            atmospheric place of world
          </p>
        </div>
      </div>
      <div className={styles.timeCard}>
        <div className={styles.timeCard__timeGroup}>
          <h3 className={`${styles.timeCard__time} ${styles.timeCard__time_bold}`}>10:00am</h3>
          <p className={styles.timeCard__time}>10:00am</p>
        </div>
        <figure className={styles.timeCard__figure}>
          <img className={styles.timeCard__picture} src="/img-ciudad-cusco.png" alt="ciudad cusco" />
        </figure>
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
