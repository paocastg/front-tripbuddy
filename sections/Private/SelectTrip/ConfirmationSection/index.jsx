import React, { useContext, useState, useEffect } from 'react'
import styles from './index.module.scss'

/* Utils */
import credentials from './credentials'

/* Components */
import Button from 'components/Button'
import ConfirmationDate from 'components/ConfirmationDate'
import SelectTripContext from 'context/SelectTripContext'
import ConfirmationDestiny from 'components/ConfirmationDestiny'
import ConfirmationMap from 'components/ConfirmationMap'
import ConfirmationHeroImage from 'components/ConfirmationHeroImage'

const ConfirmationSection = ({ setShowSection, storeValue, destinos }) => {
  const { state, dbDestiny } = useContext(SelectTripContext)
  const [destinosCompleto, setDestinosCompleto] = useState([])
  const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`
  console.log('state desde confirmationSection', state)
  const handleBack = () => {
    setShowSection(3)
  }
  useEffect(() => {
    const destinySelected = []
    state.destino && state.destino.forEach((destiny) => {
      const destinyFilter = dbDestiny.filter((el) => el.nombre === destiny)
      destinySelected.push(destinyFilter[0])
    })
    // console.log('destinos seleccionados', destinySelected)
    setDestinosCompleto(destinySelected)
  }, [state])

  const handleNext = () => {
    // console.log('Enviar cotizacion...')

    const newState = {
      ...state,
      fecha_inicio: state.fecha_inicio && state.fecha_inicio.replace(/\//g, '-'),
      fecha_fin: state.fecha_fin && state.fecha_fin.replace(/\//g, '-'),
      actividad: state.actividad && state.actividad.map((el) => el.id),
      categoria: state.categoria && state.categoria.map((el) => el.id),
      destino: destinosCompleto && destinosCompleto.map((el) => el.id)

    }
    localStorage.setItem('myQuotation', JSON.stringify(newState))
    // console.log('newState', newState)
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
