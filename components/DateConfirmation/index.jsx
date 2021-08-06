import React, { useState } from 'react'
import moment from 'moment'
import { DatePicker, Button } from 'antd'
import styles from './index.module.scss'
import { useLocalStorage } from 'assets/Utils/LocalStorage'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

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
  const fecha1 = new Date(fechaInicio)
  const fecha2 = new Date(fechaFin)

  // Creamos array con los meses del año
  const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
  // Creamos array con los días de la semana
  const diasSemana = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']

  // Construimos el formato de salida
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
        selectRange="true"
        // onChange={onCalendarChange}
      />
      )}
      {show && (
          <RangePicker
          locale="es-ES"
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
