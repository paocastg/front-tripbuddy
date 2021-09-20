import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import styles from './index.module.scss'
import { Auth } from 'assets/Utils/Auth'
import api from 'assets/Utils/api'

const FacebookAuth = ({ quotation }) => {
  const responseFacebook = async (response) => {
    if (response.status !== 'unknown') {
      try {
        /*
          Send to api login the data of user
        */
        const resUser = await api.createUser(response, 'facebook')

        /*
          Store token and user data in LocalStorage
        */
        Auth.saveSession(resUser)

        /*
          Add user id and send the quotation
        */
        const userData = Auth.getSession()
        const newQuotationData = { ...quotation, usuario: userData.usuario.id }
        const resQuotation = await api.sendQuotation(newQuotationData)

        if (resQuotation.error) throw resQuotation

        /*
          Redirect to /cotizaciones
        */
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
