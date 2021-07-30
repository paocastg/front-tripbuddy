import React, { useState, useEffect } from 'react'
import { Slider, Form, Button } from 'antd'
import styles from './index.module.scss'
import { useLocalStorage } from 'assets/Utils/LocalStorage'

const state = {
  1: 'Bajo costo',
  2: '3 estrellas',
  3: 'Lujoso'
}

const SliderAlojamiento = () => {
  const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(false)
  const [prefState, setPrefState] = useLocalStorage('costo', '')
  const [hotel, setHotel] = useLocalStorage('tipoAlojamiento', '')
  const [airbnb, setAirbnb] = useLocalStorage('tipoAlojamiento', '')
  const [nohotel, setNohotel] = useLocalStorage('tipoAlojamiento', '')
  const [selected1, setSelected1] = useState(false)
  const [selected2, setSelected2] = useState(false)
  const [selected3, setSelected3] = useState(false)

  const SliderChange = (state) => {
    setPrefState(state)
    console.log('slider', state)
  }
  useEffect(() => {
    if (localStorage.getItem('tipoAlojamiento')) {
      const tipoAlojamiento = localStorage.getItem('tipoAlojamiento')
      if (tipoAlojamiento === '1') {
        handleShowSlider()
      } else if (tipoAlojamiento === '2') {
        handleShowSlider2()
      } else {
        handleShowSlider3()
        console.log('hola')
      }
    }
  }, [])

  // useEffect(() => {
  //   if (localStorage.getItem('costo')) {
  //     const costo = localStorage.getItem('costo')
  //     if (costo === '1') {
  //       SliderChange(1)
  //       console.log('hola1')
  //     } else if (costo === '2') {
  //       SliderChange()
  //     } else {
  //       SliderChange()
  //       console.log('hola')
  //     }
  //   }
  // }, [])

  const handleShowSlider = () => {
    setHotel(1)
    setSelected1((prev) => !prev)
    setSelected2(false)
    setSelected3(false)
    setShow((prevState) => !prevState)
    setPrefState(2)
    setShow2(false)
  }
  const handleShowSlider2 = () => {
    setSelected2((prev) => !prev)
    setSelected3(false)
    setSelected1(false)
    setAirbnb(2)
    setShow2((prevState) => !prevState)
    setPrefState(2)
    setShow(false)
  }
  const handleShowSlider3 = () => {
    setSelected3((prev) => !prev)
    setSelected1(false)
    setSelected2(false)
    setNohotel(3)
    setShow2(false)
    setShow(false)
    localStorage.removeItem('costo')
  }

  return (
    <div>
      <Form className={styles.formbtn}>
        <Form.Item className={styles.divbtn}>
          <Button
          className={!selected1 ? styles.btn : styles.selectedBtn}
            onClick={handleShowSlider}
            size="large"
          >
            <strong>Quiero un Hotel</strong>
          </Button>
        </Form.Item>
        <Form.Item className={styles.divbtn}>
          <Button className={!selected2 ? styles.btn : styles.selectedBtn}
            onClick={handleShowSlider2}
            size="large"
          >
            <strong>Consigueme un Airbnb</strong>
          </Button>
        </Form.Item>
        <Form.Item className={styles.divbtn}>
          <Button
            className={!selected3 ? styles.btn : styles.selectedBtn}
            onClick={handleShowSlider3}
            size="large"
          >
            <strong>No, gracias</strong>
          </Button>
        </Form.Item>
      </Form>
        <br/>
      <Form>
        {show && (
          <Form.Item className={styles.slider} >
            <section className={styles.sectionSlider}>
                <Slider
                min={1}
                max={3}
                onChange= {SliderChange}
                marks={state}
                step={null}
                defaultValue={2}
                tipFormatter={null}
              />
            </section>
          </Form.Item>
        )}
      </Form>
      <Form>
        {show2 && (
          <Form.Item className={styles.slider} >
            <section className={styles.sectionSlider}>
                <Slider
                min={1}
                max={4}
                marks={state}
                onChange= {SliderChange}
                step={null}
                defaultValue={2}
                tipFormatter={null}
              />
            </section>
          </Form.Item>
        )}
      </Form>
    </div>
  )
}

export default SliderAlojamiento
