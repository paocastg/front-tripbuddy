import React from 'react'
import { Form } from 'antd'
import FormSection from 'sections/Private/Destination/FormSection'
import H2 from 'components/H2'
import styles from './index.module.scss'
import Button from 'components/Button'
import { useRouter } from 'next/router'

const Destination = () => {
  const router = useRouter()
  const formTailLayout = {
    labelCol: {
      span: 4
    },
    wrapperCol: {
      span: 8,
      offset: 9
    }
  }
  return (
    <div>
      <Form className={styles.main} >
        <H2>Elige tu destino y las fechas <br/> en que piensas viajar</H2>
        <FormSection />
        <Form.Item {...formTailLayout}>
          <Button onClick={() => router.push('/select')}>Atrás</Button>
          <Button onClick={() => console.log('Siguiente')}>Siguiente</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Destination
