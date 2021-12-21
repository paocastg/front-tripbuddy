import styles from './index.module.scss'

const TripStepSection = () => {
  return (
    <article className={styles.tripStep}>
      <h2 className={styles.tripStep__title}>Crea el viaje de tus sueños en 5 sencillos pasos</h2>
      <div className={styles.tripStep__images}>
        <img src="images/paso1.svg" alt="paso1" />
        <img src="images/flecha.svg" alt="flecha" />
        <img src="images/paso2.svg" alt="paso2" />
        <img src="images/flecha.svg" alt="flecha" />
        <img src="images/paso3.svg" alt="paso3" />
        <img src="images/flecha.svg" alt="flecha" />
        <img src="images/paso4.svg" alt="paso4" />
        <img src="images/flecha.svg" alt="flecha" />
        <img src="images/paso5.svg" alt="paso5" />
      </div>
      <div className={styles.icon_whatsapp}>
        <a
          href="https://api.whatsapp.com/send?phone=+51922553728">
          <img src="http://s2.accesoperu.com/logos/btn_whatsapp.png" />
        </a>
      </div>
    </article>
  )
}

export default TripStepSection
