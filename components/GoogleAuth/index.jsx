import api from 'assets/Utils/api'
import { Auth } from 'assets/Utils/Auth'
import GoogleLogin from 'react-google-login'
import styles from './index.module.scss'

const GoogleAuth = ({ quotation }) => {
  const responseGoogle = async (response) => {
    if (!response.error) {
      console.log(response)
      try {
        const resUser = await api.createUser(response, 'gmail')
        console.log(resUser)

        // almacenar el token y usuario
        Auth.saveSession(resUser)

        // crear la solicitud
        const userData = Auth.getSession()
        const newQuotationData = { ...quotation, usuario: userData.usuario.id }
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
    <GoogleLogin
      clientId="1010239337258-g75rnfgn4ffhdt5uhi58medop1r83b6k.apps.googleusercontent.com"
      render={(renderProps) => (
        <button className={styles.btn_google} onClick={renderProps.onClick} >
          <img
            src="iniciar-sesion-google.svg"
            alt="iniciar sesion con google"
          />
        </button>
      )}
      buttonText="Iniciar sesion con Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  )
}

export default GoogleAuth
