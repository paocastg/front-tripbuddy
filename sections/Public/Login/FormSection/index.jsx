import React from 'react'
import FacebookAuth from 'components/FacebookAuth'
import GoogleAuth from 'components/GoogleAuth'
import H2 from 'components/H2'
import styles from './index.module.scss'

const FormSection = () => {
  return (
    <div className={styles.box_register}>
      <H2>Regístrate y...</H2>
      <div className={styles.group_img} >
        <img src="icon-accede.svg" alt="icono accede" />
        <img src="icon-personaliza.svg" alt="icono personaliza" />
        <img src="icon-agrega.svg" alt="icono agrega" />
      </div>
      <hr />
      <FacebookAuth />
      <GoogleAuth />
    </div>
  )
}

export default FormSection
