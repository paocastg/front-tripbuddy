import styles from './index.module.scss'

/* layout */
import Wrapper from 'layout/Wrapper'

const CookiePolicies = () => {
  return (
    <Wrapper>
      <article className={styles.cookiePolicies}>
        <section className={styles.cookiePolicies__text}>
          <h2 className={styles.cookiePolicies__title}>Políticas de Cookies</h2>
            <p>Fecha de última actualización: 3 de Julio de 2021</p>
            <p>Al igual que muchos propietarios u operadores de sitios web, utilizamos herramientas automatizadas de recopilación de datos, como cookies y balizas web, para personalizar y mejorar su experiencia cuando utiliza nuestros Servicios. Lea esta Política de cookies para comprender qué es una cookie, cómo las usamos, cómo algunos terceros con los que nos asociamos pueden usar cookies en nuestros servicios y qué opciones tiene con respecto a nuestro uso de cookies. Además, tenga en cuenta que, a menos que definamos un término en esta Política de cookies, todos los términos en mayúscula utilizados en esta Política de cookies tienen el mismo significado que en nuestros Términos de servicio. Por lo tanto, asegúrese de haber leído y comprendido nuestros Términos de servicio.</p>
            <p>Las &quot;balizas web&quot; (también conocidas como errores web, etiquetas de píxeles o GIF transparentes) son gráficos diminutos con un identificador único que a menudo se utilizan en combinación con cookies. Las balizas web se incluyen en nuestros Servicios para varios propósitos, que incluyen entregar o comunicarse con Cookies, rastrear y medir el desempeño de nuestros Servicios, monitorear cuántos visitantes ven nuestros Servicios y monitorear la efectividad de nuestra publicidad. A diferencia de las cookies, que se almacenan en el dispositivo del usuario, las balizas web suelen estar incrustadas de forma invisible en las páginas web (o en un correo electrónico). Además, a diferencia de las cookies, no puede rechazar las balizas web.</p>

            <h2 className={styles.cookiePolicies__title}>Uso de cookies</h2>
            <p>Nosotros o uno de nuestros socios publicitarios podemos colocar una o más Cookies en su dispositivo cuando accede a una página que aloja nuestros Servicios. Podemos utilizar Cookies para monitorear el uso agregado y el enrutamiento del tráfico web en nuestros Servicios y para personalizar y mejorar nuestros Servicios, incluso al: (a) recordar su información para que no tenga que volver a ingresarla durante su visita o la próxima vez que lo haga acceder a nuestros Servicios y (b) monitorear las métricas de uso del sitio agregadas, como el número total de visitantes, las páginas visitadas y cómo los usuarios navegan por los Servicios.</p>

            <h2 className={styles.cookiePolicies__title}>Anunciantes de terceros</h2>
            <p>Utilizamos empresas de publicidad de terceros para publicar anuncios y recopilar información mediante cookies o balizas web cuando visita un sitio web que aloja nuestros Servicios. Estas empresas no tendrán acceso ni utilizarán ninguna información de identificación personal, pero utilizarán otra información no personal sobre sus visitas a nuestros Servicios y otros sitios web para fines legalmente permitidos, incluido el suministro de anuncios en nuestros Servicios, en otros sitios web y en otros medios de comunicación relacionados con bienes y servicios que puedan ser de su interés. </p>

            <h2 className={styles.cookiePolicies__title}>Analítica</h2>
            <p>Usamos Google Analytics, un servicio de análisis web de Google Inc. (&quot;Google&quot;). Google Analytics utiliza cookies para identificar la frecuencia de uso de ciertas áreas de nuestros sitios web y para identificar preferencias. Google utilizará esta información para analizar su uso del sitio web, compilar informes sobre la actividad del sitio web para nosotros y realizar otros servicios asociados con el uso del sitio web y el uso de Internet. Google también puede transmitir esta información a terceros cuando así lo requiera la ley o en la medida en que terceros procesen estos datos en nombre de Google.</p>
            <p>Puede desactivar Google Analytics utilizando un complemento de navegador (para ciertos tipos de navegador en el escritorio) si no desea que se realice el análisis del sitio web. Puede descargar el complemento aquí: <a href="http://tools.google.com/dlpage/gaoptout">http://tools.google.com/dlpage/gaoptout</a>.</p>
            <p>Este complemento almacena información de &quot;exclusión voluntaria&quot; en su dispositivo que sirve para hacer coincidir su desactivación de Google Analytics. Tenga en cuenta que este tipo de &quot;exclusión voluntaria&quot; solo conduce a la desactivación de Google Analytics para el dispositivo y el navegador desde el que se activó la exclusión voluntaria. Además, es posible que deba reactivarlo si elimina las cookies de su dispositivo.</p>

            <h2 className={styles.cookiePolicies__title}>Tu elección</h2>
            <p>Aunque la mayoría de los navegadores aceptan cookies automáticamente, puede cambiar las opciones de su navegador para dejar de aceptar cookies automáticamente o para avisarle antes de aceptarlas. Para conocer otras formas de controlar o eliminar las cookies, visite www.aboutcookies.org. Sin embargo, tenga en cuenta que si no acepta las cookies, es posible que no pueda acceder a todas las funciones que ofrecen nuestros Servicios y es posible que deba ajustar algunas de sus preferencias cada vez que visite un sitio web donde se alojan nuestros Servicios. </p>
</section>
      </article>
    </Wrapper>
  )
}

export default CookiePolicies
