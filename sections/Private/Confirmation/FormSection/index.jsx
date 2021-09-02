import React from 'react'
import styles from './index.module.scss'

/* Utils */
import credentials from './credentials'
import { useLocalStorage } from 'assets/Utils/LocalStorage'

/* Components */
import ConfirmationDestiny from 'components/ConfirmationDestiny'
import ConfirmationMap from 'components/ConfirmationMap'
import ConfirmationDate from 'components/ConfirmationDate'
import OverviewSection from 'sections/Private/Confirmation/OverviewSection'

const ConfirmationSection = ({ destinos, storeValue }) => {
  const [destinosCompleto] = useLocalStorage('destinoSeleccionado', [])
  const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`

  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <div className={styles.card}>
          {storeValue && <ConfirmationDestiny />}
          {storeValue && <OverviewSection />}
        </div>
        <div className={styles.card}>
          {storeValue && (
            <ConfirmationMap
              destinos={destinos}
              destinosCompleto={destinosCompleto}
              googleMapURL={mapURL}
              containerElement={<div style={{ height: '350px' }} />}
              mapElement={<div style={{ height: '100%' }} />}
              loadingElement={<p>Cargando</p>}
            />
          )}
          <br/>
          <ConfirmationDate />

        </div>

      </div>
    </main>
  )
}

export default ConfirmationSection
