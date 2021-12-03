import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Dropdown, Menu } from 'antd'
import { UserOutlined, SettingOutlined, LogoutOutlined, ShopFilled, CrownOutlined } from '@ant-design/icons'

import { _setUser, _logout } from '../../../redux/actions/userActions'
import { NavLink, Redirect } from 'react-router-dom'

const UserMenu = (props) => {
  const dispatch = useDispatch()
  const { loading, username, fullName, roles } = useSelector((state) => state.user)

  useEffect(() => {
    if (!loading) dispatch(_setUser())
  }, [])

  const handleMenuClick = (e) => {
    const { key } = e
    switch (key) {
      case 'self': {
        break
      }

      case 'admin': {
      }

      case 'seller': {
        break
      }

      case 'setting': {
        break
      }

      case 'logout': {
        dispatch(_logout())
      }

      default: {
      }
    }
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="self" icon={<UserOutlined />}>
        {fullName}
      </Menu.Item>
      {roles.includes('admin') && (
        <Menu.Item key="admin" icon={<CrownOutlined />}>
          Quản trị
        </Menu.Item>
      )}
      {roles.includes('seller') && (
        <Menu.Item key="seller" icon={<ShopFilled />}>
          Cửa hàng
        </Menu.Item>
      )}
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
