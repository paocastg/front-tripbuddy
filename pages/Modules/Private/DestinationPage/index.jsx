import React, { useState, useEffect } from 'react'
import { Row, Col } from 'antd'
import FormSection from 'sections/Private/Destination/FormSection'
import Wrapper from 'layout/Wrapper'
import H2 from 'components/H2'
import styles from './index.module.scss'
import Button from 'components/Button'
import { useRouter } from 'next/router'
import SliderAlojamiento from 'components/SliderAlojamiento'
import axios from 'axios'

const Destination = () => {
  const router = useRouter()
  const [destinos, setDestinos] = useState('')
  const [isActiveDestiny, setIsActiveDestiny] = useState(null)

  useEffect(() => {
    getDestinos()

    // read selectDestination of LocalStorage
    const selectDestination = JSON.parse(
      localStorage.getItem('selectDestination')
    ) || false
    setIsActiveDestiny(selectDestination)
  }, [])

  const getDestinos = async () => {
    try {
      const destinoslist = await axios.get('http://api.devopsacademy.pe/tripbuddy/api/destino/')
      setDestinos(destinoslist.data)
      // console.log('hola', destinos)
    } catch (error) {
    }
  }

  const handleClickAtras = () => {
    router.push('/select')
    localStorage.removeItem('destinos')
    localStorage.removeItem('FechaInicio')
    localStorage.removeItem('FechaFin')
    localStorage.removeItem('adultos')
    localStorage.removeItem('adolescentes')
    localStorage.removeItem('ninos')
    localStorage.removeItem('tipoAlojamiento')
    localStorage.removeItem('costo')
    localStorage.removeItem('destinoSeleccionado')
  }

  const handleClickSiguiente = () => {
    const idList = JSON.parse(localStorage.getItem('destinos'))
    const seleccionados = []
    // console.log('setdestino', destinos)
    // console.log('idlist', idList)
    destinos && destinos.forEach(element => {
      idList.forEach(id => {
        if (element.id === id * 1) {
          seleccionados.push(element)
        }
      })
    })

    window.localStorage.setItem('destinoSeleccionado', JSON.stringify(seleccionados))
    // console.log(seleccionados)
    router.push('/confirmation')
  }

  return (
    <Wrapper>
      <div className={styles.main}>
        <div className={styles.visible}>
          <Row>
            <Col span={24} >
              <H2>
                Elige tu destino y las fechas <br /> en que piensas viajar
              </H2>
              <FormSection isActiveDestiny={isActiveDestiny} />
            </Col>
          </Row>
          <Row>
            <Col span={24} >
              <SliderAlojamiento />
            </Col>
          </Row>
          <br />
          <section className={styles.section}>
            <div>
              <Button onClick={handleClickAtras}>Atrás</Button>
              <Button onClick={handleClickSiguiente}>Siguiente</Button>
            </div>
          </section>
        </div>
      </div>
    </Wrapper>
  )
}

export default Destination
