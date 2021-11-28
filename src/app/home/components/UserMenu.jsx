import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Button, Dropdown, Menu, message as Message } from "antd"
import { UserOutlined, SettingOutlined, LogoutOutlined, ShopFilled, CrownOutlined } from "@ant-design/icons"

// import { _getUserInformation }

const UserMenu = props => {
    const dispatch = useDispatch()
    const { username, fullName, roles } = useSelector(state => state.user)

    // useEffect(async (username) => {
    //     if (!username) {
    //         const info = await _getUserInformation().then(response => response.data).catch(e => e.response.data)
    //         const { success, message } = info
    //         if (!success) {
    //             return Message.error(message)
    //         }
    //         const { data } = info
    //         const { firstName, lastName, username, roles } = data
    //         dispatch({
    //             type: 'SET_USER',
    //             payload: {
    //                 username,
    //                 fullName: `${firstName} ${lastName}`,
    //                 roles
    //             }
    //         })
    //     }
    // }, [username])

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
                {fullName}
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
            <Button size="large" shape="round" id="btn_user">
                {username}
            </Button>
        </Dropdown>
    )
}

export default UserMenu