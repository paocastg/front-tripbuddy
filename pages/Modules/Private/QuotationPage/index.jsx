import styles from './index.module.scss'
/* Components */
import { Table } from 'reactstrap'
import H2 from 'components/H2'
import moment from 'moment'

/* Layout */
import Session from 'layout/Session'
import Wrapper from 'layout/Wrapper'
import { HOST } from 'assets/Utils/Constants'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Auth } from 'assets/Utils/Auth'

const QuotationPage = () => {
  const [data, setData] = useState([])

  const fetchUsers = async () => {
    const user = Auth.getSession().usuario.id
    const response = await axios.get(HOST + '/solicitud/list_cotizaciones/' + user)
    setData(response.data.solicitud)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <Wrapper>
      <Session>
        <div className={styles.quotation}>
          <H2>Cotizaciones Abiertas</H2>
          <div style = {{ overflow: 'scroll' }}>
          <Table bordered style = {{ width: '1400px' }}>
                  <thead>
                    <tr style={{ background: '#00B2E3', color: '#fff', fontFamily: 'Geomanist-Regular', height: '60px' }}>
                    <th>Agencia</th>
                      <th>Descripcion</th>
                      <th>Destinos</th>
                      <th>Precio</th>
                    </tr>
                    <tr><th></th><th></th></tr>
                    <tr style={{ background: '#2C2C2C', color: '#fff', fontFamily: 'Geomanist-Regular' }}>
                      <th></th>
                      <th></th>
                      <th>Categoria</th>
                      <th>Actividades</th>
                      </tr>
                    {
                      data && data.map((item, index, key) => {
                        return (
                          <tr key={key} style={{
                            background: '#2C2C2C',
                            fontFamily: 'Geomanist-Regular',
                            color: '#fff',
                            cursor: 'pointer'
                          }}>
                           <center><td>{ item.destino.map((destinos) => destinos.nombre) + '  ' }</td></center>
                          <th>
                          <th>{ '   / ' + ((moment(item.fecha_fin).diff(moment(item.fecha_inicio), 'dias')) / (1000 * 60 * 60 * 24)) + 'dias' }</th>
                          <th>{ ' / ' + (item.numero_adultos + item.numero_adolescentes + item.numero_ninos) + ' Personas ' }</th>
                          </th>
                          <th>{ item.categoria.map((categorias) => categorias.nombre) + '  ' }</th>
                          <th>{ item.actividad.map((actividads) => actividads.nombre) + ' ' }</th>
                          </tr>
                        )
                      })
                    }
                    <tr><th></th></tr><br></br>
                  </thead>
                  <tbody>{
                      data && data.map((item, index) => {
                        return (
                          <tr key={index}
                          style={{
                            fontFamily: 'Geomanist-Regular',
                            cursor: 'pointer'
                          }}>
                            <td><center>{ item.cotizaciones.map((cotizacion) => cotizacion.agencia) + '  ' }</center></td>
                            <td><center>{ item.cotizaciones.map((cotizacion) => cotizacion.descripcion) + '  ' }</center></td>
                            <td><center>{ item.cotizaciones.map((cotizacion) => cotizacion.estado) + '  ' }</center></td>
                            <td><center><a href={`/cotizaciones/detalles/${item.cotizaciones.map((cotizacion) => cotizacion.id) + '  '}`}>{item.cotizaciones.map((cotizacion) => cotizacion.precio) + '  '}</a></center></td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </Table>
                </div>
                </div>
      </Session>
    </Wrapper>
  )
}

export default QuotationPage
