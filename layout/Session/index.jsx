import { useEffect, useState } from 'react'
import { Auth } from 'assets/Utils/Auth'

const Session = ({ children }) => {
  const [logged, setLogged] = useState(false)

  const session = Auth.getSession()
  useEffect(() => {
    if (session?.id && session?.token) {
      setLogged(true)
    } else {
      window.location.href = '/login'
    }
  }, [session])

  if (!logged) {
    return <> Cargando .... </>
  }

  return (
    <div>
      {children}
    </div>
  )
}

export default Session
