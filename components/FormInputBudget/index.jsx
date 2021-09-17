import React, { useContext } from 'react'
import { Input } from 'antd'
import styles from './index.module.scss'
import { WalletOutlined } from '@ant-design/icons'
import SelectTripContext from 'context/SelectTripContext'
import { TYPES } from 'actions/quotationActions'

const FormInputBudget = () => {
  const { state, dispatch } = useContext(SelectTripContext)
  const budgetOnChange = (e) => {
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
    <div className={styles.input}>
      <Input
        type='number'
        prefix={<WalletOutlined />}
        size="large"
        placeholder="Presupuesto por persona"
        onChange={budgetOnChange}
        value={state.presupuesto}
      />
    </div>
  )
}

export default FormInputBudget
