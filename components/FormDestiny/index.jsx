import React, { useContext } from 'react'
import { Select } from 'antd'
import styles from './index.module.scss'
import { TYPES } from 'actions/quotationActions'
import SelectTripContext from 'context/SelectTripContext'
import { EnvironmentOutlined } from '@ant-design/icons'

const { Option } = Select

const FormDestiny = ({ disabled }) => {
  const { state, dbDestiny, dispatch } = useContext(SelectTripContext)

  const handleChange = (places) => {
    dispatch({
      type: TYPES.UPDATE_ONE_QUOTATION,
      payload: { field: 'destino', data: places, manyOptions: false }
    })
  }

  return (
    <Select
      className={styles.select}
      value={state.destino}
      mode="multiple"
      placeholder={<EnvironmentOutlined />}
      onChange={handleChange}
      disabled={disabled}
    >
      {dbDestiny &&
        dbDestiny.map((d) => <Option key={d.nombre}>{d.nombre}</Option>)}
    </Select>
  )
}

export default FormDestiny
