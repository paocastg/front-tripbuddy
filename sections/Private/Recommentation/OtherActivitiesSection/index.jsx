import React from 'react'
import H2 from 'components/H2'
import CustomTooltip from 'components/CustomTooltip'
import Button from 'components/Button'
import styles from './index.module.scss'
import { useRouter } from 'next/router'
import { Select } from 'antd'

const { Option } = Select

const OtherActivitiesSection = ({
  handleClickBefore,
  handleToggleSectionTwo
}) => {
  const router = useRouter()
  return (
    <section className={styles.section}>
      <H2>Otras Actividades</H2>
      <CustomTooltip
        text="¿Algun lugar especifico que quieras ver, restaurantes que quieras visitar o cosas que quieras hacer?"
        title="Extra information"
      />
      <textarea
        name="other_categories"
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
