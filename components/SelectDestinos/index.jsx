import React, { useState } from 'react'
import { Select } from 'antd'
import { useLocalStorage } from 'assets/Utils/LocalStorage'
import styles from './index.module.scss'

const { Option } = Select

const SelectDestinos = ({ disabled, dbDestiny }) => {
  const [seleccionados, setSeleccionados] = useState([])
  const [destino, setDestino] = useLocalStorage('destinos', [])

  const handleChange = (id) => {
    setDestino(id)
    // console.log('nombre', id)
    setSeleccionados([...seleccionados, ...id])
  }

  const options = dbDestiny && dbDestiny.map(d =>
  <Option key={d.id}>
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
        disabled={disabled}
      >
        {options}
      </Select>
    </div>
  )
}

export default SelectDestinos
