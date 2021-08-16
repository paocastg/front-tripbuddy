import GoogleLogin from 'react-google-login'
import styles from './index.module.scss'

const GoogleAuth = () => {
  const responseGoogle = (response) => {
    console.log(response)
  }
  return (
    <GoogleLogin
      clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
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
