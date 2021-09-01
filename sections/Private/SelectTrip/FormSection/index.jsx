import DropdownMenu from 'components/DropdownMenu'
import SelectDestinos from 'components/SelectDestinos'
import { Form, DatePicker, Tooltip, Row, Col } from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons'
import RangePicker from 'components/DataPicker'

import styles from './index.module.scss'
import H2 from 'components/H2'
import SliderAlojamiento from 'components/SliderAlojamiento'
import Button from 'components/Button'
import { useContext } from 'react'
import SelectTripContext from 'context/SelectTripContext'

const FormSection = ({ setShowSection }) => {
  const { isActiveDestiny, dbDestiny } = useContext(SelectTripContext)

  const handleBack = () => {
    setShowSection(0)
  }

  const handleNext = () => {
    setShowSection(2)
  }
  return (
    <section className={styles.section}>
      <Row>
        <Col span={24}>
          <H2>
            Elige tu destino y las fechas <br /> en que piensas viajar
          </H2>
          <Form>
            <Form.Item>
              {isActiveDestiny
                ? (
                <SelectDestinos disabled={false} dbDestiny={dbDestiny} />
                  )
                : (
                <SelectDestinos disabled={true} />
                  )}
            </Form.Item>
            <Form.Item className={styles.form}>
              <Form.Item className={styles.rangepicker}>
                <RangePicker style={{ width: '100%' }} />
              </Form.Item>
              <Form.Item className={styles.dropdown}>
                <DropdownMenu />
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
          </Form>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <SliderAlojamiento />
                </Col>
              </Row>
              <br />
              <section className={styles.section}>
                <div>
                  <Button onClick={handleBack}>Atrás</Button>
                  <Button onClick={handleNext}>Siguiente</Button>
                </div>
              </section>
    </section>

  )
}
export default FormSection
