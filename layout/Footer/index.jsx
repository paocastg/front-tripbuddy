import React from 'react'

import styles from './index.module.scss'

const Footer = () => {
  return (
    <>
      <footer className={styles.wrapper}>
        <div className={`e-container ${styles.footer_options}`}>
          <div>
            <h2>Trip Buddy</h2>
            <a href="/acerca">Acerca de nosotros</a>
          </div>
          <div>
            <h2>Buscador</h2>
            <a href="#">Viajes de otros usuarios</a>
          </div>
          <div>
            <h2>Ayuda</h2>
            <a href="/faq" >FAQ</a>
            <a href="/contacto">Contacto</a>
            <a href="/politicas-de-privacidad">Políticas de privacidad</a>
            <a href="/politicas-de-derechos-de-autor">Políticas de derechos de autor</a>
            <a href="/politicas-de-cookies">Políticas de Cookies</a>
            <a href="/terminos-de-uso">Terminos de uso</a>
          </div>
          <div>
            <h2>Configuración</h2>
            <a href="#">Tipo de cambio: U.S. Dollar</a>
            <a href="#">Idioma: Español</a>
          </div>
        </div>
      </footer>
      <div className={styles.footer_desc}>© 2021 Trip Buddy - Todos los derechos reservados</div>
      <div className={styles.icon_whatsapp}>
        <a
          href="https://api.whatsapp.com/send?phone=+51922553728">
          <img src="http://s2.accesoperu.com/logos/btn_whatsapp.png" />
        </a>
      </div>
    </>
  )
}

export default Footer
