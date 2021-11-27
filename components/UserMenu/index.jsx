import { Menu } from 'antd'
import { Auth } from 'assets/Utils/Auth'
const UserMenu = () => {
  const handleClick = () => {
    console.log('yep logout')
    Auth.deleteSession()
  }
  return (
    <Menu>
      <Menu.Item key="1">
        <a href="/cotizaciones">
          Cotizaciones abiertas
        </a>
      </Menu.Item>
      <Menu.Item key="2">
        <a href="/mis-viajes">
          Mis viajes
        </a>
      </Menu.Item>
      <Menu.Item key="3">
        <a onClick={handleClick} href="">
          Logout
        </a>
      </Menu.Item>
    </Menu>
  )
}

export default UserMenu
