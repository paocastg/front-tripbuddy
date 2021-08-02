import React, { useState, useEffect } from 'react'
import { Menu, Button, Dropdown, Space } from 'antd'
import { DownOutlined, UserOutlined } from '@ant-design/icons'
import styles from './index.module.scss'
import { useLocalStorage } from 'assets/Utils/LocalStorage'

const DropdownMenu = () => {
  const [state, setState] = useState('')
  const [adulto, setAdulto] = useLocalStorage('adultos', 0)
  const [adolescente, setAdolescente] = useLocalStorage('adolescentes', 0)
  const [nino, setNino] = useLocalStorage('ninos', 0)

  const handleVisibleChange = flag => {
    setState({ visible: flag })
  }

  const handleClick1 = () => {
    if (adulto > 0) {
      setAdulto(adulto - 1)
    }
  }
  const handleClick2 = () => {
    setAdulto(adulto + 1)
  }
  const handleClick3 = () => {
    if (adolescente > 0) {
      setAdolescente(adolescente - 1)
    }
  }
  const handleClick4 = () => {
    setAdolescente(adolescente + 1)
  }
  const handleClick5 = () => {
    if (nino > 0) {
      setNino(nino - 1)
    }
  }
  const handleClick6 = () => {
    setNino(nino + 1)
  }

  const suma = adulto + adolescente + nino

  const menu = () => {
    return (
    <div>
    <Menu >
        <Menu.Item key="1">
          <div className={styles.dropdownCenter}>
            <span>Adultos</span>
            <Space>
              <Button type="text" onClick= {handleClick1} value={adulto}>
                -
              </Button>
                {adulto}
              <Button type="text" onClick= {handleClick2} value={adulto}>
                +
              </Button>
            </Space>
          </div>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="2">
          <div className={styles.dropdownCenter}>
            <span>Adolescentes</span>
            <Space>
              <Button type="text" onClick= {handleClick3} value={adolescente}>
                -
              </Button>
                {adolescente}
              <Button type="text" onClick= {handleClick4} value={adolescente}>
                +
              </Button>
            </Space>
          </div>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">
          <div className={styles.dropdownCenter}>
            <span>Niños</span>
            <Space>
              <Button type="text" onClick= {handleClick5} value={nino}>
                -
              </Button>
                {nino}
              <Button type="text" onClick= {handleClick6} value={nino}>
                +
              </Button>
            </Space>
          </div>
        </Menu.Item>
      </Menu>
    </div>
    )
  }
  return (
    <div>
      <Dropdown.Button
        className= {styles.dropdown}
        overlay={menu}
        onVisibleChange={handleVisibleChange}
        visible={state.visible}
        trigger={['click']}
        icon={<DownOutlined />}
        size="large"
      >
          {<UserOutlined />} {suma} Personas
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </Dropdown.Button>

    </div>
  )
}

export default DropdownMenu
