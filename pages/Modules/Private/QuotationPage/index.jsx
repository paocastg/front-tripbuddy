import styles from './index.module.scss'
/* Components */
import {
  Row,
  Col,
  Card,
  CardBody,
  Container,
  Button,
  Table,
  InputGroupAddon,
  InputGroupText,
  FormGroup,
  InputGroup,
  Input,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, Tooltip
} from 'reactstrap'
import H2 from 'components/H2'
import moment from 'moment'

/* Layout */
import Session from 'layout/Session'
import Wrapper from 'layout/Wrapper'
import { API, HOST } from 'assets/Utils/Constants'
import axios from 'axios'
import React, { useState, useEffect } from 'react'

const QuotationPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [vacio, setVacio] = useState(false);

  const fetchUsers = async () => {
    const response = await axios.get(HOST + "/solicitud/list_cotizaciones/10");
    setData(response.data.solicitud);
    console.log(response.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  function onChange (pagination, filters, sorter, extra) {
    console.log('params', sorter, extra)
  }

  return (
    <Wrapper>
      <Session>
        <div className={styles.quotation}>
          <H2>Cotizaciones Abiertas</H2>
          <div style = {{overflow: 'scroll', width:'1400px'}}>
          <Table bordered style = {{width:'1400px'}} >
                  <thead>
                    <tr style={{ background: "#00B2E3", color: "#fff", fontFamily:"Geomanist-Regular",  height: '60px' }}>                      
                    <th>Agencia</th>
                      <th>Descripcion</th>
                      <th>Destinos</th>
                      <th>Precio</th>
                    </tr>
                    <tr><th></th><th></th></tr>
                    <tr style={{ background: "#2C2C2C", color: "#fff", fontFamily:"Geomanist-Regular",}}>                      
                      <th></th>
                      <th></th>
                      <th>Categoria</th>
                      <th>Actividades</th>
                      </tr>                 
                    {loading ? (
                      <tr className="text-center">
                        <td colSpan="8">
                          <div
                            className="spinner-border text-primary m-1"
                            role="status"
                          >
                            <span className="sr-only">Loading...</span>
                          </div>
                        </td>
                      </tr>
                    ) : vacio ? (
                      <tr className="text-center">
                        <td colSpan="8">No hay ningun registro</td>
                      </tr>
                    ) : (
                      data && data.map((item, index) => {
                        return (                 
                          <tr style={{                            
                            background: "#2C2C2C", fontFamily:"Geomanist-Regular",
                            color: "#fff",
                            cursor: "pointer",
                          }}>
                           <center><td>{item.destino.map((destinos) => destinos.nombre) + "  " }</td></center>
                          <th>
                          <th>{ "   / " + ((moment(item.fecha_fin).diff(moment(item.fecha_inicio),  'dias'))/(1000*60*60*24)) + " dias "  }</th>
                          <th>{ " / " + (item.numero_adultos+item.numero_adolescentes+item.numero_ninos) + " Personas "  }</th>
                          </th>                          
                          <th>{item.categoria.map((categorias) => categorias.nombre) + "  "  }</th>
                          <th>{item.actividad.map((actividads) => actividads.nombre) + " "}</th>             
                          </tr>
                      );
                      })
                    )}     
                    <tr><th></th></tr><br></br>
                  </thead>
                  <tbody>
                    {loading ? (
                      <tr className="text-center">
                        <td colSpan="8">
                          <div
                            className="spinner-border text-primary m-1"
                            role="status"
                          >
                            <span className="sr-only">Loading...</span>
                          </div>
                        </td>
                      </tr>
                    ) : vacio ? (
                      <tr className="text-center">
                        <td colSpan="8">No hay ningun registro</td>
                      </tr>
                    ) : (
                      data && data.map((item, index) => {
                        return (
                          <tr key={index} 
                          style={{
                            fontFamily:"Geomanist-Regular",
                            cursor: "pointer",
                          }}>
                            <td><center>{item.cotizaciones.map((cotizacion) => cotizacion.agencia)}</center></td>
                            <td><center>{item.cotizaciones.map((cotizacion) => cotizacion.descripcion)}</center></td>
                            <td><center>{item.cotizaciones.map((cotizacion) => cotizacion.estado)}</center></td>
                            <td><center><a href={`/cotizaciones/detalles/${item.cotizaciones.map((cotizacion) => cotizacion.id)}`}>{item.cotizaciones.map((cotizacion) => cotizacion.precio)}</a></center></td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </Table>
                </div>
                </div>
      </Session>
    </Wrapper>
  )
}

export default QuotationPage
