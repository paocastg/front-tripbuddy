import { useState } from 'react'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import styles from './index.module.scss'
import { Auth } from 'assets/Utils/Auth'
import { API } from 'assets/Utils/Constants'
import { useLocalStorage } from 'assets/Utils/LocalStorage'
const axios = require('axios')

const FacebookAuth = () => {
  const [user, setUser] = useState('')
  const [quotation] = useLocalStorage('myQuotation', null)

  const categoria = quotation && quotation.category.map((el) => el.id)
  const actividad = quotation && quotation.activity.map((el) => el.id)

  const data = {
    fecha_inicio: '2021-08-06',
    fecha_fin: '2021-08-06',
    numero_ninos: 0,
    numero_adolescentes: 0,
    numero_adultos: 0,
    hotel: 'hotel',
    airbnb: true,
    lugar: 'Arequipa',
    usuario: 1,
    destino: [],
    categoria: categoria,
    actividad: actividad
  }

  const sendCotizar = async () => {
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        data: JSON.stringify(data)
      }
      const res = await axios('http://localhost:8000/api/solicitud/', options)
      const json = await res.data
      console.log('Cotizacion enviada', json)
    } catch (err) {
      const message = err.statusText || 'Ocurrio un error'
      console.log('Ocurrio un error', message)
    }
  }

  const responseFacebook = async (response) => {
    if (response.status !== 'unknown') {
      try {
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          },
          data: JSON.stringify({
            correo: response.email,
            tipo_redsocial: 'facebook',
            redsocialid: response.id || response.userID,
            nick_name: response.name
          })
        }
        const res = await axios('http://localhost:8000/usuario/user/create/', options)
        const json = await res.data
        console.log(json)
        // almacenar el token y usuario
        Auth.saveSession(json)

        // crear la solicitud
        sendCotizar()

        // redireccionar a cotizacion
        window.location.href = '/cotizaciones'
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
