import React, { useState } from 'react'
import { DatePicker } from 'antd'
import { useLocalStorage } from 'assets/Utils/LocalStorage'
import styles from './index.module.scss'
const { RangePicker } = DatePicker

const RangePickers = () => {
  const [dateStart, setDateStart] = useState('')
  const [dateEnd, setDateEnd] = useState('')
  const [fechainicio, setFechaInicio] = useLocalStorage('FechaInicio', '')
  const [fechaFin,setFechaFin] = useLocalStorage('FechaFin', '')

  const onCalendarChange = e => {
    if (e[0] != null) {
      setDateStart(e[0])
      setFechaInicio(e[0].format('MM/DD/YYYY'))
    }

    if (e[1] != null) {
      setDateEnd(e[1])
      setFechaFin(e[1].format('MM/DD/YYYY'))
    }
  }

  return (
    <div>
      <RangePicker
        className={styles.rangepicker}
        size= "large"
        showTime={{
          hideDisabledOptions: true,
          defaultValue: [dateStart, dateEnd]
        }}
        onCalendarChange={onCalendarChange}
        format="DD-MM-YYYY"/>
    </div>
  )
}

export default RangePickers
