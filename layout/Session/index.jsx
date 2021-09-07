import { useEffect, useState } from 'react'
import { Auth } from 'assets/Utils/Auth'
import { Spin } from 'antd'

const Session = ({ children }) => {
  const [logged, setLogged] = useState(false)

  useEffect(() => {
    const session = Auth.getSession()
    if (session?.usuario && session?.token) {
      setLogged(true)
    } else {
      window.location.href = '/login'
    }
  }, [logged])

  if (!logged) {
    return (
    <div style={{ margin: '30px', marginBottom: '30%', textAlign: 'center' }}>
      <Spin size="large" />
    </div>
    )
  }

  return <div>{children}</div>
}

export default Session
