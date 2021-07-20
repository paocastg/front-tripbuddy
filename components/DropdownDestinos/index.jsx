import React from 'react'
import { Menu, Dropdown, Button, Space } from 'antd'
import { DownOutlined, UserOutlined } from '@ant-design/icons'

const menu = () => {
  return (
    <div>
    <Menu openKeys="horizontal">
    <Menu.Item key="sub1">
      <a target="_blank" rel="noopener noreferrer">
        Adultos
      </a>
      <Space >
        <Button shape="circle" >
        -
      </Button>
      nro
      <Button shape="circle" >
        +
      </Button>
      </Space>
    </Menu.Item>
    <Menu.Item key="sub2">
      <a target="_blank" rel="noopener noreferrer" >
       Adolescentes
      </a>
      <Button shape="circle">
        -
      </Button>
      nro
      <Button shape="circle">
        +
      </Button>
    </Menu.Item>
    <Menu.Item key="sub3">
      <a target="_blank" rel="noopener noreferrer">
        Niños
      </a>
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
