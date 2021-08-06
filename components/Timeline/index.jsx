import React from 'react'
import { Timeline } from 'antd'
import { useLocalStorage } from 'assets/Utils/LocalStorage'
import TimelineItem from 'antd/lib/timeline/TimelineItem'

const TimelineConfirmation = () => {
  const [destino, setDestino] = useLocalStorage('destinoSeleccionado', [])
  console.log(destino)
  const options = destino && destino.map(d =>
    // console.log(d)
    <Timeline.Item key={d.id}>
      <label> {d.nombre}</label>
    </Timeline.Item>)

  return (
    <div>
      <Timeline>
        {/* <Timeline.Item/> */}
        {options}
        {/* <Timeline.Item/> */}
      </Timeline>
    </div>
  )
}
export default TimelineConfirmation
