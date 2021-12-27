import React, { useEffect, useState } from 'react'
import { CDN_PATH } from 'assets/Utils/Constants'
import styles from './index.module.scss'
import { useRouter } from 'next/router'
import { Auth } from 'assets/Utils/Auth'
import { Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import UserMenu from 'components/UserMenu'
import GoogleTranslate from 'components/GoogleTranslate'

const Header = () => {
  const [logged, setLogged] = useState(false)
  const [user, setUser] = useState('')
  const router = useRouter()
  useEffect(() => {
    const session = Auth.getSession()
    if (session?.usuario && session?.token) {
      setLogged(true)
      setUser(session?.usuario)
    } else {
      setLogged(false)
    }
  }, [logged])
  return (
    <div className={styles.wrapper}>
      <div className="e-container">
        <div className={styles.header}>
          <div>
            <a href="/">
              <img src={`${CDN_PATH}/logo-tripbuddy.svg`} alt="chart" />
            </a>
            {/* <img src="https://file-loenviamostest.s3.amazonaws.com/images/logo-tripbuddy.svg" alt="chart" /> */}
          </div>
          <div className={styles.header_user}>
            <GoogleTranslate />
            {logged
              ? (
              <div className={styles.user}>
                <button
                  className={styles.header_button}
                  onClick={() => router.push('/select-trip')}
                >
                  Comienza tu viaje
                </button>
                <Dropdown overlay={<UserMenu />}>
                  <a
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    <div className={styles.user}>
                      <figure className={styles.user__figure}>
                        <img className={styles.user__img} />
                      </figure>
                      <p className={styles.user__text}>{user.nombres}</p>
                      <DownOutlined />
                    </div>
                  </a>
                </Dropdown>
              </div>
                )
              : (
              <>
                <button
                  className={styles.header_button}
                  onClick={() => router.push('/login')}
                >
                  Iniciar sesión
                </button>
                {/* <button className={styles.header_button}>Registro</button> */}
              </>
                )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
