import React, { useState } from 'react'
import moment from 'moment'
import { DatePicker } from 'antd'
import { useLocalStorage } from 'assets/Utils/LocalStorage'
import styles from './index.module.scss'
const { RangePicker } = DatePicker

const RangePickers = () => {
  const [dateStart, setDateStart] = useState('')
  const [dateEnd, setDateEnd] = useState('')
  const [fechaInicio, setFechaInicio] = useLocalStorage('FechaInicio', moment())
  const [fechaFin, setFechaFin] = useLocalStorage('FechaFin', moment())

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
        // value= {[moment(fechaInicio), moment(fechaFin)]}
        size= "large"
        showTime={{
          hideDisabledOptions: true,
          defaultValue: [dateStart, dateEnd]
        }}
        onCalendarChange={onCalendarChange}
        format="MM-DD-YYYY"/>
    </div>
  )
}

export default RangePickers
