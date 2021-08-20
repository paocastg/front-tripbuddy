import React, { useState } from 'react'
import { Tag, Modal } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import { useLocalStorage } from 'assets/Utils/LocalStorage'
import H2 from 'components/H2'
import styles from './index.module.scss'
const { confirm } = Modal

const CustomDestination = () => {
  const [destino, setDestino] = useLocalStorage('destinoSeleccionado', [])
  // const [seleccionados, setSeleccionados] = useState([])

  // const log = (e, id, data) => {
  //   console.log(e)
  //   setDestino(id)
  //   setSeleccionados([...seleccionados, ...id])
  //   // e.preventDefault()
  //   // confirm({
  //   //   title: `Quieres eliminar "${data.name}" de tu cotizacion ?`,
  //   //   icon: <ExclamationCircleOutlined />,
  //   //   content: '',
  //   //   onOk () {
  //   //     console.log('OK')
  //   //     // delete from myQuotation
  //   //     destino.filter((el) => el.id !== data.id)
  //   //     setSeleccionados([...seleccionados, ...id])
  //   //   },
  //   //   onCancel () {
  //   //     console.log('Cancel')
  //   //   }
  //   // })
  // }
  return (
    <section className={styles.overview}>
      <H2>Destinos</H2>
      <div>
        {destino &&
          destino.map((d) => (
            <Tag color="#5bc0de" key={d.id}>
              {d.nombre}
            </Tag>
          ))}
      </div>
    </section>
  )
}
export default CustomDestination
