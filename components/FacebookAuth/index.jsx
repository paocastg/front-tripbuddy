import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import styles from './index.module.scss'
import { Auth } from 'assets/Utils/Auth'
import api from 'assets/Utils/api'

const FacebookAuth = ({ quotation }) => {
  const categoria = quotation && quotation.categoria.map((el) => el.id)
  const actividad = quotation && quotation.actividad.map((el) => el.id)

  const newQuotation = { ...quotation, categoria, actividad }
  // console.log(newQuotation)

  const responseFacebook = async (response) => {
    if (response.status !== 'unknown') {
      try {
        const resUser = await api.createUser(response, 'facebook')

        // almacenar el token y usuario
        Auth.saveSession(resUser)

        // crear la solicitud
        const userData = Auth.getSession()
        const newQuotationData = { ...newQuotation, usuario: userData.usuario.id }
        const resQuotation = await api.sendQuotation(newQuotationData)

        if (resQuotation.error) throw resQuotation

        // redireccionar a cotizacion
        window.location.href = '/cotizaciones'
      } catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <FacebookLogin
      appId="529964141563042"
      autoLoad={false}
      fields="name,email"
      callback={responseFacebook}
      render={(renderProps) => (
        <button className={styles.btn_facebook} onClick={renderProps.onClick}>
          <img
            src="iniciar-sesion-facebook.svg"
            alt="iniciar sesion con facebook"
          />
        </button>
      )}
    />
  )
}

export default FacebookAuth
