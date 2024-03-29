import React, { useState, useEffect } from 'react'
import { Select } from 'antd'
import axios from 'axios'
// import styles from './index.module.scss'

const { Option } = Select

const SelectDestinos = () => {
  const [seleccionados, setSeleccionados] = useState([])
  const [datos, setDatos] = useState('')

  useEffect(() => {
    getDestinos()
  }, [])

  const getDestinos = async () => {
    try {
      const destinos = await axios.get('http://localhost:5000/destinos')
      setDatos(destinos.data)
    } catch (error) {
    }
  }

  const handleChange = id => {
    console.log('id', id)
    setSeleccionados([...seleccionados, ...id])
  }

  const options = datos && datos.map(d =>
  <Option key={d.id}>
    {d.nombre}
  </Option>)

  return (
    <div>
      <Select
        style={{ width: '95%' }}
        mode="multiple"
        placeholder="Destinos"
        onChange={handleChange}
      >
        {options}
      </Select>
    </div>
  )
}

export default SelectDestinos
