import { Http } from './Http'
import { API } from './Constants'

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
export default {
  getCategory,
  getActivity,
  getDestiny
}
