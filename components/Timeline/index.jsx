import React, { useState, useEffect } from 'react'
import { Timeline, Input } from 'antd'
import { useLocalStorage } from 'assets/Utils/LocalStorage'
import TimelineItem from 'antd/lib/timeline/TimelineItem'

const TimelineConfirmation = () => {
  const [destino, setDestino] = useLocalStorage('destinos', '')

  const handleChange = (nombre) => {
    setDestino(nombre)
  }
  useEffect(() => {
    if (localStorage.getItem('destinos')) {
      const destino = localStorage.getItem('destinos')
    }
  }, [])

  const options = destino && destino.map(d =>
    <Timeline.Item key={d.nombre}>
      <label onChange= { handleChange}> {destino}</label>
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
