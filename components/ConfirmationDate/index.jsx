import React, { useState } from 'react'
import moment from 'moment'
import { Button } from 'antd'
import styles from './index.module.scss'
import { useLocalStorage } from 'assets/Utils/LocalStorage'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

const ConfirmationDate = () => {
  const [fechaInicio, setFechaInicio] = useLocalStorage('FechaInicio', moment())
  const [fechaFin, setFechaFin] = useLocalStorage('FechaFin', moment())
  const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(true)

  const handleShowDatePicker = () => {
    setShow((prevState) => !prevState)
    setShow2((prevState) => !prevState)
  }

  const onCalendarChange2 = e => {
    const fecha1 = new Date(e[0])
    const date1 = JSON.stringify(fecha1)
    setFechaInicio(date1.slice(1, 11))
    const fecha2 = new Date(e[1])
    const date2 = JSON.stringify(fecha2)
    setFechaFin(date2.slice(1, 11))
  }
  const fecha1 = new Date(fechaInicio)
  const fecha2 = new Date(fechaFin)

  const meses = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'set', 'oct', 'nov', 'dic']
  const diasSemana = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']
  const inicio = (diasSemana[fecha1.getDay()] + ', ' + fecha1.getDate() + ' de ' + meses[fecha1.getMonth()])
  const fin = (diasSemana[fecha2.getDay()] + ', ' + fecha2.getDate() + ' de ' + meses[fecha2.getMonth()])

  return (
    <div className={styles.site}>
      <div className={styles.divCenter} >
        <label translate="yes"><strong>{inicio} - {fin} </strong> </label>
        <Button className={styles.button}
        onClick={handleShowDatePicker}
        type="text">{show ? 'Guardar' : 'Editar'}</Button>
      </div>
      {show2 && (
        <Calendar
        locale="es-ES"
        value={[moment(fechaInicio), moment(fechaFin)]}
        onChange={onCalendarChange2}
        selectRange="true"
        // onChange={onCalendarChange}
      />
      )}
    </div>
  )
}

export default ConfirmationDate
