import React from 'react'
import { Input } from 'antd'
import { useLocalStorage } from 'assets/Utils/LocalStorage'
import styles from './index.module.scss'
import { WalletOutlined } from '@ant-design/icons'

const FormInputBudget = () => {
  const [budget, setBudget] = useLocalStorage('presupuesto', '')
  const budgetOnChange = e => {
    setBudget(e.target.value)
  }

  return (
    <div className={styles.input}>
      <Input
      prefix={<WalletOutlined />}
      size="large"
      placeholder="Presupuesto por persona"
      onChange={budgetOnChange}
      value={budget}
      minLength={3}
      />
    </div>
  )
}

export default FormInputBudget
