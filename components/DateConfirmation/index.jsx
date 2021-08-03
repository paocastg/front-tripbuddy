import React, { useState } from 'react'
import moment from 'moment'
import { DatePicker, Calendar } from 'antd'
import { useLocalStorage } from 'assets/Utils/LocalStorage'
const { RangePicker } = DatePicker

const DateConfirmation = () => {
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

  function onPanelChange (value, mode) {
    console.log(value, mode)
  }
  return (
    <div>
      <Calendar
      fullscreen={false}
      onPanelChange={onPanelChange}
      // value={[fechaInicio, fechaFin]}
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
