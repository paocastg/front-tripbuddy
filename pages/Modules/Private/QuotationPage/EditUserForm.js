import React, { useState, useEffect } from 'react'
import { Table } from 'reactstrap'
import moment from 'moment'

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
    <div style = {{ overflow: 'scroll' }}>
    <Table style = {{ width: '1400px' }}>
    <thead>
    <tr style={{ background: '#00B2E3', color: '#fff', fontFamily: 'Geomanist-Regular', height: '60px' }}>
                      <th>Agencia</th>
                      <th>Descripcion</th>
                      <th></th>
                      <th>Destinos</th>
                      <th></th>
                      <th>Precio</th>
                      <th></th>
      </tr>
      <tr style={{ background: '#2C2C2C', color: '#fff', fontFamily: 'Geomanist-Regular', width: '1400px', border: ' 3px solid' }}>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th>Categoria</th>
                      <th>Actividades</th>
                      <th></th>
                      </tr>
    </thead>
    <tbody>
        {
            <tr key={1} style={{ background: '#2C2C2C', fontFamily: 'Geomanist-Regular', color: '#fff', cursor: 'pointer', border: '0.5px solid' }}>
            <td><center>{user.destino && user.destino.map((destinos) => destinos.nombre) + '  ' }</center></td>
            <td>{'   / ' + ((moment(user.fecha_fin).diff(moment(user.fecha_inicio), 'dias')) / (1000 * 60 * 60 * 24)) + 'dias' }</td>
            <td>{ ' / ' + (user.numero_adultos + user.numero_adolescentes + user.numero_ninos) + ' Personas ' }</td>
            <td>{ user.categoria && user.categoria.map((categorias) => categorias.nombre) + '  ' }</td>
            <td>{ user.actividad && user.actividad.map((actividads) => actividads.nombre) + ' ' }</td>
            <td style = {{ display: 'none' }}>{(user.cotizaciones) && (user.cotizaciones.map((item) => item.solicitud) + ' ')[0] }</td>
            <td></td>
          </tr>
        }
      {
      user.cotizaciones && user.cotizaciones.map((item) =>
      <tr key={ 10 } style={{ border: 'silver 2px solid' }}>
      <td><center>{ item.agencia }</center></td>
      <td>{ item.descripcion }</td>
      <td></td>
      <td>{ item.estado }</td>
      <td></td>
      <td><center><a href={ `/cotizaciones/detalles/${item.id}` }>{ item.precio + '  '}</a></center></td>
      </tr>
      )
      }
    </tbody>
  </Table>
  </div>
    </div>
  )
}

export default EditUserForm
