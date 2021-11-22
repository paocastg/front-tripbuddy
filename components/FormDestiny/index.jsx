import React, { useContext } from 'react'
import { Form, Select } from 'antd'
import styles from './index.module.scss'
import { TYPES } from 'actions/quotationActions'
import SelectTripContext from 'context/SelectTripContext'
import { EnvironmentOutlined } from '@ant-design/icons'

const { Option, OptGroup } = Select

const FormDestiny = ({ disabled }) => {
  const { state, dbDestiny, dispatch } = useContext(SelectTripContext)

  const handleChange = (places) => {
    dispatch({
      type: TYPES.UPDATE_ONE_QUOTATION,
      payload: { field: 'destino', data: places, manyOptions: false }
    })
  }

  return (
    <Form.Item
      className={styles.item}
      name="select"
      rules={[
        {
          required: !disabled,
          message: 'Este campo es obligatorio!'
        }
      ]}
      extra="+ Agrega otro destino"
    >
      <Select
        className={styles.select}
        value={state.destino}
        mode="multiple"
        placeholder={<EnvironmentOutlined />}
        onChange={handleChange}
        disabled={disabled}
      >
        <OptGroup label='Peru'>
          {dbDestiny &&
            dbDestiny.map((d) => <Option key={d.nombre}>{d.nombre}</Option>)}
        </OptGroup>
      </Select>
    </Form.Item>
  )
}

export default FormDestiny
