import React, { useState } from 'react'
import { Menu, Button, Dropdown, Space } from 'antd'
import { DownOutlined, UserOutlined } from '@ant-design/icons'
import styles from './index.module.scss'
import { useLocalStorage } from 'assets/Utils/LocalStorage'

const DropdownMenu = () => {
  const [state, setState] = useState('')
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  const [count3, setCount3] = useState(0)
  const [adulto, setAdulto] = useLocalStorage('adultos', '')
  const [adolescente, setAdolescente] = useLocalStorage('adolescentes', '')
  const [nino, setNino] = useLocalStorage('niños', '')

  const handleVisibleChange = flag => {
    setState({ visible: flag })
  }

  const handleClick1 = () => {
    if (count > 0) {
      setCount(count - 1)
      setAdulto(count - 1)
    }
  }
  const handleClick2 = () => {
    setCount(count + 1)
    setAdulto(count + 1)
  }
  const handleClick3 = () => {
    if (count2 > 0) {
      setCount2(count2 - 1)
      setAdolescente(count2 - 1)
    }
  }
  const handleClick4 = () => {
    setCount2(count2 + 1)
    setAdolescente(count2 + 1)
  }
  const handleClick5 = () => {
    if (count3 > 0) {
      setCount3(count3 - 1)
      setNino(count3 - 1)
    }
  }
  const handleClick6 = () => {
    setCount3(count3 + 1)
    setNino(count3 + 1)
  }

  const suma = count + count3 + count2

  const menu = () => {
    return (
    <div>
    <Menu >
        <Menu.Item key="1">
          <div className={styles.dropdownCenter}>
            <span>Adultos</span>
            <Space>
              <Button type="text" onClick= {handleClick1} value={count}>
                -
              </Button>
                {count}
              <Button type="text" onClick= {handleClick2} value={count}>
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
              <Button type="text" onClick= {handleClick3} value={count2}>
                -
              </Button>
                {count2}
              <Button type="text" onClick= {handleClick4} value={count2}>
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
              <Button type="text" onClick= {handleClick5} value={count3}>
                -
              </Button>
                {count3}
              <Button type="text" onClick= {handleClick6} value={count3}>
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
        overlay={menu}
        onVisibleChange={handleVisibleChange}
        visible={state.visible}
        trigger={['click']}
        icon={<DownOutlined />}
        size="large"
      >
          {<UserOutlined />} {suma} Personas
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </Dropdown.Button>

    </div>
  )
}

export default DropdownMenu
