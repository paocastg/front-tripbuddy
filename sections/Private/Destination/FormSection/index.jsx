import React, { useEffect, useState } from 'react'
import DropdownMenu from 'components/DropdownMenu'
import SelectDestinos from 'components/SelectDestinos'
import RangePicker from 'components/DataPicker'
import { Form, Tooltip, Select } from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons'
import { useLocalStorage } from 'assets/Utils/LocalStorage'

import styles from './index.module.scss'

const { Option } = Select

const FormSection = ({ isActiveDestiny }) => {
  return (
    <section className={styles.section}>
      <Form>
        <Form.Item>
          {isActiveDestiny
            ? (
            <SelectDestinos disabled={false} />
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
    </section>
  )
}
export default FormSection
