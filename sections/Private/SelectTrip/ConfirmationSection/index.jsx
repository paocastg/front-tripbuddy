import React, { useContext } from 'react'
import styles from './index.module.scss'

/* Utils */
import credentials from './credentials'
import { useLocalStorage } from 'assets/Utils/LocalStorage'

/* Components */
import ConfirmationDestiny from 'components/ConfirmationDestiny'
import ConfirmationMap from 'components/ConfirmationMap'
import ConfirmationDate from 'components/ConfirmationDate'
import Button from 'components/Button'
import ConfirmationHeroImage from 'components/ConfirmationHeroImage'
import SelectTripContext from 'context/SelectTripContext'

const ConfirmationSection = ({ setShowSection, storeValue, destinos }) => {
  const { state } = useContext(SelectTripContext)
  const [destinosCompleto] = useLocalStorage('destinoSeleccionado', [])
  const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`
  console.log('state desde confirmationSection', state)
  const handleBack = () => {
    setShowSection(3)
  }
  const handleNext = () => {
    // console.log('Enviar cotizacion...')
    localStorage.setItem('myQuotation', JSON.stringify(state))
    window.location.href = '/cotizaciones'
  }
  return (
    <div className={styles.confirmation}>
      <ConfirmationHeroImage
        urlImg={'https://placeimg.com/640/480/tech'}
        setShowSection={setShowSection}
      />
      <main className={styles.main}>
      <div className={styles.grid}>
        <div className={styles.card}>
          <ConfirmationDestiny />
        </div>
        <div className={styles.card}>
          <ConfirmationMap
            destinos={destinos}
            destinosCompleto={destinosCompleto}
            googleMapURL={mapURL}
            containerElement={<div style={{ height: '350px' }} />}
            mapElement={<div style={{ height: '100%' }} />}
            loadingElement={<p>Cargando</p>}
          />
          <br/>
          <ConfirmationDate />

        </div>

      </div>
    </main>
      <div className={styles.confirmation__actions}>
        <Button onClick={handleBack}>Atrás</Button>
        <Button onClick={handleNext}>Cotizar</Button>
      </div>
    </div>
  )
}

export default ConfirmationSection
