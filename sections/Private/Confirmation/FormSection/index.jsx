import React from 'react'
import { Button } from 'antd'
import styles from './index.module.scss'
import H2 from 'components/H2'
import DateConfirmation from 'components/DateConfirmation'
import TimelineConfirmation from 'components/Timeline'
import MapConfirmation from 'components/MapConfirmation'
import credentials from './credentials'
import moment from 'moment'
import { useLocalStorage } from 'assets/Utils/LocalStorage'
import { useRouter } from 'next/router'

const ConfirmationSection = () => {
  const [fechaInicio, setFechaInicio] = useLocalStorage('FechaInicio', moment())
  const [fechaFin, setFechaFin] = useLocalStorage('FechaFin', moment())
  const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`
  const router = useRouter()
  const formatofechaInicio = moment(fechaInicio).format('ddd, DD MMMM ')
  const formatofechaFin = moment(fechaFin).format('ddd, DD MMMM ')

  let fecha1 = new Date(fechaInicio)
  let fecha2 = new Date(fechaFin)

  let resta = fecha2.getTime() - fecha1.getTime()
  let resultado= Math.round(resta / (1000 * 60 * 60 * 24))
  console.log(resultado)

  const handleEdit = () => {
    router.push('/destination')
  }

  return (
      <main className={styles.main}>
        <H2 className={styles.title}>
          {resultado} días en Perú
        </H2>

        <p className={styles.description}>
          <div>
            <label>{formatofechaInicio} - {formatofechaFin}</label>
            <Button className={styles.button}
            onClick={handleEdit}
            type="text">Editar</Button>
          </div>
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
