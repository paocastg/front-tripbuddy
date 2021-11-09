import React, { useContext } from 'react'
import styles from './index.module.scss'

/* Utils */
// import { API, BASE_API } from 'assets/Utils/Constants'
// import { useLocalStorage } from 'assets/Utils/LocalStorage'

/* Components */
import FormPassengers from 'components/FormPassengers'
import SelectDestinos from 'components/FormDestiny'
import { Form, Tooltip, Row, Col, Button } from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons'
import FormDates from 'components/FormDates'
import H2 from 'components/H2'
import FormSelectAccomodation from 'components/FormSelectAccomodation'
import FormInputBudget from 'components/FormInputBudget'
import SelectTripContext from 'context/SelectTripContext'
import { TYPES } from 'actions/quotationActions'

const FormSection = ({ setShowSection }) => {
  const { isActiveDestiny, dbDestiny, dispatch } =
    useContext(SelectTripContext)
  const handleBack = () => {
    setShowSection(0)
    dispatch({ type: TYPES.CLEAR_ALL_QUOTATION })
  }
  const onFinish = (values) => {
    console.log('Received values of form: ', values)
    if (values) {
      setShowSection(2)
    }
  }

  return (
    <section className={`${styles.formSelectTrip} e-container`}>
      <H2>
        Elige tu destino y las fechas <br /> en que piensas viajar
      </H2>
      <Form className={styles.formSelectTrip__form} onFinish={onFinish}>
        <Form.Item
          className={styles.formSelectTrip__inputSelect}
          name="select"
          rules={[
            {
              required: false,
              message: 'Elegir un destino por favor!'
            }
          ]}
          extra="+ Agrega otro destino"
        >
          {isActiveDestiny
            ? (
            <SelectDestinos disabled={false} dbDestiny={dbDestiny} />
              )
            : (
            <SelectDestinos disabled={true} />
              )}
        </Form.Item>
        <div className={styles.formSelectTrip__groupInput}>
          <FormDates/>
          <FormPassengers />
          <FormInputBudget/>
        </div>
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
        <Form.Item>
          <Button className={styles.formSelectTrip__button} onClick={handleBack}>Atrás</Button>
          <Button className={styles.formSelectTrip__button} htmlType="submit">Siguiente</Button>
        </Form.Item>
      </Form>
    </section>
  )
}
export default FormSection
