import React, { useState, useEffect } from 'react'
import { Select } from 'antd'
import axios from 'axios'
import { useLocalStorage } from 'assets/Utils/LocalStorage'
import styles from './index.module.scss'

const { Option } = Select

const SelectDestinos = () => {
  const [seleccionados, setSeleccionados] = useState([])
  const [datos, setDatos] = useState('')
  const [destino, setDestino] = useLocalStorage('destinos', '')

  useEffect(() => {
    getDestinos()
  }, [])

  const getDestinos = async () => {
    try {
      const destinos = await axios.get('http://api.devopsacademy.pe/tripbuddy/api/destino/')
      setDatos(destinos.data)
    } catch (error) {
    }
  }

  const handleChange = (nombre) => {
    setDestino(nombre)
    console.log('nombre', nombre)
    setSeleccionados([...seleccionados, ...nombre])
  }

  const options = datos && datos.map(d =>
  <Option key={d.nombre}>
    {d.nombre}
  </Option>)

  return (
    <div>
      <Select
        className={styles.select}
        value= {destino}
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
