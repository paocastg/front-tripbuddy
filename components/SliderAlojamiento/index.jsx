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

  const SliderChange = (state) => {
    setPrefState(state)
    console.log('slider', state)
  }

  const handleShowSlider = () => {
    setHotel(1)
    setShow((prevState) => !prevState)
    setPrefState(2)
    setShow2(false)
  }
  const handleShowSlider2 = () => {
    setAirbnb(2)
    setShow2((prevState) => !prevState)
    setPrefState(2)
    setShow(false)
  }
  const handleShowSlider3 = () => {
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
            onClick={handleShowSlider}
            size="large"
            className={styles.btn}
          >
            <strong>Quiero un Hotel</strong>
          </Button>
        </Form.Item>
        <Form.Item className={styles.divbtn}>
          <Button
            onClick={handleShowSlider2}
            size="large"
            className={styles.btn}
          >
            <strong>Consigueme un Airbnb</strong>
          </Button>
        </Form.Item>
        <Form.Item className={styles.divbtn}>
          <Button
            onClick={handleShowSlider3}
            size="large" className={styles.btn}
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
                max={3}
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
