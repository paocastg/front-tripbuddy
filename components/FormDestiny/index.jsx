import React, { useContext } from 'react'
import { Select } from 'antd'
import styles from './index.module.scss'
import { TYPES } from 'actions/quotationActions'
import SelectTripContext from 'context/SelectTripContext'

const { Option } = Select

const FormDestiny = ({ disabled }) => {
  const { state, dbDestiny, dispatch } = useContext(SelectTripContext)

  const handleChange = (places) => {
    dispatch({ type: TYPES.UPDATE_ONE_QUOTATION, payload: { field: 'destino', data: places, manyOptions: false } })
  }

  return (
    <div className={styles.div}>
      <Select
        className={styles.select}
        value= {state.destino}
        mode="multiple"
        placeholder="Destinos"
        onChange={handleChange}
        disabled={disabled}

      >
        {dbDestiny && dbDestiny.map((d) => <Option key={d.nombre}>{d.nombre}</Option>)}
      </Select>
    </div>
  )
}

export default FormDestiny
