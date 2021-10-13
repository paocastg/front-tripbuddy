import React from "react";
import moment from 'moment'
import { Table } from 'reactstrap'

const UserTable = props => (
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
      <tr style={{ background: '#2C2C2C', color: '#fff', fontFamily: 'Geomanist-Regular', width: '1400px' }}>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th>Categoria</th>
                      <th>Actividades</th>
                      <th>Cotizacion</th>
                      <th></th>
                      </tr>
    </thead>
    <tbody style={{
                            background: '#2C2C2C',
                            fontFamily: 'Geomanist-Regular',
                            color: '#fff',
                            cursor: 'pointer',
                            border: '2px solid'
                          }}>
      {props.users.length > 0 ? (
        props.users && props.users.map((user, key) => (
          <tr key={key} style={{ border: ' 0.5px solid' }}>
            <td>{user.destino && user.destino.map((destinos) => destinos.nombre) + '  '}</td>
            <td>{'   / ' + ((moment(user.fecha_fin).diff(moment(user.fecha_inicio), 'dias')) / (1000 * 60 * 60 * 24)) + 'dias'}</td>
            <td>{ ' / ' + (user.numero_adultos + user.numero_adolescentes + user.numero_ninos) + ' Personas ' }</td>
            <td>{ user.categoria && user.categoria.map((categorias) => categorias.nombre) + '  ' }</td>
            <td>{ user.actividad && user.actividad.map((actividads) => actividads.nombre) + ' ' }</td>
            <td style = {{display: 'none'}}>{(user.cotizaciones) && (user.cotizaciones.map((item) => item.solicitud) + ' ')[0] }</td>
                            
            <td>
              <button style={{
                            background: '#2C2C2C',
                            fontFamily: 'Geomanist-Regular',
                            color: '#fff',
                            cursor: 'pointer',
                          }}
                className="button muted-button"
                onClick={() => {
                  props.editRow(user);
                }}
              >
                { user.cotizaciones.length + ' ' }
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </Table></div>
);

export default UserTable;
