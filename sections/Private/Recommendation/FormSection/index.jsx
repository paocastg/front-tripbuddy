import React from 'react'
import styles from './index.module.scss'

/* Utils */

/* Components */
import FormPassengers from 'components/FormPassengers'
import SelectDestinos from 'components/FormDestiny'
import { Form, Tooltip, Row, Col } from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons'
import FormDates from 'components/FormDates'
import Button from 'components/Button'
import H2 from 'components/H2'
import FormSelectAccomodation from 'components/FormSelectAccomodation'
import FormInputBudget from 'components/FormInputBudget'

const FormSection = ({
  isActiveDestiny,
  dbDestiny,
  handleClickNext,
  handleClickBefore
}) => {
  return (
    <section className={styles.section}>
       <div className={styles.visible}>
      <Form>
        <Row>
          <Col span={24}>
            <H2>
              Elige tu destino y las fechas <br /> en que piensas viajar
            </H2>
            {isActiveDestiny
              ? (
              <SelectDestinos disabled={false} dbDestiny={dbDestiny} />
                )
              : (
              <SelectDestinos disabled={true} />
                )}
          </Col>
        </Row>
        <br />
        <Form.Item className={styles.form}>
          <Form.Item className={styles.rangepicker}>
            <FormDates style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item className={styles.dropdown}>
            <FormPassengers />
          </Form.Item>
          <Form.Item className={styles.dropdown}>
            <FormInputBudget />
          </Form.Item>
        </Form.Item>
        <br />
        <Form.Item>
          <h3 align="center">
            Te gustaria incluir alojamiento &nbsp;
            <Tooltip title="Extra information">
              <QuestionCircleOutlined />
            </Tooltip>
          </h3>
        </Form.Item>
        <Row>
          <Col span={24}>
          <FormSelectAccomodation />
          </Col>
        </Row>
        <br />
        <section className={styles.section}>
          <div>
            <Button onClick={handleClickBefore}>Atrás</Button>
            <Button onClick={handleClickNext}>Siguiente</Button>
          </div>
        </section>
      </Form>
      </div>
    </section>

  )
}
export default FormSection
