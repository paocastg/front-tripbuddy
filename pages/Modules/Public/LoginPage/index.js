import React from 'react'
import { Alert } from 'antd'
import FormSection from 'sections/Public/Login/FormSection'

const LoginPage = () => {
  return (
    <div>
      <h1>Iniciar Sesion</h1>
      <Alert message="Este es un mensaje" type="success" />
      <FormSection />
    </div>
  )
}

export default LoginPage
