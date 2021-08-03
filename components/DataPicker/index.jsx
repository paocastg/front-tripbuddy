import React, { useState , useEffect} from 'react'
import moment from 'moment'
import { DatePicker } from 'antd'
import { useLocalStorage } from 'assets/Utils/LocalStorage'
import styles from './index.module.scss'
const { RangePicker } = DatePicker

const RangePickers = () => {
  // const [dateStart, setDateStart] = useState('')
  // const [dateEnd, setDateEnd] = useState('')
  const [fechaInicio, setFechaInicio] = useLocalStorage('FechaInicio', moment('00:00:00', 'HH:mm:ss'))
  const [fechaFin, setFechaFin] = useLocalStorage('FechaFin', moment('00:00:00', 'HH:mm:ss'))

  const onCalendarChange = e => {
    console.log(e)
    if (e && e[0] != null) {
      // setDateStart(e[0])
      setFechaInicio(e[0].format('MM/DD/YYYY'))
    }

    if (e && e[1] != null) {
      // setDateEnd(e[1])
      setFechaFin(e[1].format('MM/DD/YYYY'))
    }
  }

  return (
    <div>
      <RangePicker
        allowEmpty
        className={styles.rangepicker}
        // value= {['', '']}
        size= "large"
        showTime={{
          hideDisabledOptions: true,
          defaultValue: [fechaInicio, fechaFin]
        }}
        onCalendarChange={onCalendarChange}
        format="MM-DD-YYYY"/>
    </div>
  )
}

export default RangePickers
