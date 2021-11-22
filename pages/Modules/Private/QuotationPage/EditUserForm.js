import React, { useState, useEffect } from 'react'
import { Table } from 'reactstrap'
import moment from 'moment'
import styles from './index.module.scss'

const EditUserForm = props => {
  const initialFormState = { agencia: null, descripcion: '', estado: '', lista: '' }
  const [user, setUser] = useState(
    props.editing ? props.currentUser : initialFormState
  )
  useEffect(() => {
    setUser(props.currentUser)
    console.log(user)
    console.log('user')
  }, [props])

  return (
  <div>
  
  <div className={styles.quotation_Dos}>
    <center><Table>
    <thead>
    <tr style={{ backgroundColor: 'rgb(75, 4, 240)', height: '60px' }} key={1}>
      <th>Viaje:</th>
      <th>{ user.destino && user.destino.map((destinos) => destinos.nombre + ' ') + '    ' }</th>
      <th>{'/ ' + ((moment(user.fecha_fin).diff(moment(user.fecha_inicio), 'dias')) / (1000 * 60 * 60 * 24)) + 'dias' }{ ' / ' + (user.numero_adultos + user.numero_adolescentes + user.numero_ninos) + ' Personas ' }</th>
      <th></th>
    </tr>
    <tr style={{ backgroundColor: '#f7f3f3', height: '10px' }} key={1}></tr>
    <tr style={{ height: '60px' }}>
      <th>Agencia</th>
      <th>Descripcion</th>
      <th>Destinos</th>
      <th>Precio</th>
    </tr>
    </thead>
    <tbody>      
      {
      user.cotizaciones && user.cotizaciones.map((item) =>
      <tr key={ 10 } style={{ border: 'silver 2px solid' }}>
      <td><center>{ item.agencia }</center></td>
      <td>{ item.descripcion }</td>
      <td>{ item.estado }</td>
      <td><center><a href={ `/cotizaciones/detalles/${item.id}` }>{ item.precio + '  '}</a></center></td>
      </tr>
      )
      }
    </tbody>
  </Table></center>
  </div>
    </div>
  )
}

export default EditUserForm
