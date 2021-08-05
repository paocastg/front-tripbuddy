import React, { useState } from 'react'
import moment from 'moment'
import { DatePicker, Calendar, Button } from 'antd'
import styles from './index.module.scss'
import { useLocalStorage } from 'assets/Utils/LocalStorage'
const { RangePicker } = DatePicker

const DateConfirmation = () => {
  const [fechaInicio, setFechaInicio] = useLocalStorage('FechaInicio', moment())
  const [fechaFin, setFechaFin] = useLocalStorage('FechaFin', moment())
  const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(true)

  const formatofechaInicio = moment(fechaInicio).format('ddd, DD MMMM ')
  const formatofechaFin = moment(fechaFin).format('ddd, DD MMMM ')

  const handleShowDatePicker = () => {
    setShow((prevState) => !prevState)
    setShow2((prevState) => !prevState)
  }

  const onCalendarChange = e => {
    console.log(e)
    if (e && e[0] != null) {
      setFechaInicio(e[0].format('MM/DD/YYYY'))
    }

    if (e && e[1] != null) {
      setFechaFin(e[1].format('MM/DD/YYYY'))
    }
  }

  return (
    <div className={styles.site}>
      <div className={styles.divCenter} >
        <label><strong>{formatofechaInicio} - {formatofechaFin} </strong> </label>
        <Button className={styles.button}
        onClick={handleShowDatePicker}
        type="text">{show ? 'Guardar' : 'Editar'}</Button>
      </div>
      {show2 && (
        <Calendar
          fullscreen={false}
          // onChange ={onCalendarChange}
          value={moment(fechaInicio)}
          defaultValue={moment(fechaFin)}
          mode="month"
          headerRender={({ value, type, onChange, onTypeChange }) => {
            return (
              <div>
              </div>
            )
          }}
        />
      )}
      {show && (
        <RangePicker
          value= {[moment(fechaInicio), moment(fechaFin)]}
          showTime={{
            hideDisabledOptions: true
          }}
          onCalendarChange={onCalendarChange}
          format="MM-DD-YYYY"
          open= "true"
          bordered={false}
        />
      )}
    </div>
  )
}

export default DateConfirmation
