import React from 'react'
import DropdownMenu from 'components/DropdownMenu'
import SelectDestinos from 'components/SelectDestinos'
import { Form, DatePicker, Space, Tooltip, Button } from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons'
import SliderAlojamiento from 'components/SliderAlojamiento'
import styles from './index.module.scss'

const { RangePicker } = DatePicker

const FormSection = () => {
  return (
    <section className={styles.section}>
      <Form >
        <Form.Item >
          <SelectDestinos />
        </Form.Item>
        <Form.Item style={{ marginBottom: 0 }}>
          <Form.Item style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}>
            <RangePicker size= "large" style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item style={{ display: 'inline-block', width: 'calc(50% - 12px)', margin: '0 8px' }}>
            <DropdownMenu style={{ width: '100%' }}/>
          </Form.Item>
        </Form.Item>
        <Form.Item >
          <h3 align="center">
            Te gustaria incluir alojamiento
            <Tooltip title="Extra information">
              <QuestionCircleOutlined/>
            </Tooltip>
          </h3>
        </Form.Item>
        <Form.Item>
            <Button className={styles.btn} >Quiero un Hotel</Button>
            <Button className={styles.btn} >Consigueme un Airbnb</Button>
            <Button className={styles.btn} >No, gracias</Button>
        </Form.Item>
        <Form.Item>
          <SliderAlojamiento/>
        </Form.Item>
        <br/><br/>
      </Form>
    </section>
  )
}

export default FormSection
