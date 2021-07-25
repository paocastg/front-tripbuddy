import React from 'react'
import DropdownMenu from 'components/DropdownMenu'
import SelectDestinos from 'components/SelectDestinos'
import { Form, DatePicker, Tooltip } from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons'

import styles from './index.module.scss'

const { RangePicker } = DatePicker

const FormSection = () => {
  return (
    <section className={styles.section}>
      <Form >
        <Form.Item >
          <SelectDestinos />
        </Form.Item>
        <Form.Item className={styles.form}>
          <Form.Item className={styles.rangepicker}>
            <RangePicker size= "large" style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item className={styles.dropdown}>
            <DropdownMenu />
          </Form.Item>
        </Form.Item>
        <br/>
        <Form.Item >
          <h3 align="center">
            Te gustaria incluir alojamiento &nbsp;
            <Tooltip title="Extra information">
              <QuestionCircleOutlined/>
            </Tooltip>
          </h3>
        </Form.Item>
      </Form>
    </section>
  )
}
export default FormSection
