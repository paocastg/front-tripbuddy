import React from 'react'
import { Timeline } from 'antd'
import { useLocalStorage } from 'assets/Utils/LocalStorage'
import TimelineItem from 'antd/lib/timeline/TimelineItem'
import H2 from 'components/H2'

const TimelineConfirmation = () => {
  const [destino, setDestino] = useLocalStorage('destinoSeleccionado', [])
  const [seleccionados, setSeleccionados] = useState([])

  const log = (id) => {
    setDestino(id)
    setSeleccionados([...seleccionados, ...id])
  }
  return (
    <section className={styles.overview} >
    <H2>Destinos</H2>
    <div>
     {destino && destino.map(d =>
    <Tag closable onclose={log} key={d.id}>
      {d.nombre}
    </Tag>)}
    </div>
  </section>
  )
}
export default TimelineConfirmation
