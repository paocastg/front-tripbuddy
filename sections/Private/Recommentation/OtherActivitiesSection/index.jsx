import React from 'react'
import H2 from 'components/H2'
import CustomTooltip from 'components/CustomTooltip'
import Button from 'components/Button'
import styles from './index.module.scss'
import { useRouter } from 'next/router'
import { Select } from 'antd'

const { Option } = Select

const OtherActivitiesSection = ({ handleClickBefore }) => {
  const router = useRouter()
  return (
    <section className={styles.section} >
      <H2>Otras Actividades</H2>
      <CustomTooltip
        text="¿Algun lugar especifico que quieras ver, restaurantes que quieras visitar o cosas que quieras hacer?"
        title="Extra information"
      />
      <Select
        mode="multiple"
        placeholder="Destinos"
        style={{ width: '45%', marginTop: '20px' }}
      >
        <Option value='Lineas de Nazca' label='Lineas de Nazca' >Lineas de Nazca</Option>
        <Option value='Canotaje' label='Canotaje' >Canotaje</Option>
        <Option value='Machu picchu' label='Machu picchu' >Machu picchu</Option>
        <Option value='Parapente' label='Parapente' >Parapente</Option>
        <Option value='Lunahuaná' label='Lunahuaná' >Lunahuaná</Option>
        <Option value='Qenqo' label='Qenqo' >Qenqo</Option>
      </Select>
      <div style={{ marginTop: '100px' }} >
        <Button onClick={handleClickBefore}>Atrás</Button>
        <Button onClick={() => router.push('/confirmation')}>Siguiente</Button>
      </div>

    </section>
  )
}

export default OtherActivitiesSection
