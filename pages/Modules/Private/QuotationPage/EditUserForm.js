import React, { useState, useEffect } from 'react'
import { Table } from 'reactstrap'
import moment from 'moment'
import styles from './index.module.scss'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'

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
  console.log(user)
  
  return (
  <div>
  <div className={ styles.quotation_Dos }>
    <center><Table striped>
        <thead>
        <tr style={{ color: '#fff', backgroundColor: 'rgb(75, 4, 240)', height: '30px' }} key={1}>
            <th>Viaje:</th>
            <th>{ user.destino && user.destino.map((destinos) => destinos.nombre + ' ') + '    ' }</th>
            <th>{'/ ' + ((moment(user.fecha_fin).diff(moment(user.fecha_inicio), 'días')) / (1000 * 60 * 60 * 24)) + 'días' }{ ' / ' + (user.numero_adultos + user.numero_adolescentes + user.numero_ninos) + ' Personas ' }</th>
            <th></th>
          </tr>
          <tr style={{ backgroundColor: '#f7f3f3', height: '10px' }} key={1}></tr>
          <tr style={{ height: '50px' }}>
          <th>Agencia</th>
          <th style={{ textAlign: 'center' }}>Descripcion</th>
          <th style={{ textAlign: 'center' }}>Destinos</th>
          <th>Precio</th>
          </tr>
        </thead>
        <tbody>
        { user.cotizaciones && user.cotizaciones.map((item) =>
        <tr>
            <th scope="row"><a href={ `/cotizaciones/detalles/${item.id}` }>{ item.agencia }</a></th>
            <td><a href={ `/cotizaciones/detalles/${item.id}` }>{ item.descripcion }</a></td>
            <td><a href={ `/cotizaciones/detalles/${item.id}` }>{ item.estado }</a></td>
            <td><a href={ `/cotizaciones/detalles/${item.id}` }>{ item.precio + '  '}</a></td>
        </tr>
        )}
        </tbody>
      </Table></center>
  </div>
    </div>
  )
}

export default EditUserForm
