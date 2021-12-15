import React from 'react'
import moment from 'moment'
import { Table } from 'reactstrap'
import styles from './index.module.scss'

const UserTable = props => (
  <div className={styles.quotation}>
  <center>
  <Table>
    <thead style={{ border: '#00B2E3 15.5px solid' }}>
      <tr>
                      <th>Destinos</th>
                      <th>Descripcion</th>
                      <th>Categoria</th>
                      <th>Actividades</th>
                      <th>Cotizacion</th>
      </tr><tr></tr>
    </thead>
    <tbody>
      {
        props.users && props.users.map((user, key) => (
          <tr style={{ border: 'rgb(250, 244, 244) 15.5px solid' }} key={key} onClick={() => { props.editRow(user) }}>
            <td><center>{ user.destino && user.destino.map((destinos) => destinos.nombre) + '  ' }</center></td>
            <td>{ + ((moment(user.fecha_fin).diff(moment(user.fecha_inicio), 'dias')) / (1000 * 60 * 60 * 24)) + 'dias' }<br/>{ + (user.numero_adultos + user.numero_adolescentes + user.numero_ninos) + ' Personas ' }</td>
            <td>{ user.categoria && user.categoria.map((categorias, i) => <ul>{categorias.nombre.split('/([!,?,.])/') + '  ' }</ul>)}</td>
            <td>{ user.actividad && user.actividad.map((actividads, i) => <ul key={i}>{actividads.nombre.split('/([!,?,.])/') + ' ' }</ul>)}</td>
            <td style = {{ display: 'none' }}>{ (user.cotizaciones) && (user.cotizaciones.map((item) => item.solicitud) + ' ')[0] }</td>
            <td>{ user.cotizaciones.length + ' ' }
            </td>
          </tr>
        ))
     }
    </tbody>
  </Table></center></div>
)

export default UserTable
