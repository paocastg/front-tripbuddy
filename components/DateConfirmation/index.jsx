import React, { useState } from 'react'
import moment from 'moment'
import { DatePicker, Calendar, Button } from 'antd'
import styles from './index.module.scss'
import { useLocalStorage } from 'assets/Utils/LocalStorage'
const { RangePicker } = DatePicker

const DateConfirmation = () => {
  const [dateStart, setDateStart] = useState('')
  const [dateEnd, setDateEnd] = useState('')
  const [fechaInicio, setFechaInicio] = useLocalStorage('FechaInicio', moment())
  const [fechaFin, setFechaFin] = useLocalStorage('FechaFin', moment())

  const formatofechaInicio = moment(fechaInicio).format('ddd, DD MMMM ')
  const formatofechaFin = moment(fechaFin).format('ddd, DD MMMM ')

  return (
    <div className={styles.site}>
      <Calendar
        fullscreen={false}
        // onChange ={onCalendarChange}
        value={moment(fechaInicio)}
        defaultValue={moment(fechaFin)}
        mode="month"
        headerRender={({ value, type, onChange, onTypeChange }) => {
          return (
            <div style={{ padding: 10 }}>
              <label> {formatofechaInicio} - {formatofechaFin} </label>
              <Button type="text">Editar</Button>
            </div>
          )
        }}
       />
      {/* <RangePicker
        dateRender={current => {
          const style = {}
          if (current.date() === 5) {
            style.border = '1px solid #1890ff'
            style.borderRadius = '50%'
          }
          return (
            <div className="ant-picker-cell-inner" style={style}>
              {current.date()}
            </div>
          )
        }}
        size= "large"
        showTime={{
          hideDisabledOptions: true
          // defaultValue: [dateStart, dateEnd]
        }}
        onCalendarChange={onCalendarChange}
        format="MM-DD-YYYY"
        open= "true"
        bordered={false}
        /> */}
    </div>
  )
}

export default DateConfirmation
