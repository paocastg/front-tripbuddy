import React, { useContext } from 'react'
import styles from './index.module.scss'

/* Components */
import Button from 'components/Button'
import CustomTooltip from 'components/CustomTooltip'
import H2 from 'components/H2'
import SelectTripContext from 'context/SelectTripContext'
import { TYPES } from 'actions/quotationActions'

const OtherActivitiesSection = ({ setShowSection }) => {
  const { state, dispatch } = useContext(SelectTripContext)
  const handleBack = () => {
    setShowSection(2)
  }
  const handleNext = () => {
    setShowSection(4)
  }
  const handleChange = (e) => {
    // console.log(e.target.value)
    dispatch({
      type: TYPES.UPDATE_ONE_QUOTATION,
      payload: { field: 'finally', data: e.target.value, manyOptions: false }
    })
  }

  return (
    <section className={styles.finally}>
      <H2>Por último</H2>
      <CustomTooltip
        text="¿Algun lugar especifico que quieras ver, restaurantes que quieras visitar o cosas que quieras hacer?"
        title="Extra information"
      />
      <textarea
        className={styles.finally__text}
        name="other_categories"
        placeholder="Indicanos aquellas actividades o destinos que consideres indispensables en el viaje de tus sueños"
        id="other_categories"
        cols="100"
        rows="10"
        onBlur={handleChange}
        defaultValue={state.finally || ''}
      ></textarea>
      <p className={styles.finally__recommendation}>0/250 palabras</p>
      <div>
        <Button onClick={handleBack}>Atrás</Button>
        <Button onClick={handleNext}>Siguiente</Button>
      </div>
    </section>
  )
}

export default OtherActivitiesSection
