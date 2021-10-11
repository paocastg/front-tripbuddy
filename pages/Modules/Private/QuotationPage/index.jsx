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
import Button from 'components/Button'

const QuotationPage = () => {
  const [data, setData] = useState([])
  const [coti, setCoti] = useState('')
  const fetchUsers = async () => {
    const user = Auth.getSession().usuario.id
    const response = await axios.get(HOST + '/solicitud/list_cotizaciones/'+ user)
    setData(response.data.solicitud)
  }  
  const Pruebados = () =>(                   
    <tbody>
      {
    data && data.map((index) => 
    index.cotizaciones.map((lista) => 
    { if( lista.solicitud === 7 && lista.solicitud > 0 ){
      console.log(lista.precio)
        return (
          <tr key={index} style={{ fontFamily: 'Geomanist-Regular', cursor: 'pointer' }}>
          <td><center>{ lista.agencia + '  ' }</center></td>
          <td><center>{ lista.descripcion + '  ' }</center></td>
          <td><center>{ lista.estado + '  ' }</center></td>
          <td><center><a href={`/cotizaciones/detalles/${ lista.id + '  '}`}>{ lista.precio + '  '}</a></center></td>
          
          </tr>
         )
        } else{
          <h1> no existe cotizaciones</h1>
        }
    })
  )
    }
  </tbody>)
  useEffect(() => {
    fetchUsers()
  }, [])
  const esconder = () => {
    document.getElementById('solicitud').style.display = 'none'
    document.getElementById('cotizaciones').style.display = 'block'
  }
  const atras = () => {
    document.getElementById('solicitud').style.display = 'block'
    document.getElementById('cotizaciones').style.display = 'none'
  }

  return (
    <Wrapper>
      <Session>
        <div className={styles.quotation}>
          <H2>Cotizaciones Abiertas</H2>
          <div id='solicitud'>
          <div style = {{ overflow: 'scroll' }}>
          <Table style = {{ width: '1400px' }}>
                  <thead>
                    <tr style={{ background: '#00B2E3', color: '#fff', fontFamily: 'Geomanist-Regular', height: '60px' }}>
                      <th>Agencia</th>
                      <th>Descripcion</th>
                      <th>Destinos</th>
                      <th>Precio</th>
                      <th></th>
                    </tr><br></br>
                    <tr style={{ background: '#2C2C2C', color: '#fff', fontFamily: 'Geomanist-Regular', width: '1400px' }}>
                      <th></th>
                      <th></th>
                      <th>Categoria</th>
                      <th>Actividades</th>
                      <th>Solicitud</th>
                      </tr>
                  </thead>
                  <tbody>
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
                          <td>{ '   / ' + ((moment(item.fecha_fin).diff(moment(item.fecha_inicio), 'dias')) / (1000 * 60 * 60 * 24)) + 'dias' }</td>
                          <td>{ ' / ' + (item.numero_adultos + item.numero_adolescentes + item.numero_ninos) + ' Personas ' }</td>
                          </th>
                          <td>{ item.categoria.map((categorias) => categorias.nombre) + '  ' }</td>
                          <td>{ item.actividad.map((actividads) => actividads.nombre) + ' ' }</td>
                          <td>{<button style={{ background: '#2C2C2C' }} onClick={esconder}>{ item.cotizaciones.length + ' ' }</button>}</td>
                          <br></br></tr>

                        )
                      })
                    }
                  </tbody>
                </Table>
              </div>
          </div>
          <div id='cotizaciones' style = {{display: 'none'}}>              
          <div style = {{ overflow: 'scroll' }}>
          <Table style = {{ width: '1400px' }}>
                  <thead>
                    <tr style={{ background: '#00B2E3', color: '#fff', fontFamily: 'Geomanist-Regular', height: '60px' }}>
                      <th>Agencia</th>
                      <th>Descripcion</th>
                      <th>Destinos</th>
                      <th>Precio</th>
                      <th></th>
                    </tr><br></br>
                  </thead>
                    <Pruebados></Pruebados>
                </Table>
                </div><br></br>
                <center><div>
                  <Button onClick={atras}>Atrás</Button>
                </div></center>
            </div>
          </div>
      </Session>
    </Wrapper>
  )
}

export default QuotationPage
