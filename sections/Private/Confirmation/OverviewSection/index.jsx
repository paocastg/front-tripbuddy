import H2 from 'components/H2'
import CustomTag from 'components/CustomTag'
import { useEffect, useState } from 'react'
import { Modal } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import styles from './index.module.scss'

const { confirm } = Modal

const OverviewSection = () => {
  const [myQuotation, setMyQuotation] = useState(null)
  useEffect(() => {
    // read myQuotation of localStorage
    const myQuotationInit = JSON.parse(localStorage.getItem('myQuotation')) || {
      activity: [],
      category: []
    }
    console.log(myQuotationInit)
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

    console.log(data, field)
  }
  return (
    <section className={styles.overview} >
      <H2>Resumen</H2>
      <h3>Categoria de Viaje</h3>
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
      <h3>Actividades</h3>
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
