import React from 'react'
import { useLocalStorage } from 'assets/Utils/LocalStorage'
import H2 from 'components/H2'
import styles from './index.module.scss'
import { Tag } from 'antd'

const ConfirmationDestiny = () => {
  const [destino] = useLocalStorage('destinoSeleccionado', [])
  const [adulto] = useLocalStorage('adultos', 0)
  const [adolescente] = useLocalStorage('adolescentes', 0)
  const [nino] = useLocalStorage('ninos', 0)
  const [costo] = useLocalStorage('costo', '')
  const [alojamiento] = useLocalStorage('tipoAlojamiento', '')
  const [budget] = useLocalStorage('presupuesto', '')
  let tipo = ''
  let costoAlojamiento = ''
  // eslint-disable-next-line eqeqeq
  if (alojamiento == '1') {
    tipo = 'Hotel'
  // eslint-disable-next-line eqeqeq
  } else if (alojamiento == '2') {
    tipo = 'Airbnb'
  } else {
    tipo = 'No desea'
  }
  // eslint-disable-next-line eqeqeq
  if (costo == '1') {
    costoAlojamiento = 'bajo costo'
  // eslint-disable-next-line eqeqeq
  } else if (costo == '2') {
    costoAlojamiento = '2 estrellas'
    // eslint-disable-next-line eqeqeq
  } else if (costo == '3') {
    costoAlojamiento = '3 estrellas'
    // eslint-disable-next-line eqeqeq
  } else if (costo == '4') {
    costoAlojamiento = '4 estrellas'
    // eslint-disable-next-line eqeqeq
  } else if (costo == '5') {
    costoAlojamiento = 'Lujoso'
  } else {
    costoAlojamiento = ''
  }
  return (
    <section className={styles.overview}>
      <H2>Resumen de viaje</H2>
      <h3><strong>Destinos</strong></h3>
      <div>
        {destino &&
          destino.map((d) => (
            <Tag color="#5bc0de" key={d.id}>
              {d.nombre}
            </Tag>
          ))}
      </div>
      <br/>
      <h3><strong>Viajeros</strong></h3>
      <div className={styles.tag_container} >
         <Tag color="#5bc0de">
        {adulto} Adultos
      </Tag>
      <Tag color="#5bc0de">
        {adolescente} Adolescentes
      </Tag>
      <Tag color="#5bc0de">
      {nino} Niños
      </Tag>
      </div>
      <br/>
      <h3><strong>Presupuesto por persona</strong></h3>
      <div className={styles.tag_container} >
        <Tag color="#5bc0de">
         {budget}
        </Tag>
      </div>
      <br/>
      <h3><strong>Alojamiento</strong></h3>
      <div className={styles.tag_container} >
         <Tag color="#5bc0de">
         {tipo} &nbsp;{costoAlojamiento}
      </Tag>
      </div>
      <br/>
    </section>
  )
}
export default ConfirmationDestiny
