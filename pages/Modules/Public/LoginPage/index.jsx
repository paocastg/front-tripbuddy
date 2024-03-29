import React from 'react'
import { Alert } from 'antd'
import FormSection from 'sections/Public/Login/FormSection'

import styles from './index.module.scss'

const LoginPage = () => {
  return (
    <div>
      <h1 className={styles.red}>Iniciar Sesion</h1>
      <Alert message="Este es un mensaje" type="success" />
      <FormSection style={{ textAlign: 'center' }} />
    </div>
  )
}

export default LoginPage
