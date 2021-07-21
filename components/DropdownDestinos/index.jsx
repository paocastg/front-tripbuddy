import React from 'react'
import { Menu, Dropdown, Button, Space } from 'antd'
import { DownOutlined, UserOutlined } from '@ant-design/icons'

const menu = () => {
  const handleClick = e => {
    console.log('click ', e)
  }
  return (
    <div>
    <Menu
      onClick={handleClick}
      style={{ width: 256 }}
    >
    <Menu.Item key="sub1">

        <Button shape="circle" >
        -
      </Button>
      nro
      <Button shape="circle" >
        +
      </Button>
        Adultos

    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="sub2">
      <Button shape="circle">
        -
      </Button>
      nro
      <Button shape="circle">
        +
      </Button>
       Adolescentes
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="sub3">
        Niños
      <Button shape="circle">
        -
      </Button>
      nro
      <Button shape="circle">
        +
      </Button>
    </Menu.Item>
  </Menu>
  </div>
  )
}

const DropdownMenu = () => {
  return (
    <div>
        <Space wrap>
          <Dropdown overlay={menu} placement="bottomCenter">
            <Button
              icon={<UserOutlined />}
            >
              Personas {<DownOutlined />}
            </Button>
          </Dropdown>
        </Space>
    </div>
  )
}

export default DropdownMenu
