import styles from './index.module.scss'
import Session from 'layout/Session'
import Wrapper from 'layout/Wrapper'
import { useRouter } from 'next/router'
import { Timeline, Tabs } from 'antd'
import DetailsMap from 'components/DetailsMap'
import { MAPS_KEY } from 'assets/Utils/Constants'
import DetailsCardSection from 'sections/Private/Details/DetailsCardSection'

const { TabPane } = Tabs

const DetailsPage = () => {
  const router = useRouter()

  const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${MAPS_KEY}`
  /*
   * Obtener el id de la url con useRouter
   */
  const idParams = (router) => {
    const idSplitted = router.asPath.split('/')
    return idSplitted[3]
  }

  /*
   * Obtener los detalles de cotizacion de la API de detalles
   */
  const getApiDetails = () => {
    const id = idParams(router)
    console.log('Llamando al detalle de cotizacion con el id:', id)
  }
  getApiDetails()
  return (
    <Wrapper>
      <Session>
        <article
          className={styles.heroImage}
          style={{ backgroundImage: 'url("/banner-interno.png")' }}
        >
          <aside className={styles.heroImage__opacity}>
            <div>
              {/* content */}
              <h2 className={styles.heroImage__title}>12 días en Perú</h2>
              <p className={styles.heroImage__paragraph}>
                Abril 15, 2021 - Abril 26, 2021
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
                    containerElement={<div style={{ height: '350px', width: 'auto' }} />}
                    mapElement={<div style={{ height: '100%', width: '100%' }} />}
                    loadingElement={<p>Cargando</p>}
                  />
                  {/* Component DetailsCalendar */}
                </div>
              </section>
              <div className={styles.section4}>
                <DetailsCardSection />
              </div>
              <div className={styles.actions}>
                <a href="/cotizaciones" className={styles.actions__button}>
                  VOLVER
                </a>
              </div>
            </TabPane>
            <TabPane tab="Día a Día" key="2">
              <h2>Proximamente ...</h2>
            </TabPane>
          </Tabs>
        </section>
      </Session>
    </Wrapper>
  )
}

export default DetailsPage
