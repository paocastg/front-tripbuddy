import { Menu } from 'antd'
import { Auth } from 'assets/Utils/Auth'
const UserMenu = () => {
  const handleClick = () => {
    console.log('yep logout')
    Auth.deleteSession()
  }
  return (
    <Menu>
      <Menu.Item>
        <a href="/cotizaciones">
          Cotizaciones abiertas
        </a>
      </Menu.Item>
      <Menu.Item>
        <a onClick={handleClick} href="">
          Logout
        </a>
      </Menu.Item>
    </Menu>
  )
}

export default UserMenu
