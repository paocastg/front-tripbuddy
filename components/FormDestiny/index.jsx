import React, { useEffect, useState } from 'react'
import { Select } from 'antd'
import { useLocalStorage } from 'assets/Utils/LocalStorage'
import styles from './index.module.scss'

const { Option } = Select

const FormDestiny = ({ disabled, dbDestiny }) => {
  const [seleccionados, setSeleccionados] = useState([])
  const [destino, setDestino] = useLocalStorage('destinos', [])
  const [destinos, setDestinos] = useState(false)

  const handleChange = (id) => {
    setDestino(id)
    setSeleccionados([...seleccionados, ...id])
  }

  // desde aqui para elegir destinos seleccionados
  const getDestinos = async () => {
    try {
      const destinoslist = await axios.get('http://api.devopsacademy.pe/tripbuddy/api/destino/')
      setDestinos(destinoslist.data)
      // console.log('hola', destinos)
    } catch (error) {
    }
  }
  useEffect(() => {
    getDestinos()
  }, [])

  const idList = JSON.parse(localStorage.getItem('destinos'))
  const selecteds = []
  destinos && destinos.forEach(element => {
    idList && idList.forEach(id => {
      if (element.id === id * 1) {
        selecteds.push(element)
      }
    })
  })
  window.localStorage.setItem('destinoSeleccionado', JSON.stringify(selecteds))

  // hasta aqui

  const options = dbDestiny && dbDestiny.map(d =>
  <Option key={d.id}>
    {d.nombre}
  </Option>)

  return (
    <div className={styles.div}>
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

export default FormDestiny
