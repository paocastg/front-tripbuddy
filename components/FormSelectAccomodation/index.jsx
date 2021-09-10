import React, { useState, useEffect, useContext } from 'react'
import { Slider, Form, Button } from 'antd'
import styles from './index.module.scss'
import { useLocalStorage } from 'assets/Utils/LocalStorage'
import SelectTripContext from 'context/SelectTripContext'
import { TYPES } from 'actions/quotationActions'

const state = {
  1: 'Bajo costo',
  2: '2 estrellas',
  3: '3 estrellas',
  4: '4 estrellas',
  5: 'Lujoso'
}

const FormSelectAccomodation = () => {
  const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(false)
  const [prefState, setPrefState] = useLocalStorage('costo', '')
  const [prefState2, setPrefState2] = useLocalStorage('costo', '')
  const [hotel, setHotel] = useLocalStorage('tipoAlojamiento', '')
  const [airBnb, setAirbnb] = useLocalStorage('tipoAlojamiento', '')
  const [noHotel, setNohotel] = useLocalStorage('tipoAlojamiento', '')
  const [selected1, setSelected1] = useState(false)
  const [selected2, setSelected2] = useState(false)
  const [selected3, setSelected3] = useState(false)
  const { state: stateDispatch, dispatch } = useContext(SelectTripContext)

  const SliderChange = (state) => {
    setPrefState(state)
    dispatch({
      type: TYPES.UPDATE_ONE_QUOTATION,
      payload: { field: 'estrellas', data: state, manyOptions: false }
    })
  }
  const SliderChange2 = (state) => {
    setPrefState2(state)
    dispatch({
      type: TYPES.UPDATE_ONE_QUOTATION,
      payload: { field: 'estrellas', data: state, manyOptions: false }
    })
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
      }
    }
  }, [])

  const handleShowSlider = () => {
    setHotel(1)
    setSelected1((prev) => !prev)
    setSelected2(false)
    setSelected3(false)
    setShow((prevState) => !prevState)
    setShow2(false)
  }
  const handleShowSlider2 = () => {
    setSelected2((prev) => !prev)
    setSelected3(false)
    setSelected1(false)
    setAirbnb(2)
    setShow2((prevState) => !prevState)
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
          <Button
            className={!selected2 ? styles.btn : styles.selectedBtn}
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
      <br />
      <Form>
        {show && (
          <Form.Item className={styles.slider}>
            <section className={styles.sectionSlider}>
              <Slider
                value={prefState}
                min={1}
                max={5}
                onChange={SliderChange}
                marks={state}
                step={null}
                tipFormatter={null}
              />
            </section>
          </Form.Item>
        )}
      </Form>
      <Form>
        {show2 && (
          <Form.Item className={styles.slider}>
            <section className={styles.sectionSlider}>
              <Slider
                value={prefState2}
                min={1}
                max={5}
                marks={state}
                onChange={SliderChange2}
                step={null}
                tipFormatter={null}
              />
            </section>
          </Form.Item>
        )}
      </Form>
    </div>
  )
}

export default FormSelectAccomodation
