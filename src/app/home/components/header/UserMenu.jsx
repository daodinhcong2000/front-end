import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Dropdown, Menu } from 'antd'
import { UserOutlined, SettingOutlined, LogoutOutlined, ShopFilled, CrownOutlined } from '@ant-design/icons'

import { _setUser, _logout } from '../../../../redux/actions/userActions'

const UserMenu = (props) => {
  const dispatch = useDispatch()
  const { loading, username, fullName, roles } = useSelector((state) => state.user)

  useEffect(() => {
    if (!username) dispatch(_setUser())
  }, [])

  const handleMenuClick = (e) => {
    const { key } = e
    switch (key) {
      case 'self': {
        break
      }

      case 'seller': {
        break
      }

      case 'setting': {
        break
      }

      case 'logout': {
        dispatch(_logout())
        break
      }

      default: {
        break
      }
    }
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="self" icon={<UserOutlined />}>
        {fullName}
      </Menu.Item>

      <Menu.Item key="seller" icon={<ShopFilled />}>
        {roles.includes('seller') ? (
          <a href="/seller" style={{ textDecoration: 'none' }}>
            Kênh bán hàng
          </a>
        ) : (
          <Link to="/" style={{ textDecoration: 'none' }}>
            Đăng ký bán
          </Link>
        )}
      </Menu.Item>

      <Menu.Item key="setting" icon={<SettingOutlined />}>
        Cài đặt
      </Menu.Item>

      <Menu.Item key="logout" icon={<LogoutOutlined />}>
        Đăng xuất
      </Menu.Item>
    </Menu>
  )

  return (
    <Dropdown overlay={menu}>
      <Button loading={loading} size="large" shape="round" id="btn_user">
        {username}
      </Button>
    </Dropdown>
  )
}

export default UserMenu
