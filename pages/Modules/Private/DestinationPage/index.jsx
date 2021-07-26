import React from 'react'
import { Row, Col } from 'antd'
import FormSection from 'sections/Private/Destination/FormSection'
import Wrapper from 'layout/Wrapper'
import H2 from 'components/H2'
import styles from './index.module.scss'
import Button from 'components/Button'
import { useRouter } from 'next/router'
import SliderAlojamiento from 'components/SliderAlojamiento'

const Destination = () => {
  const router = useRouter()
  return (
    <Wrapper>
      <div className={styles.main}>
        <div className={styles.visible}>
          <Row>
            <Col span={24} >
              <H2>
                Elige tu destino y las fechas <br /> en que piensas viajar
              </H2>
              <FormSection />
            </Col>
          </Row>
          <Row>
            <Col span={24} >
              <SliderAlojamiento />
            </Col>
          </Row>
          <br />
          <section className={styles.section}>
            <div>
              <Button onClick={() => router.push('/select')}>Atrás</Button>
              <Button onClick={() => router.push('/confirmation')}>Siguiente</Button>
            </div>
          </section>
        </div>
      </div>
    </Wrapper>
  )
}

export default Destination
