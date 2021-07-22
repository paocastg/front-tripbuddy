import React from 'react'
import { Form, Row, Col} from 'antd'
import FormSection from 'sections/Private/Destination/FormSection'
import H2 from 'components/H2'
import styles from './index.module.scss'
import Button from 'components/Button'
import { useRouter } from 'next/router'
import SliderAlojamiento from 'components/SliderAlojamiento'

const Destination = () => {
  const router = useRouter()
  return (
    <div>
      <Row>
        <Col span={24}>Header</Col>
      </Row>
      <Row>
        <Col span={12} offset={6}>
          <H2>Elige tu destino y las fechas <br/> en que piensas viajar</H2>
          <FormSection />
        </Col>
      </Row>
      <Row>
        <Col span={12} offset={6}>
          <SliderAlojamiento/>
        </Col>
      </Row>
      <br/>
      <section className={styles.section}>
        <div>
        <Button onClick={() => router.push('/select')}>Atrás</Button>
        <Button onClick={() => console.log('Siguiente')}>Siguiente</Button>
        </div>
      </section>
    </div>
  )
}

export default Destination
