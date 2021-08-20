import H2 from 'components/H2'
import CustomTag from 'components/CustomTag'
import { useEffect, useState } from 'react'
import { Modal } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import styles from './index.module.scss'
import { useLocalStorage } from 'assets/Utils/LocalStorage'
const { confirm } = Modal

const OverviewSection = () => {
  const [myQuotation, setMyQuotation] = useState(null)
  const [adulto] = useLocalStorage('adultos', 0)
  const [adolescente] = useLocalStorage('adolescentes', 0)
  const [nino] = useLocalStorage('ninos', 0)
  const [costo] = useLocalStorage('costo', '')
  const [alojamiento] = useLocalStorage('tipoAlojamiento', '')
  let tipo = ''
  let costoAlojamiento = ''

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
        console.log('OK')
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
        console.log('Cancel')
      }
    })
  }
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
    costoAlojamiento = '3 estrellas'
  } else {
    costoAlojamiento = 'lujoso '
  }

  return (
    <section className={styles.overview} >
      <H2>Resumen</H2>
      <h3><strong>Número de personas</strong></h3>
      Adultos: {adulto} <br/>
      Adolescentes: {adolescente}<br/>
      Niños: {nino} <br/>
      <h3><strong>Alojamiento</strong></h3>
      <label>{tipo} &nbsp;{costoAlojamiento}</label>
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
      <h3><strong>Actividades</strong></h3>
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
    </section>
  )
}

export default OverviewSection
