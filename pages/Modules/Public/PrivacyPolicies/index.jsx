import styles from './index.module.scss'

/* layout */
import Wrapper from 'layout/Wrapper'
import { NextSeo } from 'next-seo'

const PrivacyPolicies = () => {
  return (
    <Wrapper>
      <NextSeo
        title="Politicas de Privacidad"
        description="A short description goes here."
      />
      <article className={`${styles.privacyPolicies} e-container`}>
        <section className={styles.privacyPolicies__text}>
          <h2 className={styles.privacyPolicies__title}>
            Políticas de privacidad
          </h2>
          <p>
            Política de privacidad de Trip Buddy
            <br />
            Fecha de la última actualización: 3 de julio de 2021
          </p>
          <p>
            Su privacidad es importante para nosotros. Ha depositado su
            confianza en nosotros al utilizar nuestros servicios y valoramos esa
            confianza. Eso significa que estamos comprometidos a proteger y
            salvaguardar cualquier dato personal que nos proporcione. Actuamos
            en interés de nuestros clientes y somos transparentes sobre el
            procesamiento de sus datos personales. Esta Política de privacidad
            explica nuestras prácticas con respecto a la recopilación, el uso y
            la divulgación de los Datos personales que recibimos a través de
            nuestros Servicios. Por favor, léalo atentamente y ¡Feliz viaje!
          </p>
          <br />
          <h3 className={styles.privacyPolicies__subtitle}>
            Recopilación y uso de datos personales
          </h3>
          <p>
            Nuestros objetivos principales al recopilar información son
            proporcionar y mejorar nuestros Servicios, administrar su uso de los
            Servicios (incluida su Cuenta, si es titular de una Cuenta) y
            permitirle disfrutar y navegar fácilmente por nuestros Servicios.
          </p>
          <p>
            Información de la cuenta. Si crea una cuenta, recopilaremos ciertos
            datos personales que pueden usarse para identificarlo, como su
            nombre y dirección de correo electrónico (&quot;PII&quot;). Si crea
            una cuenta con sus credenciales de inicio de sesión de una de sus
            cuentas SNS u otras cuentas, podremos acceder y recopilar su nombre,
            dirección de correo electrónico, información de perfil y otra PII
            que su configuración de privacidad en la cuenta SNS u otra Las
            cuentas nos permiten acceder. Estos datos personales se utilizan
            para garantizar la seguridad y privacidad de su información. Sus
            datos personales también pueden usarse para brindarle una
            experiencia más personalizada al usar nuestros Servicios, por
            ejemplo.
          </p>
          <p>
            Información de viaje. Si utiliza nuestros Servicios, puede
            proporcionar Datos personales sobre sus planes de viaje, horarios,
            preferencias, reservas, notas, archivos adjuntos y otra información
            similar. Además, puede proporcionar datos personales sobre otros
            usuarios que viajen con usted. Usamos estos datos personales para
            brindarle mejores servicios a usted y a quienes viajan con usted.
            Esto puede incluir el envío de correos electrónicos, notificaciones,
            mensajes, etc. que contengan recordatorios, anuncios y ofertas
            relevantes para su viaje.
          </p>
          <p>
            Datos personales recopilados mediante cookies y otras tecnologías
            web. Al igual que muchos propietarios y operadores de sitios web,
            utilizamos herramientas de recopilación de datos automatizadas, como
            cookies y balizas web, para recopilar ciertos datos personales. Para
            obtener información adicional sobre nuestro uso de cookies y otras
            tecnologías web, como balizas web, consulte nuestra Política de
            cookies (
            <a href="https://www.gotripbuddy.com/politicas-de-cookies.html">
              https://www.gotripbuddy.com/politicas-de-cookies
            </a>
            ).
          </p>
          <p>
            Datos personales relacionados con el uso de los servicios. Nuestros
            servidores registran automáticamente cierta información sobre cómo
            una persona usa nuestros Servicios (nos referimos a esta información
            como &quot;Datos de registro&quot;), incluidos tanto los titulares
            de cuentas como los no titulares de cuentas (ya sea, un
            &quot;Usuario&quot;). Los Datos de registro pueden incluir Datos
            personales como la dirección de Protocolo de Internet (IP) del
            Usuario, el tipo de navegador, el sistema operativo, la página web
            que un Usuario estaba visitando antes de acceder a nuestros
            Servicios, las páginas o características de nuestros Servicios a los
            que un Usuario navegó y la tiempo dedicado a esas páginas o
            características, qué sitio web de terceros alojó los Servicios que
            le brindaron a un Usuario los Servicios, términos de búsqueda,
            información que ingresa un Usuario relacionada con la planificación
            de su viaje, ajustes realizados en el itinerario existente, los
            enlaces en nuestros Servicios que un Usuario clicked, clickstream,
            reproducción de la sesión y estadísticas. Usamos Datos de registro
            para administrar los Servicios y analizamos (y podemos contratar a
            terceros para analizar) Datos de registro para mejorar, personalizar
            y mejorar nuestros Servicios al expandir sus características y
            funcionalidad y adaptarlos a las necesidades y preferencias de
            nuestros Usuarios. Podemos utilizar la dirección IP de una persona
            para generar información agregada y no identificable sobre cómo se
            utilizan nuestros Servicios. Podemos usarlo para mejorar su
            experiencia con el sitio, por ejemplo, para determinar
            automáticamente la ciudad de inicio y finalización de su viaje.
          </p>
          <p>
            Datos personales enviados por su dispositivo móvil. Recopilamos
            cierta información que su dispositivo móvil envía cuando utiliza
            nuestros Servicios, como un identificador de dispositivo,
            configuraciones de usuario y el sistema operativo de su dispositivo,
            así como información sobre su uso de nuestros Servicios. Dichos
            datos personales pueden usarse, por ejemplo, para brindar una
            experiencia optimizada para su dispositivo.
          </p>
          <p>
            Información sobre la ubicación. Cuando utiliza nuestros Servicios,
            podemos recopilar y almacenar información sobre su ubicación
            convirtiendo su dirección IP en una ubicación geográfica aproximada
            o accediendo a las coordenadas GPS de su dispositivo o ubicación
            aproximada si habilita los servicios de ubicación en su dispositivo.
            Podemos utilizar dichos Datos personales para mejorar y personalizar
            nuestros Servicios para usted, por ejemplo, determinando
            automáticamente la mejor ruta para su viaje.
          </p>
          <p>
            Datos personales que nos proporciona sobre otros usuarios. Puede
            proporcionarnos datos personales sobre otros usuarios, por ejemplo,
            otros viajeros que están planificando el viaje con usted. Debemos
            señalar que es su responsabilidad asegurarse de que los Usuarios
            sobre los que ha proporcionado información sepan que lo ha hecho y
            han aceptado nuestros Términos de uso (
            <a href="https://www.gotripbuddy.com/terminos-de-uso.html">
              https://www.gotripbuddy.com/terminos-de-uso.html
            </a>
            ) y esta Política de privacidad.
          </p>
          <p>
            Otros usos. Además de los usos anteriores, podemos utilizar sus
            Datos personales para brindar una experiencia más personalizada,
            solicitar su opinión, para garantizar la calidad, para la atención
            al cliente, para prevenir fraudes y estafas, y para garantizar el
            funcionamiento adecuado de nuestros Servicios.
          </p>
          <br />
          <h3 className={styles.privacyPolicies__subtitle}>
            Datos personales que compartimos con terceros
          </h3>
          <p>
            No alquilamos ni vendemos su PII. No compartiremos ningún dato
            personal que hayamos recopilado de usted o sobre usted, excepto como
            se describe a continuación:
          </p>
          <p>
            Datos personales compartidos con nuestros proveedores de servicios.
            Podemos contratar proveedores de servicios de terceros para que
            trabajen con nosotros para administrar y proporcionar los Servicios.
            Estos proveedores de servicios externos nos han informado a nosotros
            o al público en general que aplican las medidas de seguridad que
            consideran adecuadas para la protección de los Datos Personales
            dentro de su sistema, o tienen una reputación general de aplicar
            tales medidas. Un ejemplo de esto es si solicita que un agente de
            viajes se comunique con usted o le brinde asistencia con la reserva.
          </p>
          <p>
            Datos personales compartidos con terceros para publicidad e
            investigación. Podemos compartir datos personales que no sean PII
            con terceros (por ejemplo, Google Analytics, plataformas de
            administración de datos), para investigación y análisis de la
            industria, perfiles demográficos, publicidad, ventas, marketing,
            estudios de casos, análisis, recopilación de comentarios, monitoreo
            y otros fines legalmente permitidos. Para obtener información
            adicional sobre nuestra divulgación de información a empresas de
            publicidad de terceros, consulte nuestra Política de cookies (
            <a href="https://www.gotripbuddy.com/politicas-de-cookies.html">
              https://www.gotripbuddy.com/politicas-de-cookies.html
            </a>
            ).
          </p>
          <p>
            Datos personales divulgados en relación con transacciones
            comerciales. Los datos personales que recopilamos de nuestros
            usuarios, incluida la PII, se consideran un activo comercial. Por lo
            tanto, si somos adquiridos por un tercero como resultado de una
            transacción como una fusión, adquisición o venta de activos o si
            nuestros activos son adquiridos por un tercero en caso de que
            cerremos o entremos en quiebra, algunos o todos de nuestros activos,
            incluida su PII, puede ser divulgada o transferida a un tercero
            adquirente en relación con la transacción.
          </p>
          <p>
            Datos personales divulgados para nuestra protección y la protección
            de terceros. Cooperamos con el gobierno y los funcionarios
            encargados de hacer cumplir la ley o partes privadas para hacer
            cumplir y cumplir la ley. Podemos divulgar cualquier Información
            personal sobre usted al gobierno o a funcionarios encargados de
            hacer cumplir la ley o partes privadas según lo consideremos, a
            nuestro exclusivo criterio, necesario o apropiado: (i) para
            responder a reclamaciones, procesos legales (incluidas citaciones);
            (ii) para proteger nuestra propiedad, derechos y seguridad y la
            propiedad, derechos y seguridad de un tercero o del público en
            general; y (iii) detener cualquier actividad que consideremos
            ilegal, poco ética o legalmente procesable.
          </p>
          <br />
          <h3 className={styles.privacyPolicies__subtitle}>Tus opciones</h3>
          <p>
            Le ofrecemos opciones con respecto a la recopilación, el uso y el
            intercambio de su PII y respetaremos sus elecciones. Tenga en cuenta
            que si decide no proporcionarnos la PII que solicitamos, es posible
            que no pueda acceder a todas las funciones de los Servicios.
          </p>
          <p>
            Optar por no. Es posible que le enviemos periódicamente boletines
            informativos, correos electrónicos, mensajes, notificaciones y otras
            comunicaciones que promocionen directamente nuestros Servicios.
            Cuando reciba dichas comunicaciones promocionales de nuestra parte,
            tendrá la oportunidad de &quot;optar por no participar&quot; (ya sea
            a través de su Cuenta o siguiendo las instrucciones para cancelar la
            suscripción que se proporcionan en el correo electrónico que
            reciba). Necesitamos enviarle ciertas comunicaciones con respecto a
            los Servicios y usted no podrá optar por no recibir esas
            comunicaciones, por ejemplo, comunicaciones sobre actualizaciones de
            nuestros Términos de uso (
            <a href="https://www.gotripbuddy.com/terminos-de-uso.html">
              https://www.gotripbuddy.com/terminos-de-uso.html
            </a>
            ) o esta Política de privacidad. Política, comunicaciones necesarias
            para verificar y proteger sus Datos personales, para administrar su
            cuenta o información sobre facturación.
          </p>
          <p>
            Eliminación o modificación de sus datos personales. Puede eliminar
            su PII y su cuenta puede solicitarnos que lo hagamos enviando una
            solicitud a Cal Berlin 880 Ur Jose Balta Sct 0559 Mzt 018, Lima,
            Perú. Con prueba de su identidad. Tomaremos medidas para eliminar su
            información lo antes posible, pero es posible que parte de la
            información permanezca en copias de seguridad / archivadas para
            nuestros registros o según lo requiera la ley.
          </p>
          <p>
            Acceso a su información. Su cuenta enumerará todos los planes que ha
            creado con nosotros y puede descargar o imprimir cualquier plan que
            elija.
          </p>
          <p>
            Otras opciones. Si no desea que recopilemos información de
            ubicación, puede desactivar esa función en su dispositivo móvil. Del
            mismo modo, su navegador tiene más controles que puede utilizar para
            controlar qué cookies y otra información se comunica con nuestros
            Servicios. Los servicios de terceros (por ejemplo, servicios de
            análisis, servicios de publicidad) generalmente también brindan
            control sobre la recopilación y el uso de sus Datos personales.
            Consulte también nuestra Política de cookies (
            <a href="https://www.gotripbuddy.com/politicas-de-cookies.html">
              https://www.gotripbuddy.com/politicas-de-cookies.html
            </a>
            ) para obtener más información.
          </p>
          <br />
          <h3 className={styles.privacyPolicies__subtitle}>
            La seguridad de sus datos personales
          </h3>
          <p>
            Tomamos medidas administrativas, físicas y electrónicas razonables
            diseñadas para proteger la información que recopilamos de usted o
            sobre usted (incluida su PII) del acceso, uso o divulgación no
            autorizados. Nuestro sitio web está protegido con HTTPS. Sin
            embargo, las plataformas de envío que conducen a nuestros Servicios
            pueden no tener el mismo nivel de seguridad. Tenga en cuenta que
            ningún método para transmitir información a través de Internet o
            almacenar información es completamente seguro. En consecuencia, no
            podemos garantizar la seguridad absoluta de ninguna información.
          </p>
          <p>
            Proveedores de servicios en la nube. También tenga en cuenta que
            también podemos utilizar proveedores de servicios en la nube de
            terceros que brindan alojamiento, almacenamiento de datos,
            procesamiento de datos, copias de seguridad, análisis de datos,
            registro, monitoreo y otros servicios de conformidad con términos y
            condiciones estándar que pueden no ser negociables. Estos
            proveedores de servicios nos han informado a nosotros o al público
            en general que aplican las medidas de seguridad que consideran
            adecuadas para la protección de los Datos Personales dentro de su
            sistema, o tienen una reputación general de aplicar tales medidas.
            Sin embargo, no seremos responsables (en la máxima medida permitida
            por la ley) por los daños que puedan resultar del uso indebido de
            cualquier información, incluidos los Datos personales, por parte de
            estas empresas.
          </p>
          <br />
          <h3 className={styles.privacyPolicies__subtitle}>
            Nuestra política hacia los niños
          </h3>
          <p>
            Nuestros Servicios no están dirigidos a niños menores de 18 años y
            no recopilamos PII a sabiendas de niños menores de 18 años. Si nos
            enteramos de que hemos recopilado PII de un niño menor de 18 años,
            tomaremos medidas para eliminar dicha información de nuestros
            archivos lo antes posible.
          </p>
          <br />
          <h3 className={styles.privacyPolicies__subtitle}>
            Otros asuntos legales
          </h3>
          <p>
            A qué servicios se aplica esta política. Esta Política de privacidad
            no se aplica a sitios web, servicios o aplicaciones de terceros,
            incluso si se puede acceder a ellos a través de nuestros Servicios.
            Sin embargo, esta Política de privacidad se aplica a partes de
            nuestros Servicios a las que se puede acceder a través de sitios
            web, servicios o aplicaciones de terceros. Además, tenga en cuenta
            que, a menos que definamos un término en esta Política de
            privacidad, todos los términos en mayúscula utilizados en esta
            Política de privacidad tienen el mismo significado que en nuestros
            Términos de uso (
            <a href="https://www.gotripbuddy.com/terminos-de-uso.html">
              https://www.gotripbuddy.com/terminos-de-uso.html
            </a>
            ). Por lo tanto, asegúrese de haber leído y comprendido nuestros
            Términos de uso antes de utilizar nuestros Servicios.
          </p>
          <p>
            Revisiones de esta Política de privacidad. Cualquier dato personal
            que se recopile a través de nuestros servicios está cubierto por la
            política de privacidad en vigor en el momento en que se recopilan
            dichos datos personales. Es posible que revisemos esta Política de
            privacidad de vez en cuando. Si realizamos cambios sustanciales a
            esta Política de privacidad, le notificaremos dichos cambios
            publicándolos en los Servicios o enviándole un correo electrónico u
            otra notificación, y actualizaremos la &quot;Fecha de última
            actualización&quot; anterior para indicar cuándo esos cambios se
            harán efectivos.
          </p>
          <p>
            Enlaces a otros sitios. Nuestros Servicios pueden contener enlaces a
            sitios web y servicios que son propiedad o están operados por
            terceros. Cualquier información que proporcione en un servicio de
            terceros o que sea recopilada por un servicio de terceros se
            proporciona directamente al propietario u operador del servicio de
            terceros y está sujeta a la política de privacidad del propietario u
            operador. No somos responsables del contenido, la privacidad o las
            prácticas y políticas de seguridad de ningún servicio de terceros.
            Para proteger sus datos personales, le recomendamos que revise
            cuidadosamente las políticas de privacidad de todos los servicios de
            terceros a los que accede.
          </p>
          <p>
            Transferencia internacional. Su PII puede transferirse y mantenerse
            en computadoras ubicadas fuera de su estado, provincia, país u otra
            jurisdicción gubernamental donde las leyes de privacidad pueden no
            ser tan protectoras como las de su jurisdicción. Por ejemplo, si se
            encuentra fuera de los Estados Unidos y decide proporcionarnos su
            PII, podemos transferir su PII a los Estados Unidos y procesarla
            allí.
          </p>
          <p>
            Respuesta a las señales de no seguimiento. Nuestro sitio no tiene la
            capacidad de responder a las señales de &quot;No rastrear&quot;
            recibidas de varios navegadores web.
          </p>
          <p>
            Uso de la API de Google Maps. Nuestros Servicios utilizan la (s) API
            (s) de Google Maps. Aquí hay un enlace a su Política de privacidad.
          </p>
          <br />
          <h3 className={styles.privacyPolicies__subtitle}>¿Preguntas?</h3>
          <p>
            Comuníquese con nosotros en Cal Berlin 880 Ur Jose Balta Sct 0559
            Mzt 018, Lima, Perú. Si tiene alguna pregunta sobre esta Política de
            privacidad.
          </p>
        </section>
      </article>
    </Wrapper>
  )
}

export default PrivacyPolicies
