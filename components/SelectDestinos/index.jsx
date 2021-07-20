import React, { useState, useEffect } from 'react'
import { Select } from 'antd'
import axios from 'axios'

const { Option } = Select

const SelectDestinos = () => {
  const [seleccionados, setSeleccionados] = useState([])
  // const [id, setId] = useState(0)
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

  // const handleSearch = value => {
  //   if (id) {
  //     fetch(id, datos => setDatos({ datos }))
  //   } else {
  //     alert('usuario no existe')
  //   }
  // }
  const handleChange = id => {
    console.log('id', id)
    setSeleccionados([...seleccionados, ...id])
  }

  console.log('op', datos)

  const options = datos && datos.map(d =>
  <Option key={d.id}>
    {d.nombre}
  </Option>)

  return (
    <div>
      <Select
        mode="multiple"
        placeholder="Destinos"
        style={{ width: '50%' }}
        onChange={handleChange}
      >
        {options}
      </Select>
    </div>
  )
}

export default SelectDestinos
