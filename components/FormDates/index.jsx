import React, { useContext } from 'react'
import moment from 'moment'
import { DatePicker, Form } from 'antd'
import styles from './index.module.scss'
import { TYPES } from 'actions/quotationActions'
import SelectTripContext from 'context/SelectTripContext'
const { RangePicker } = DatePicker

const FormDates = () => {
  const { state, dispatch } = useContext(SelectTripContext)

  const onCalendarChange = (e) => {
    if (e && e[0] != null) {
      dispatch({
        type: TYPES.UPDATE_ONE_QUOTATION,
        payload: {
          field: 'fecha_inicio',
          data: e[0].format('YYYY/MM/DD'),
          manyOptions: false
        }
      })
    }

    if (e && e[1] != null) {
      dispatch({
        type: TYPES.UPDATE_ONE_QUOTATION,
        payload: {
          field: 'fecha_fin',
          data: e[1].format('YYYY/MM/DD'),
          manyOptions: false
        }
      })
    }
  }
  const dateFormat = 'YYYY/MM/DD'
  const disabledDate = (current) => {
    return current && current < moment().endOf('day')
  }
  return (
    <Form.Item
      name="date"
      rules={[
        {
          required: true,
          message: 'Este campo es obligatorio'
        }
      ]}
    >
      <RangePicker
        className={styles.rangepicker}
        value={[
          state.fecha_inicio ? moment(state.fecha_inicio) : null,
          state.fecha_fin ? moment(state.fecha_fin) : null
        ]}
        size="large"
        disabledDate={disabledDate}
        onCalendarChange={onCalendarChange}
        format={dateFormat}
      />
    </Form.Item>
  )
}

export default FormDates
