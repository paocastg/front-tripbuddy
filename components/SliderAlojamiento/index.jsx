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
      <Form>
        <Form.Item className={styles.form}>
          <Form.Item className={styles.formbtn}>
            <Button onClick={handleShowSlider} size="large" className={styles.btn} ><strong>Quiero un Hotel</strong></Button>
          </Form.Item>
          <Form.Item className={styles.formbtn}>
            <Button onClick={handleShowSlider2} size="large" className={styles.btn} ><strong>Consigueme un Airbnb</strong></Button>
          </Form.Item>
          <Form.Item className={styles.formbtn}>
            <Button size="large" className={styles.btn} ><strong>No, gracias</strong></Button>
          </Form.Item>
        </Form.Item>
        <br/>
        {show && (
          <Form.Item className={styles.slider} >
            <section className={styles.section}>
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
