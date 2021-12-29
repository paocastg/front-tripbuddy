/* eslint-disable */
import React from 'react'
import moment from 'moment'
import { Table } from 'reactstrap'
import styles from './index.module.scss'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'

const UserTable = props => (
  <div className={styles.quotation}>
  <center><Table striped>
    <thead>
      <tr style={{ color: '#fff', height: '60px' }}>
        <th style={{ textAlign: 'center' }}>Destinos</th>
        <th>Descripcion</th>
        <th style={{ textAlign: 'center' }}>Categoria</th>
        <th style={{ textAlign: 'center' }}>Actividades</th>
        <th>Cotizacion</th>
      </tr>
    </thead>
    <tbody>
      { props.users && props.users.map((user, key) => (
      <tr key={key} onClick={() => { props.editRow(user) }}>
        <td scope="row">{ user.destino && user.destino.map((destinos) =><ul><li>{destinos.nombre.split('/([!,?,.])/') + '  '}</li></ul>)}</td>
            <td>{ + ((moment(user.fecha_fin).diff(moment(user.fecha_inicio), 'dias')) / (1000 * 60 * 60 * 24)) + 'dias' }<br/>{ + (user.numero_adultos + user.numero_adolescentes + user.numero_ninos) + ' Personas ' }</td>
            <td>{ user.categoria && user.categoria.map((categorias, i) => <ul>{categorias.nombre.split('/([!,?,.])/') + '  ' }</ul>)}</td>
            <td>{ user.actividad && user.actividad.map((actividads, i) => <ul key={i}><li>{actividads.nombre.split('/([!,?,.])/') + ' ' }</li></ul>)}</td>
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
