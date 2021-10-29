import styles from './index.module.scss'

/* layout */
import Wrapper from 'layout/Wrapper'

const AboutPage = () => {
  return (
    <Wrapper>
      <article className={`${styles.about} e-container`}>
        <h2 className={styles.about__title}>Acerca de nosotros</h2>
        <section className={styles.about__text}>
          <p>
            Trip Buddy permite a los viajeros vivir la experiencia que quieran,
            donde quieran. cuando quieran y como quieran. Pensamos que los
            paquetes de turismo masivo entorpecen gran parte de la experiencia
            del viajero, pero podría ser diferente, así es como:
          </p>
          <p>
            Ya sea que un viajero quiera planificar un viaje con todo incluido o
            simplemente una actividad específica, lo conectamos con los
            operadores de viajes adecuados automáticamente, para que pueda
            olvidarse de tener que conectar todos los puntos y concentrarse en
            tener un viaje increíble. Para los viajeros que no están seguros de
            qué hacer en un destino que están visitando o incluso a donde viajar
            en sus próximas vacaciones, contamos con un asistente virtual, que
            consiste en una colección de todas las ideas de viaje que se han
            solicitado en Trip Buddy, de manera que, a través de él, puedas
            elegir la idea de viaje que más te acomoda y poseerla.
          </p>
          <p>
            Trip Buddy, es una marca comercial de Adaptativa S.A.C., una empresa
            peruana. Operamos a nivel latinoamericano y contamos con aliados
            locales en ciertos países con el fin de cumplir con las regulaciones
            nacionales en cuanto a pagos a nuestros operadores de viajes
            registrados, verificación de identidad, entre otros requisitos. Para
            obtener más información sobre los Términos de uso de nuestros
            servicios y nuestras Políticas de privacidad (cómo manejamos los
            datos), visite los enlaces correspondientes en el pie de página.
          </p>
        </section>
      </article>
    </Wrapper>
  )
}

export default AboutPage
