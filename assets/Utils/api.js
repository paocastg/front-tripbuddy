import { Http } from './Http'
import { API, API_TEST } from './Constants'
import axios from 'axios'

const getCategory = async () => {
  try {
    const urlCategory = `${API}/categoria/`
    const res = await Http.get(urlCategory)
    const json = await res.data
    // console.log(json)
    return json
  } catch (err) {
    const message = err.statusText
    return message
  }
}

const getActivity = async () => {
  try {
    const urlActivity = `${API}/actividad/`
    const res = await Http.get(urlActivity)
    const json = await res.data
    return json
  } catch (err) {
    const message = err.statusText
    return message
  }
}
const getDestiny = async () => {
  try {
    const urlActivity = `${API}/destino/`
    const res = await Http.get(urlActivity)
    const json = await res.data
    return json
  } catch (err) {
    const message = err.statusText
    return message
  }
}

const createUser = async (response, type = 'gmail') => {
  try {
    if (type === 'facebook') {
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
      return json
    }
    if (type === 'gmail') {
      const { profileObj } = response
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        data: JSON.stringify({
          correo: profileObj.email,
          tipo_redsocial: 'gmail',
          redsocialid: profileObj.googleId,
          nick_name: `${profileObj.givenName} ${profileObj.familyName}`
        })
      }
      const res = await axios('http://localhost:8000/usuario/user/create/', options)
      const json = await res.data
      return json
    }
  } catch (err) {
    return {
      error: true,
      status: err.status || '00',
      statusText: err.statusText || 'Ocurrio un error'
    }
  }
}

const sendQuotation = async (data) => {
  try {
    console.log('data desde api', data)
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      data: JSON.stringify(data)
    }
    const res = await Http.post(`${API_TEST}/solicitud/`, options)
    const json = await res.data
    return json
    // console.log(json)
  } catch (err) {
    return {
      error: true,
      status: err.status || '00',
      statusText: err.statusText || 'Ocurrio un error'
    }
  }
}

export default {
  getCategory,
  getActivity,
  getDestiny,
  sendQuotation,
  createUser
}
