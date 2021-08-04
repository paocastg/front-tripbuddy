import React from 'react'
import styles from './index.module.scss'
import H2 from 'components/H2'
import DateConfirmation from 'components/DateConfirmation'
import TimelineConfirmation from 'components/Timeline'
import MapConfirmation from 'components/MapConfirmation'
import credentials from './credentials'

const ConfirmationSection = () => {
  const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`
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
            <MapConfirmation
              googleMapURL= {mapURL}
              containerElement = {<div style={{ height: '250px' }} />}
              mapElement= {<div style={{ height: '100%' }} />}
              loadingElement={<p>Cargando</p>}
            />
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
