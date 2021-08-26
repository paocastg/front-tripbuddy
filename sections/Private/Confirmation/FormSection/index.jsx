import React from 'react'
import { Button } from 'antd'
import styles from './index.module.scss'

/* Utils */
import credentials from './credentials'
import moment from 'moment'
import { useLocalStorage } from 'assets/Utils/LocalStorage'
import { useRouter } from 'next/router'

/* Components */
import CustomDestination from 'components/CustomDestination'
import CustomMap from 'components/CustomMap'
import DateConfirmation from 'components/DateConfirmation'
import H2 from 'components/H2'
import OverviewSection from 'sections/Private/Confirmation/OverviewSection'

const ConfirmationSection = ({ destinos, storeValue }) => {
  const [destinosCompleto] = useLocalStorage('destinoSeleccionado', [])
  const [fechaInicio] = useLocalStorage('FechaInicio', moment())
  const [fechaFin] = useLocalStorage('FechaFin', moment())
  const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`
  const router = useRouter()

  const fecha1 = new Date(fechaInicio)
  const fecha2 = new Date(fechaFin)

  const resta = fecha2.getTime() - fecha1.getTime()
  const resultado = Math.round(resta / (1000 * 60 * 60 * 24))
  // console.log(resultado)

  const meses = [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre'
  ]
  const diasSemana = [
    'Domingo',
    'Lunes',
    'martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado'
  ]
  const inicio =
    diasSemana[fecha1.getDay()] +
    ', ' +
    fecha1.getDate() +
    ' de ' +
    meses[fecha1.getMonth()]
  const fin =
    diasSemana[fecha2.getDay()] +
    ', ' +
    fecha2.getDate() +
    ' de ' +
    meses[fecha2.getMonth()]
  const handleEdit = () => {
    if (storeValue) {
      router.push('/destination')
    } else {
      router.push('/recommendation')
    }
  }

  return (
    <main className={styles.main}>
      <H2>Visualiza tu elección</H2>
      <div>
        <H2 className={styles.title}>{resultado} días en Perú</H2>
        <p className={styles.description}>
          <label>
            {inicio} - {fin}
          </label>{' '}
          &nbsp;
          <Button className={styles.button} onClick={handleEdit} type="text">
            Editar
          </Button>
        </p>
      </div>
      <div className={styles.grid}>
        <div className={styles.card}>
          {/* <h2>Resumen </h2> */}
          {storeValue && <OverviewSection />}
        </div>

        <div className={styles.card}>
          {storeValue && (
            <CustomMap
              destinos={destinos}
              destinosCompleto={destinosCompleto}
              googleMapURL={mapURL}
              containerElement={<div style={{ height: '350px' }} />}
              mapElement={<div style={{ height: '100%' }} />}
              loadingElement={<p>Cargando</p>}
            />
          )}
        </div>

        <div className={styles.card}>{storeValue && <CustomDestination />}</div>

        <div className={styles.card}>
          <DateConfirmation />
        </div>
      </div>
    </main>
  )
}

export default ConfirmationSection
