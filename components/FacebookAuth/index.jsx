import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import styles from './index.module.scss'
const axios = require('axios')

const FacebookAuth = () => {
  const responseFacebook = async (response) => {
    if (response.status !== 'unknown') {
      try {
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          },
          data: JSON.stringify({
            nombres: response.name,
            email: response.email,
            redsocialid: response.id || response.userID
          })
        }
        const res = await axios('http://localhost:3000/santos', options)
        const json = await res.data
        console.log(json)
        // almacenar el token y usuario
      } catch (err) {
        console.log(err)
      }
      // Enviar a la api de login.
      console.log(response)
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
