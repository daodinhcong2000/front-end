import { useSelector, useDispatch } from "react-redux"
import { Button, Dropdown, Menu } from "antd"
import { UserOutlined, SettingOutlined, LogoutOutlined, ShopFilled, CrownOutlined } from "@ant-design/icons"

const UserMenu = props => {
    const { username, user, roles } = useSelector(state => state.user)
    const dispatch = useDispatch()

    const handleMenuClick = e => {
        const { key } = e
        switch (key) {
            case 'self': {
                break
            }

            case 'admin': {
                break
            }

            case 'seller': {
                break
            }

            case 'setting': {
                break
            }

            case 'logout': {
                dispatch({
                    type: 'LOG_OUT'
                })
                break
            }
        }
    }

    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="self" icon={<UserOutlined />}>
                {user}
            </Menu.Item>
            {roles.includes('admin') &&
                <Menu.Item key="admin" icon={<CrownOutlined />}>
                    <a href="/admin">Quản trị</a>
                </Menu.Item>
            }
            {roles.includes('seller') &&
                <Menu.Item key="seller" icon={<ShopFilled />}>
                    <a href="/store">Cửa hàng</a>
                </Menu.Item>
            }
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
            <Button size="large" shape="round" shape="round" id="btn_user">
                {username}
            </Button>
        </Dropdown>
    )
}

export default UserMenu