import React, { useState, useEffect } from 'react'
import { Timeline, Input } from 'antd'
import { useLocalStorage } from 'assets/Utils/LocalStorage'
import TimelineItem from 'antd/lib/timeline/TimelineItem'

const TimelineConfirmation = () => {
  const [destino, setDestino] = useLocalStorage('destinos', '')

  const options = destino && destino.map(d =>
    <Timeline.Item key={d.nombre}>
      <label> {d}</label>
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
