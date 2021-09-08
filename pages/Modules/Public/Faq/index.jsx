import styles from './index.module.scss'

/* layout */
import Wrapper from 'layout/Wrapper'

const Faq = () => {
  return (
    <Wrapper>
      <article className={styles.faq}>
        <h2 className={styles.faq__title}>Preguntas frecuentes de los viajeros</h2>
        <section className={styles.faq__text}>
          <h3 className={styles.faq__subtitle}>Cómo funciona</h3>
          <p><b>¿Cómo creo una nueva solicitud de viaje?</b></p>
          <p>Puede crear una nueva solicitud de viaje yendo a la página principal del sitio web y haciendo clic en el botón &quot;Comienza tu viaje&quot;.</p>
          <br/>
          <p><b>¿Puedo solicitar solo una parte del viaje o algo específico que quiero en mi viaje?</b></p>
          <p>Puede crear una nueva solicitud de viaje yendo a la página principal del sitio web y haciendo clic en el botón &quot;Comienza tu viaje&quot;.</p>
          <br/>
          <p><b>¿Puedo crear un viaje con múltiples destinos?</b></p>
          <p>Por supuesto, cuando creas una nueva solicitud de viaje, puede agregar varios destinos uno tras otro.</p>
          <br/>
          <p><b>¿Quiénes son los operadores de viajes?</b></p>
          <p>Los operadores de viajes son especialistas en los destinos que deseas visitar. Seleccionamos cuidadosamente a los operadores mediante un proceso de autenticación.</p>
          <br/>
          <p><b>¿Cuánto tiempo después de crear una solicitud de viaje comenzaré a recibir ofertas?</b></p>
          <p>Comenzará a recibir ofertas inmediatamente después de crear una solicitud de viaje.</p>
          <br/>
          <p><b>¿Qué pasa si no recibo ninguna oferta en mi solicitud de viaje?</b></p>
          <p>Cada solicitud de viaje recibe ofertas de los operadores durante 7 días, después de los cuales cesan las ofertas. Si no ha recibido ninguna oferta, le sugerimos que cambie pequeños detalles en su solicitud de viaje, como modificar el presupuesto. En el raro caso de que aún no haya recibido ninguna oferta, puede comunicarse con nosotros y un asociado se comunicará con usted para ayudarlo.</p>
          <br/>
          <p><b>¿Cómo puedo cancelar mi viaje?</b></p>
          <p>Una vez que haya creado su solicitud de viaje, puede cancelar en cualquier momento. Tenga en cuenta que si cancela después de elegir un operador de viajes y pagar el viaje, se le cobrará el 50% del monto que pagó.</p>

          <h3 className={styles.faq__subtitle}>Pagos</h3>

          <p><b>¿Cuándo debo pagar?</b></p>
          <p>Puedes pagar una vez hayas elegido el operador de viajes con el que te gustaría que tu viaje se cumpliera. Puedes pagar online con paypal, cualquier tarjeta de crédito o débito.</p>
          <br/>
          <p><b>¿Puedo pagar a plazos mi viaje?</b></p>
          <p>Sí, también puedes elegir cuántas cuotas y la cantidad que te gustaría pagar en cada cuota de tu viaje.</p>
          <br/>
          <p><b>Problemas con el pago</b></p>
          <p>Si tiene algún problema al pagar su viaje, comuníquese con nosotros y lo atenderemos.</p>

          <h3 className={styles.faq__subtitle}>Seguridad</h3>

          <p><b>¿Con quién me comunico en caso de emergencia?</b></p>
          <p>La seguridad de los viajeros es nuestra prioridad número uno. En caso de emergencia, comuníquese con nosotros de inmediato y un representante lo asistirá.</p>

          <h3 className={styles.faq__subtitle}>Perfil e inicio de sesión</h3>

          <p><b>No recuerdo mi identificación de usuario o contraseña</b></p>
          <p>Este problema no ocurrirá, al iniciar sesión con Google o Facebook estos serán los mismos que usa para registrarse en estas plataformas.</p>
          <br/>
          <p><b>¿Cómo puedo cambiar mi perfil?</b></p>
          <p>Puede actualizar o cambiar la información de su perfil haciendo clic en la flecha al costado de la imagen de su perfil e ingresando a &quot;Mi perfil&quot;.</p>
        </section>
      </article>
    </Wrapper>
  )
}

export default Faq
