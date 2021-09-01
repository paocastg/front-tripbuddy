import React from 'react'
import { useLocalStorage } from 'assets/Utils/LocalStorage'
import H2 from 'components/H2'
import styles from './index.module.scss'
import { Tag } from 'antd'

const ConfirmationDestiny = () => {
  const [destino] = useLocalStorage('destinoSeleccionado', [])
  // const [seleccionados, setSeleccionados] = useState([])
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
export default ConfirmationDestiny
