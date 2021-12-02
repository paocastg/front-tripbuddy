import styles from './index.module.scss'
import Session from 'layout/Session'
import Wrapper from 'layout/Wrapper'
import { useRouter } from 'next/router'
import { Tabs, Result, Spin, Anchor, Alert, Popover } from 'antd'
// import { Button, Modal, Form, Select, Input, InputNumber, DatePicker, Row, Col, Divider, Popover,  } from 'antd'

import DetailsMap from 'components/DetailsMap'
import { HOST, MAPS_KEY, API } from 'assets/Utils/Constants'
import DetailsCardSection from 'sections/Private/Details/DetailsCardSection'
import { useEffect, useState } from 'react'
import axios from 'axios'
import DayToDaySection from 'sections/Private/Details/DayToDaySection'
import TimeLineSection from 'sections/Private/Details/TimeLineSection'
import { PayPalButton } from 'react-paypal-button-v2'
const { TabPane } = Tabs
const { Link } = Anchor

const DetailsPage = () => {
  const [dbDetails, setDbDetails] = useState(null)
  const [dbDayToDay, setDbDayToDay] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState('')
  const [activeKey, setActiveKey] = useState('1')

  const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${MAPS_KEY}`
  /*
   * Obtener el id de la url con el hook useRouter
   */
  const router = useRouter()
  const idParams = (router) => {
    const idSplitted = router.asPath.split('/')
    return idSplitted[3]
  }

  const endDate = dbDetails && dbDetails.solicitud[0].fecha_fin
  const startDate = dbDetails && dbDetails.solicitud[0].fecha_inicio

  /*
   * Transforma una fecha de la forma '21-09-29' a 'Septiembre 29, 2021'
   */
  const transformDate = (date) => {
    if (date === '') {
      return '...'
    }
    const newDate = new Date(date)
    newDate.setMinutes(newDate.getMinutes() + newDate.getTimezoneOffset())
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    const dateText = newDate.toLocaleDateString('es-ES', options)
    const dateSplited = dateText.split(' de ')
    return `${dateSplited[1].charAt(0).toUpperCase()}${dateSplited[1].slice(
      1
    )} ${dateSplited[0]}, ${dateSplited[2]}`
  }
  /*
   * Calcula el intervalo en dias entre dos fechas
   * Acepta como parametros '21-09-29' y '21-09-30'
   * retorna 1
   */
  const intervalDate = (start, end) => {
    if (start === '' || end === '') {
      return '--'
    }
    const startDate = new Date(start)
    startDate.setMinutes(
      startDate.getMinutes() + startDate.getTimezoneOffset()
    )
    const endDate = new Date(end)
    endDate.setMinutes(endDate.getMinutes() + endDate.getTimezoneOffset())
    const resta = endDate.getTime() - startDate.getTime()
    if (resta < 0) {
      return '--'
    }
    return Math.round(resta / (1000 * 60 * 60 * 24))
  }
  useEffect(() => {
    /*
     * Obtener los detalles de cotizacion de la API de detalles
     */
    console.log('yep use effect')
    setLoading(true)
    const getQuotationDetails = async () => {
      try {
        const url = `${HOST}/solicitud/list_detallecotizacion/${idParams(
          router
        )}`
        console.log('yep url: ', url)
        const res = await axios.get(url)
        const json = await res.data
        console.log('yep json: ', json)
        if (!json.detalles_cotizacion || !json.solicitud) {
          throw new Error()
        }
        setDbDetails(json)
        setLoading(false)
      } catch (err) {
        console.log('Uups error: ', err)
        setError({
          err: true,
          status: err.response?.status || '404',
          statusText: err.message || 'Ocurrio un error'
        })
        setLoading(false)
      }
    }
    const getDayToDay = async () => {
      try {
        // define url api
        const url = `${HOST}/solicitud/list_dia_a_dia/${idParams(router)}`
        // make a query get to api
        const res = await axios.get(url)
        const json = await res.data
        console.log('yep day to day: ', json)
        setDbDayToDay(json)
      } catch (err) {
        console.log('Uups err: ', err)
      }
    }
    getQuotationDetails()
    getDayToDay()
  }, [])

  const handleTabs = (activityKey) => {
    // console.log('yep activity key: ', activityKey)
    setActiveKey(activityKey)
  }
  const paypalGuardar = async () => {
    const user = Auth.getSession().usuario.id
    const config = {
      // headers: { Authorization: `Token ${token}` },d4e97b7df5a2785717f9889d9c870525d3222f1a
       headers: { Authorization: `Token d4e97b7df5a2785717f9889d9c870525d3222f1a` },
    }
    const usuario = Auth.getSession().usuario
    console.log(usuario)
    const response = await axios.post(API + '/pago/', { 
    estado: "PAGADO",//ESTADO VACIO
    total_de_la_compra: pay.data.precio,
    nombre_cliente: usuario.nombres,
    apellido_cliente: usuario.apellidos,
    correo_cliente: usuario.email,
    cotizacion: pay.data.id //pay.data.id //nombre de COTIZACION DESCRIPCION
  }, config)
  }
  console.log(data)
  const [ list, setList] = useState({ idLis: '' })
  const datosPaypal = (ids) =>{
    setList({ ...list, idLis: idParams(router)})
    // console.log(data)
    // const id = Number(idParams(router))
    data && data.map((index) => 
    index.cotizaciones.map((lista) => {
      if( lista.id === ids && lista.id > 0 ){
        console.log(lista.precio)
        idPaypal(lista.id, lista.precio, lista.descripcion)
        console.log(lista.id)
      }
    }))
  }
  console.log(list)
  const [paypal, setPaypal] = useState({ precio: '', descripcion: '', id: '' })
  const idPaypal = (id, precio, descripcion) => {
      console.log(precio)
      setPaypal({ ...paypal, precio: precio, descripcion: descripcion, id: id})
      console.log(idParams(router))
  }
  console.log(paypal)
  useEffect(() => {
    fetchUsers()
  }, [])
  // ^TS$B8fr
  const fetchUsers = async () => {
    const user = Auth.getSession().usuario.id
    const miToken = Auth.getSession().token
    console.log(miToken)
    const config = {
      // headers: { Authorization: `Token ${token}` },d4e97b7df5a2785717f9889d9c870525d3222f1a
       headers: { Authorization: `Token d4e97b7df5a2785717f9889d9c870525d3222f1a` },
    }
    const response = await axios.get(HOST + '/solicitud/list_cotizaciones/' + user, config)
    setCliente(response.data.solicitud)
    setData(response.data.solicitud.map((item) =>{
      item.cotizaciones.map((lista) => {
        console.log(lista)
        probando(lista)
       if( lista.id === idParams(router) ){ 
        console.log(lista)
        console.log(response.data.solicitud)
          return lista
        }
      })
    }))
    //datosPaypal(idParams(router))
  }
  const [ pay, setPay ] = useState('')
  const [ cliente, setCliente ] = useState('')
  const preciosss = idParams(router)  
  const probando = (data) =>{
    console.log(data)
    if( data.id === Number(preciosss) ){ 
       console.log(data)
       setPay({ data })
      }
  }
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: pay.data.precio
          },
          description: pay.data.descripcion//'Compra en Test App'
        }
      ]
    });
  };
  const redirec = () => {
    // return <Redirect to="/cotizaciones" />;
    return (<a href={ `/cotizaciones` }>{'  '}</a>)
  }
  const onApprove = (data, actions) => {
    console.log(actions.order)
    console.log(data) 
    if(data){
      MySwal.fire({
        allowOutsideClick: false,
        allowEscapeKey: false,
        title: 'Transacción completada exitosamente...Nro. de transacción: ' + data.orderID + '   recibirá un correo con los detalles',
        onOpen: async () => {
          MySwal.showLoading();
          MySwal.close();
          paypalGuardar();
          }
      });
    // paypalGuardar();
    redirec();
    return actions.order.capture();
  } else {
    MySwal.fire({
      allowOutsideClick: false,
      allowEscapeKey: false,
      title: 'Transaccion fallida...',
      onOpen: async () => {
        MySwal.showLoading();
        MySwal.close();
        }
    });
  }
  };
  return (
    <Wrapper>
      <NextSeo
        title="Detalles"
        description="A short description goes here."
      />
      <Session>
        {loading && (
          <div
            style={{ margin: '30px', marginBottom: '30%', textAlign: 'center' }}
          >
            <Spin size="large" />
          </div>
        )}
        {error && (
          <Result
            status={error.status || '404'}
            title={error.status || '404'}
            subTitle="Sorry, the page you visited does not exist."
            extra={
              <a type="primary" href="/cotizaciones">
                Back Home
              </a>
            }
          />
        )}
        {dbDetails && (
          <>
            <article
              className={styles.heroImage}
              style={{ backgroundImage: 'url("/banner-interno.png")' }}
            >
              <aside className={styles.heroImage__opacity}>
                <div>
                  {/* content */}
                  <h2 className={styles.heroImage__title}>
                    {intervalDate(startDate, endDate)} días en Perú
                  </h2>
                  <p className={styles.heroImage__paragraph}>
                    {transformDate(startDate)} - {transformDate(endDate)}
                  </p>
                  <div style={{ width: "200px", margin: "0 auto" }}>
                  
                  <PayPalButton 
                    createOrder={(data, actions) => createOrder(data, actions)}
                    onApprove={(data, actions) => onApprove(data, actions)}
                    options={{ clientId: "AZSpsDSNwuRjnVMD68Pfmd0QP63XacmdREIRJIhYf4Z19YAfM1FTmsnpZyAZuPHf_x6cODsmBJQsj6Vi" }} />
                    {/* <PayPalButton
                      
                      createOrder={(data, actions) => {
                        return actions.order.create({
                          purchase_units: [
                            {
                              amount: {
                                currency_code: "USD",
                                value: pay.data.precio
                              }
                            }
                          ],
                          application_context: {
                            shipping_preference: "NO_SHIPPING" // default is "GET_FROM_FILE"
                          }
                        });
                      }}
                      onApprove={(details, data) => {
                        // alert("Transaction completed by " + details.payer.name.given_name);
                        // <Popover
                        // content={<Alert message="Transacción completada " type="warning" showIcon/>}
                        // >{ data.orderID }
                        // </Popover>
              
                        // OPTIONAL: Call your server to save the transaction
                        
                        return fetch("/paypal-transaction-complete", {
                          method: "post",
                          body: JSON.stringify({
                            orderId: data.orderID
                          }),                          
                          paypalGuardar
                        });
                      }}
                      // ={(data, actions) => {
                      //   return actions.order.capture().then(function(details) {
                      //     alert(
                      //       "Transaction completed by " + details.payer.name.given_name
                      //     );
                      //   // onClick={paypalGuardar}
                      //   return fetch("/paypal-transaction-complete", {
                      //       method: "post",
                      //       body: JSON.stringify({
                      //         orderID: data.orderID
                      //       })
                      //     })
                      //   });
                      // }}
                      options={{
                        clientId: "AZSpsDSNwuRjnVMD68Pfmd0QP63XacmdREIRJIhYf4Z19YAfM1FTmsnpZyAZuPHf_x6cODsmBJQsj6Vi"
                      }}
                    /> */}
                  </div>
                </div>
              </aside>
            </article>
            <section className={`${styles.section2} e-container`}>
              <Tabs onChange={handleTabs} activeKey={activeKey}>
                <TabPane tab="Ruta" key="1">
                  <section className={styles.section3}>
                    {/* Section DestinyDetails */}
                    <div className={styles.section3__first}>
                      <TimeLineSection items={dbDetails.detalles_cotizacion} />
                    </div>
                    {/* Section MapDetails */}
                    <div className={styles.section3__second}>
                      {/* Component DetailsMap */}
                      <DetailsMap
                        destinos={[]}
                        googleMapURL={mapURL}
                        containerElement={
                          <div style={{ height: '350px', width: 'auto' }} />
                        }
                        mapElement={
                          <div style={{ height: '100%', width: '100%' }} />
                        }
                        loadingElement={<p>Cargando</p>}
                      />
                      {/* Component DetailsCalendar */}
                    </div>
                  </section>
                  <div className={styles.section4}>
                    {dbDetails &&
                      dbDetails.detalles_cotizacion.map((el) => (
                        <DetailsCardSection
                          key={el.destino}
                          el={el}
                          setActiveKey={setActiveKey}
                        />
                      ))}
                  </div>
                </TabPane>
                <TabPane tab="Día a Día" key="2">
                  <div className={styles.container__dayToDay}>
                    <Anchor>
                      <h2>Mayo</h2>
                      <Link href="#15" title="15" />
                      <Link href="#16" title="16" />
                      <Link href="#17" title="17" />
                    </Anchor>
                    <div className={styles.container__day}>
                      {dbDayToDay &&
                        dbDayToDay.dia_a_dia.map((el, index) => (
                          <DayToDaySection key={index} el={el} />
                        ))}
                    </div>
                  </div>
                </TabPane>
              </Tabs>
              <div className={styles.actions}>
                <a href="/cotizaciones" className={styles.actions__button}>
                  VOLVER
                </a>
              </div>
            </section>
          </>
        )}
      </Session>
    </Wrapper>
  )
}

export default DetailsPage
