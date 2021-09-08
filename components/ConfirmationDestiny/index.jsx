import React, { useEffect, useState } from 'react'
import { useLocalStorage } from 'assets/Utils/LocalStorage'
import H2 from 'components/H2'
import styles from './index.module.scss'
import { Tag } from 'antd'
import CustomTag from 'components/CustomTag'
import { ExclamationCircleOutlined } from '@ant-design/icons'

const ConfirmationDestiny = () => {
  const [destino] = useLocalStorage('destinoSeleccionado', [])
  const [adulto] = useLocalStorage('adultos', 0)
  const [adolescente] = useLocalStorage('adolescentes', 0)
  const [nino] = useLocalStorage('ninos', 0)
  const [costo] = useLocalStorage('costo', '')
  const [alojamiento] = useLocalStorage('tipoAlojamiento', '')
  const [budget] = useLocalStorage('presupuesto', '')

  const [myQuotation, setMyQuotation] = useState(null)

  useEffect(() => {
    // read myQuotation of localStorage
    const myQuotationInit = JSON.parse(localStorage.getItem('myQuotation')) || {
      activity: [],
      category: []
    }
    // console.log(myQuotationInit)
    setMyQuotation(myQuotationInit)
  }, [])

  const handleDeleteTag = (e, data, field) => {
    // console.log(e)
    e.preventDefault()
    confirm({
      title: `Quieres eliminar "${data.name}" de tu cotizacion ?`,
      icon: <ExclamationCircleOutlined />,
      content: '',
      onOk () {
        // console.log('OK')
        // delete from myQuotation
        const fieldFiltered = myQuotation[field].filter(
          (el) => el.id !== data.id
        )
        const quotation = {
          ...myQuotation,
          [field]: fieldFiltered
        }

        // update locaStorage
        setMyQuotation(quotation)
        localStorage.setItem('myQuotation', JSON.stringify(quotation))
      },
      onCancel () {
        // console.log('Cancel')
      }
    })
  }
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
            <Tag
            className={styles.tag}
            key={d.id}>
              {d.nombre}
            </Tag>
          ))}
      </div>
      <br/>
      <h3><strong>Viajeros</strong></h3>
      <div className={styles.tag_container} >
         <Tag className={styles.tag}>
        {adulto} Adultos
      </Tag>
      <Tag className={styles.tag}>
        {adolescente} Adolescentes
      </Tag>
      <Tag className={styles.tag}>
      {nino} Niños
      </Tag>
      </div>
      <br/>
      <h3><strong>Presupuesto por persona</strong></h3>
      <div className={styles.tag_container} >
        <Tag className={styles.tag}>
         $ {budget}
        </Tag>
      </div>
      <br/>
      <h3><strong>Alojamiento</strong></h3>
      <div className={styles.tag_container} >
         <Tag className={styles.tag}>
         {tipo} &nbsp;{costoAlojamiento}
      </Tag>
      </div>
      <br/>
      <h3><strong>Categoria de Viaje</strong></h3>
      <div className={styles.tag_container} >
        {myQuotation &&
          myQuotation.category.map((el) => (
            <CustomTag
              key={el.id}
              el={el}
              handleDeleteTag={handleDeleteTag}
              field="category"
            />
          ))}
      </div>
      <h3>
        <strong>Actividades</strong>
      </h3>
      <div className={styles.tag_container}>
        {myQuotation &&
          myQuotation.activity.map((el) => (
            <CustomTag
              key={el.id}
              el={el}
              handleDeleteTag={handleDeleteTag}
              field="activity"
            />
          ))}
      </div>
      <h3><strong>Por Último</strong></h3>
    </section>
  )
}
export default ConfirmationDestiny
