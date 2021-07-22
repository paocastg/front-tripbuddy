import React from 'react'
import H2 from 'components/H2'
import CustomTooltip from 'components/CustomTooltip'
import { Select } from 'antd'

const OtherActivitiesSection = () => {
  return (
    <section>
      <H2>Otras Actividades</H2>
      <CustomTooltip
        text="¿Algun lugar especifico que quieras ver, restaurantes que quieras visitar o cosas que quieras hacer?"
        title="Extra information"
      />
    </section>
  )
}

export default OtherActivitiesSection
