import React, { useContext, useState } from 'react'
import styles from './index.module.scss'

/* Components */
import Button from 'components/Button'
import CustomTooltip from 'components/CustomTooltip'
import H2 from 'components/H2'
import SelectTripContext from 'context/SelectTripContext'
import { TYPES } from 'actions/quotationActions'

const OtherActivitiesSection = ({ setShowSection }) => {
  const [count, setCount] = useState(0)
  const [msg, setMsg] = useState(false)
  const { state, dispatch } = useContext(SelectTripContext)
  const handleBack = () => {
    setShowSection(2)
  }
  const handleNext = () => {
    if (msg) {
      return null
    }
    setShowSection(4)
  }
  const handleChange = (e) => {
    // console.log(e.target.value)
    const numberChar = e.target.value.split('').length
    if (numberChar > 250) {
      setMsg(true)
    } else {
      setMsg(false)
    }
    setCount(numberChar)
    dispatch({
      type: TYPES.UPDATE_ONE_QUOTATION,
      payload: { field: 'comentarios', data: e.target.value, manyOptions: false }
    })
  }

  return (
    <section className={styles.finally}>
      <H2>Por último</H2>
      <CustomTooltip
        text="¿Algun lugar especifico que quieras ver, restaurantes que quieras visitar o cosas que quieras hacer?"
        title="Extra information"
      />
      <div className={styles.finally__textContainer}>
        <textarea
          className={styles.finally__text}
          name="other_categories"
          placeholder="Indicanos aquellas actividades o destinos que consideres indispensables en el viaje de tus sueños"
          id="other_categories"
          onChange={handleChange}
          defaultValue={state.comentarios || ''}
        ></textarea>
      </div>
      <p className={styles.finally__recommendation}>{count}/250 caracteres</p>
      {msg && <p style={{ color: 'red' }}>Excedio el numero maximo de caracteres</p>}
      <div>
        <Button onClick={handleBack}>Atrás</Button>
        <Button onClick={handleNext}>Siguiente</Button>
      </div>
    </section>
  )
}

export default OtherActivitiesSection
