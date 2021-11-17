import React, { useContext, useState } from 'react'
import { Form, Input } from 'antd'
import styles from './index.module.scss'
import { DollarOutlined } from '@ant-design/icons'
import SelectTripContext from 'context/SelectTripContext'
import { TYPES } from 'actions/quotationActions'

const validatePrice = (price) => {
  if (price >= 100) {
    return {
      validateStatus: 'success',
      errorMsg: null
    }
  }
  return {
    validateStatus: 'error',
    errorMsg: 'Presupuesto no valido'
  }
}

const FormInputBudget = () => {
  const [price, setPrice] = useState(0)
  const { state, dispatch } = useContext(SelectTripContext)
  const handleChange = (e) => {
    console.log('yep price: ', e.target.value)
    setPrice({ ...validatePrice(e.target.value), value: e.target.value })
    dispatch({
      type: TYPES.UPDATE_ONE_QUOTATION,
      payload: {
        field: 'presupuesto',
        data: e.target.value,
        manyOptions: false
      }
    })
  }

  return (
    <Form.Item
      name="price"
      validateStatus={price.validateStatus}
      help={price.errorMsg}
      rules={[
        {
          required: true,
          message: 'Se requiere un presupuesto por persona'
        }
      ]}
    >
      <Input
        className={styles.input}
        size="large"
        placeholder="Presupuesto por persona"
        addonBefore={<DollarOutlined />}
        onChange={handleChange}
        value={state.presupuesto}
      />
    </Form.Item>
  )
}

export default FormInputBudget
