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

  const handleShowSlider = () => {
    setShow((prevState) => !prevState)
  }
  const handleShowSlider2 = () => {
    setShow((prevState) => !prevState)
  }

  return (
    <div>
      <section>
          <div>
          <Button
              onClick={handleShowSlider}
              size="large"
              className={styles.btn}
            >
              <strong>Quiero un Hotel</strong>
            </Button>
            <Button
              onClick={handleShowSlider2}
              size="large"
              className={styles.btn}
            >
              <strong>Consigueme un Airbnb</strong>
            </Button>
            <Button
              onClick={handleShowSlider}
              size="large" className={styles.btn}
            >
              <strong>No, gracias</strong>
            </Button>
          </div>
        </section>
      <Form>
        <br/>
        {show && (
          <Form.Item className={styles.slider} >
            <section className={styles.sectionSlider}>
              <div>
                <Slider
                marks={marks}
                step={null}
                defaultValue={50}
                tipFormatter={null}
              />
              </div>
            </section>
          </Form.Item>
        )}
      </Form>
    </div>
  )
}

export default SliderAlojamiento
