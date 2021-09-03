import React from 'react'
import moment from 'moment'
import { DatePicker } from 'antd'
import { useLocalStorage } from 'assets/Utils/LocalStorage'
import styles from './index.module.scss'
const { RangePicker } = DatePicker

const FormDates = () => {
  // const [dateStart, setDateStart] = useState('')
  // const [dateEnd, setDateEnd] = useState('')
  const [fechaInicio, setFechaInicio] = useLocalStorage('FechaInicio', moment())
  const [fechaFin, setFechaFin] = useLocalStorage('FechaFin', moment())

  const onCalendarChange = e => {
    // console.log(e)
    if (e && e[0] != null) {
      // setDateStart(e[0])
      setFechaInicio(e[0].format('YYYY/MM/DD'))
    }

    if (e && e[1] != null) {
      // setDateEnd(e[1])
      setFechaFin(e[1].format('YYYY/MM/DD'))
    }
  }
  const dateFormat = 'YYYY/MM/DD'
  const disabledDate = (current) => {
    return current && current < moment().endOf('day')
  }
  return (
    <div>
      <RangePicker
          className={styles.rangepicker}
          value= {[moment(fechaInicio), moment(fechaFin)]}
          size= "large"
          disabledDate={disabledDate}
          onCalendarChange={onCalendarChange}
          format={dateFormat}/>
    </div>
  )
}

export default FormDates
