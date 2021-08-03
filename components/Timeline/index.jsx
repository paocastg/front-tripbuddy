import React, { useState } from 'react'
import { Timeline, Input } from 'antd'
import { useLocalStorage } from 'assets/Utils/LocalStorage'
import TimelineItem from 'antd/lib/timeline/TimelineItem'

const TimelineConfirmation = () => {
  const [destino, setDestino] = useLocalStorage('destinos', '')

  const options = destino && destino.map(d =>
    <Timeline.Item key={d.id}>
      <label onChange= {e => setDestino(e.target.value) }>{d.nombre}</label>
    </Timeline.Item>)
  return (
    <div>
      <Timeline>
        {options}
      </Timeline>
    </div>
  )
}
export default TimelineConfirmation
