import React from 'react'
import { Slider } from 'antd'

const marks = {
  0: 'Bajo costo',
  50: '3 estrellas',
  100: 'Lujoso'
}

const SliderAlojamiento = () => {
  return (
    <div>
      <Slider marks={marks} step={null} defaultValue={50} />
    </div>
  )
}

export default SliderAlojamiento
