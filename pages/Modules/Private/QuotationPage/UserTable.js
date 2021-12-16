import React from 'react'
import moment from 'moment'
import { Table } from 'reactstrap'
import styles from './index.module.scss'

const UserTable = props => (
  <div className={styles.quotation}>
  <center>
  <Table>
    <thead style={{ border: '#00B2E3 1.5px solid' }}>
      <tr>
                      <th>Destinos</th>
                      <th style={{ textAlign: 'left' }}>Descripcion</th>
                      <th style={{ textAlign: 'center' }}>Categoria</th>
                      <th style={{ textAlign: 'left' }}>Actividades</th>
                      <th style={{ textAlign: 'left' }}>Cotizacion</th>
      </tr><tr></tr>
    </thead>
    <tbody>
      {
        props.users && props.users.map((user, key) => (
          <tr style={{ height: '80px' }} key={key} onClick={() => { props.editRow(user) }}>
            <td><center>{ user.destino && user.destino.map((destinos) => destinos.nombre) + '  ' }</center></td>
            <td>{ + ((moment(user.fecha_fin).diff(moment(user.fecha_inicio), 'dias')) / (1000 * 60 * 60 * 24)) + 'dias' }<br/>{ + (user.numero_adultos + user.numero_adolescentes + user.numero_ninos) + ' Personas ' }</td>
            <td style={{ textAlign: 'center' }}>{ user.categoria && user.categoria.map((categorias, i) => <ul>{categorias.nombre.split('/([!,?,.])/') + '  ' }</ul>)}</td>
            <td>{ user.actividad && user.actividad.map((actividads, i) => <ul key={i}><li>{actividads.nombre.split('/([!,?,.])/') + ' ' }</li></ul>)}</td>
            <td style = {{ display: 'none' }}>{ (user.cotizaciones) && (user.cotizaciones.map((item) => item.solicitud) + ' ')[0] }</td>
            <td style={{ textAlign: 'left' }}>{ user.cotizaciones.length + ' ' }
            </td>
          </tr>
        ))
     }
    </tbody>
  </Table></center></div>
)

export default UserTable
