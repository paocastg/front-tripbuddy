import styles from './index.module.scss'

/* layout */
import Wrapper from 'layout/Wrapper'
import { NextSeo } from 'next-seo'

const CopyrightPolicies = () => {
  return (
    <Wrapper>
      <NextSeo
        title="Politicas de derecho de autor"
        description="A short description goes here."
      />
      <article className={`${styles.copyrightPolicies} e-container`}>
        <section className={styles.copyrightPolicies__text}>
          <h2 className={styles.copyrightPolicies__title}>
            Política de derechos de autor de Trip Buddy
          </h2>
          <p>Última actualización: 3 de julio de 2021</p>

          <h3 className={styles.copyrightPolicies__subtitle}>
            Notificación de infracción de derechos de autor
          </h3>
          <p>
            Adaptativa S.A.C. (<b>&quot;Trip Buddy&quot;</b>) respeta los
            derechos de propiedad intelectual de otros y espera que sus usuarios
            hagan lo mismo.
          </p>

          <p>
            Es política de Trip Buddy, en las circunstancias apropiadas y a su
            discreción, deshabilitar y / o cancelar las cuentas de los usuarios
            que infrinjan repetidamente los derechos de autor de otros.
          </p>

          <p>
            De acuerdo con la Ley de Derechos de Autor del Milenio Digital de
            1998, cuyo texto se puede encontrar en el sitio web de la Oficina de
            Derechos de Autor de EE. UU. En{' '}
            <a href="https://www.copyright.gov/legislation/dmca.pdf">
              https://www.copyright.gov/legislation/dmca.pdf
            </a>
            , Trip Buddy responderá rápidamente a las reclamaciones por
            infracción de derechos de autor. comprometidos utilizando el sitio
            web de Trip Buddy u otra red en línea accesible a través de un
            dispositivo móvil u otro tipo de dispositivo (los
            &quot;Sitios&quot;) que se informan al Agente de derechos de autor
            designado de Trip Buddy, identificado en el aviso de muestra a
            continuación.
          </p>

          <p>
            Si usted es un propietario de derechos de autor, o está autorizado
            para actuar en nombre de uno, o autorizado para actuar bajo
            cualquier derecho exclusivo bajo los derechos de autor, informe las
            presuntas infracciones de derechos de autor que tengan lugar a
            través de los Sitios completando el siguiente Aviso de presunta
            infracción de la DMCA y entregándolo al Agente de derechos de autor
            designado de Trip Buddy. Al recibir el Aviso como se describe a
            continuación, Trip Buddy tomará cualquier acción, a su entera
            discreción, que considere apropiada, incluida la eliminación del
            material impugnado de los Sitios.
          </p>
          <br />
          <p>Aviso de presunta infracción de la DMCA (&quot;Aviso&quot;)</p>

          <p>
            Identifique el trabajo con derechos de autor que afirma que se ha
            infringido o, si este Aviso cubre varios trabajos con derechos de
            autor, puede proporcionar una lista representativa de los trabajos
            con derechos de autor que afirma que se han infringido. Identifique
            el material que usted afirma que infringe (o que es objeto de una
            actividad infractora) y que debe eliminarse o cuyo acceso debe
            deshabilitarse, e información razonablemente suficiente para
            permitirnos ubicar el material, incluido como mínimo, si
            corresponde, la URL del enlace que se muestra en el (los) Sitio (s)
            donde se puede encontrar dicho material.
          </p>

          <p>
            Proporcione su dirección postal, número de teléfono y, si está
            disponible, dirección de correo electrónico.
          </p>
          <br />
          <p>
            Incluya las dos declaraciones siguientes en el cuerpo del Aviso:
          </p>

          <p>
            &quot;Por la presente declaro que creo de buena fe que el uso en
            disputa del material protegido por derechos de autor no está
            autorizado por el propietario de los derechos de autor, su agente o
            la ley (por ejemplo, como un uso justo)&quot;.
          </p>

          <p>
            &quot;Por la presente declaro que la información contenida en este
            Aviso es precisa y, bajo pena de perjurio, que soy el propietario, o
            estoy autorizado para actuar en nombre del propietario, de los
            derechos de autor o de un derecho exclusivo bajo los derechos de
            autor que supuestamente se infringe.&quot;
          </p>

          <p>
            Proporcione su nombre legal completo y su firma electrónica o
            física.
          </p>
        </section>
      </article>
    </Wrapper>
  )
}

export default CopyrightPolicies
