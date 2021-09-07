import { Auth } from 'assets/Utils/Auth'
import axios from 'axios'

class Http {
  static get = async (url, options = {}) => {
    const session = Auth.getSession()

    return await axios.get(url, {
      headers: {
        Authorization: `Bearer ${session?.token}`,
        ...options
      },
    })
  }

  static post = async (url, options) => {
    const session = Auth.getSession()

    return await axios(url, {
			...options,
      headers: {
				...options.headers,
        Authorization: `Bearer ${session.token}`,
      }
    })
  }
}


export {
  Http
}
