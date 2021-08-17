import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import styles from './index.module.scss'

const FacebookAuth = () => {
  const responseFacebook = (response) => {
    console.log(response)
  }

  const handleClickFacebook = () => {
    console.log('click facebook')
  }
  return (
    <FacebookLogin
      appId="529964141563042"
      autoLoad={true}
      fields="name,email"
      onClick={handleClickFacebook}
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
