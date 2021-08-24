import React from 'react'
import styles from './index.module.scss'

/* Components */
import Button from 'components/Button'
import CustomTooltip from 'components/CustomTooltip'
import H2 from 'components/H2'

const OtherActivitiesSection = ({
  handleClickBefore,
  handleToggleSectionTwo
}) => {
  return (
    <section className={styles.section}>
      <H2>Otras Actividades</H2>
      <CustomTooltip
        text="¿Algun lugar especifico que quieras ver, restaurantes que quieras visitar o cosas que quieras hacer?"
        title="Extra information"
      />
      <textarea
        name="other_categories"
        placeholder="Maximo 255 caracteres"
        id="other_categories"
        cols="73"
        rows="10"
      ></textarea>
      <div style={{ marginTop: '100px' }}>
        <Button onClick={handleClickBefore}>Atrás</Button>
        <Button onClick={handleToggleSectionTwo}>Siguiente</Button>
      </div>
    </section>
  )
}

export default OtherActivitiesSection
