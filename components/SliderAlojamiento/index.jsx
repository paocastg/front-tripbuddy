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
        <Form.Item style={{ marginBottom: 0 }}>
          <Form.Item style={{ display: 'inline-block', width: 'calc(33% - 10px)' }}>
            <Button onClick={handleShowSlider} size="large" className={styles.btn} ><strong>Quiero un Hotel</strong></Button>
          </Form.Item>
          <Form.Item style={{ display: 'inline-block', width: 'calc(33% - 10px)', margin: '0 8px' }}>
            <Button onClick={handleShowSlider2} size="large" className={styles.btn} ><strong>Consigueme un Airbnb</strong></Button>
          </Form.Item>
          <Form.Item style={{ display: 'inline-block', width: 'calc(33% - 10px)' }}>
            <Button size="large" className={styles.btn} ><strong>No, gracias</strong></Button>
          </Form.Item>
        </Form.Item>
        {show && (
          <Form.Item id='Slider' style={{ marginLeft: '20%', marginRight: '20%' }} >
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
