import React from 'react'
import DropdownMenu from 'components/DropdownMenu'
import { Form, DatePicker, Tooltip, Select } from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons'
import RangePicker from 'components/DataPicker'

import styles from './index.module.scss'

const FormSection = () => {
  return (
    <section className={styles.section}>
      <Form>
        <Form.Item>
          <Select
            style={{ width: '95%' }}
            mode="multiple"
            placeholder="Destinos"
            disabled
          ></Select>
        </Form.Item>
        <Form.Item style={{ marginBottom: 0 }}>
          <Form.Item
            style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}
          >
            <RangePicker style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item style={{ display: 'inline-block', margin: '0 8px' }}>
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
    </section>
  )
}
export default FormSection
