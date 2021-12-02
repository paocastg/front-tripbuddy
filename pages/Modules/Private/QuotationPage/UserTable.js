import React from 'react'
import moment from 'moment'
import { Table } from 'reactstrap'
import styles from './index.module.scss'

const UserTable = props => (
  <div className={styles.quotation}>
  <center>
  <Table>
    <thead>
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
          <tr key={key} style={{ border: ' 0.5px solid' }} onClick={() => { props.editRow(user) }}>
            <td><center>{ user.destino && user.destino.map((destinos) => destinos.nombre) + '  ' }</center></td>
            <td><center>{'   / ' + ((moment(user.fecha_fin).diff(moment(user.fecha_inicio), 'dias')) / (1000 * 60 * 60 * 24)) + 'dias' }<div>{ ' / ' + (user.numero_adultos + user.numero_adolescentes + user.numero_ninos) + ' Personas ' }</div></center></td>
            <td><center><div>{ user.categoria && user.categoria.map((categorias) => categorias.nombre) + '  ' }</div></center></td>
            <td><center><div>{ user.actividad && user.actividad.map((actividads) => actividads.nombre) + ' ' }</div></center></td>
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
