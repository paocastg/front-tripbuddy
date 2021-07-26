import React, { useState } from 'react'
import { Slider, Form, Button } from 'antd'
import styles from './index.module.scss'

const marks = {
  0: 'Bajo costo',
  50: '3 estrellas',
  100: 'Lujoso'
}

const SliderAlojamiento = () => {
  const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(false)

  const handleShowSlider = () => {
    setShow((prevState) => !prevState)
    setShow2(false)
  }
  const handleShowSlider2 = () => {
    setShow2((prevState) => !prevState)
    setShow(false)
  }
  const handleShowSlider3 = () => {
    setShow2(false)
    setShow(false)
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
                marks={marks}
                step={null}
                defaultValue={50}
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
                marks={marks}
                step={null}
                defaultValue={50}
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
