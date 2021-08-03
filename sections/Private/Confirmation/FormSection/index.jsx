import React from 'react'
import styles from './index.module.scss'
import H2 from 'components/H2'
import DateConfirmation from 'components/DateConfirmation'
import TimelineConfirmation from 'components/Timeline'
import MapConfirmation from 'components/MapConfirmation'

const ConfirmationSection = () => {
  return (
      <main className={styles.main}>
        <H2 className={styles.title}>
          días en Perú
        </H2>

        <p className={styles.description}>
          intervalo fechas
        </p>

        <div className={styles.grid}>
          <span className={styles.card}>
            <h2>Resumen </h2>
          </span>

          <span className={styles.card}>
            <h2>Mapa</h2>
            <MapConfirmation/>
          </span>

          <span className={styles.card}>
            <h2>Destinos </h2>
            <TimelineConfirmation/>
          </span>

          <span className={styles.card}
          >
            <h2>Calendario </h2>
            <DateConfirmation/>
          </span>
        </div>
      </main>

  )
}

export default ConfirmationSection
