import styles from './index.module.scss'

const DayToDaySection = ({ el }) => {
  const { fecha_visita: day, destino, mejores_lugares: mejoresLugares } = el
  return (
    <div className={styles.dayToDay} id='15'>
      <span className={styles.dayToDay__title}>{day}</span>
      <p className={styles.dayToDay__city}>{destino}</p>
      {mejoresLugares &&
        mejoresLugares.map((el, index) => (
          <div key={index} className={styles.timeCard}>
            <div className={styles.timeCard__timeGroup}>
              <h3
                className={`${styles.timeCard__time} ${styles.timeCard__time_bold}`}
              >
                {el.hora_incio}
              </h3>
              <p className={styles.timeCard__time}>{el.hora_fin}</p>
            </div>
            <figure className={styles.timeCard__figure}>
              <img
                className={styles.timeCard__picture}
                src="/img-ciudad-cusco.png"
                alt="ciudad cusco"
              />
            </figure>
            <div className={styles.timeCard__content}>
              <h3 className={styles.timeCard__title}>
                {el.lugar.nombre}
              </h3>
              <p className={styles.timeCard__text}>
                Visit San Pedro Church (Iglesis de San Pedro), an impressive and
                atmospheric place of world
              </p>
            </div>
          </div>
        ))}
    </div>
  )
}

export default DayToDaySection
