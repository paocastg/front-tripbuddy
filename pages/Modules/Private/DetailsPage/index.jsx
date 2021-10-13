import styles from './index.module.scss'
import Session from 'layout/Session'
import Wrapper from 'layout/Wrapper'
import { useRouter } from 'next/router'
import { Timeline, Tabs, Result, Spin } from 'antd'

import DetailsMap from 'components/DetailsMap'
import { HOST, MAPS_KEY } from 'assets/Utils/Constants'
import DetailsCardSection from 'sections/Private/Details/DetailsCardSection'
import { useEffect, useState } from 'react'
import axios from 'axios'
import DayToDaySection from 'sections/Private/Details/DayToDaySection'

const { TabPane } = Tabs

const DetailsPage = () => {
  const [dbDetails, setDbDetails] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

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
    setLoading(true)
    const getQuotationDetails = async () => {
      try {
        const url = `${HOST}/solicitud/list_detallecotizacion/${idParams(
          router
        )}`
        const res = await axios.get(url)
        const json = await res.data
        if (!json.detalle || !json.solicitud) {
          throw new Error()
        }
        setDbDetails(json)
        setLoading(false)
      } catch (err) {
        setError({
          err: true,
          status: err.response?.status || '404',
          statusText: err.message || 'Ocurrio un error'
        })
        setLoading(false)
      }
    }
    getQuotationDetails()
  }, [])

  return (
    <Wrapper>
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
                </div>
              </aside>
            </article>
            <section className={styles.section2}>
              <Tabs>
                <TabPane tab="Ruta" key="1">
                  <section className={styles.section3}>
                    {/* Section DestinyDetails */}
                    <div className={styles.section3__first}>
                      <Timeline>
                        <Timeline.Item>
                          Lima - 2 dias
                          <br />
                          <br />
                        </Timeline.Item>
                        <Timeline.Item>
                          Cusco - 6 dias
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                        </Timeline.Item>
                        <Timeline.Item>
                          Arequipa - 3 dias
                          <br />
                          <br />
                          <br />
                        </Timeline.Item>
                        <Timeline.Item>
                          Lima - 1 dias
                          <br />
                        </Timeline.Item>
                      </Timeline>
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
                      dbDetails.detalle.map((el) => (
                        <DetailsCardSection key={el.id} el={el} />
                      ))}
                  </div>
                  <div className={styles.actions}>
                    <a href="/cotizaciones" className={styles.actions__button}>
                      VOLVER
                    </a>
                  </div>
                </TabPane>
                <TabPane tab="Día a Día" key="2">
                  <DayToDaySection/>
                  <DayToDaySection/>
                </TabPane>
              </Tabs>
            </section>
          </>
        )}
      </Session>
    </Wrapper>
  )
}

export default DetailsPage
