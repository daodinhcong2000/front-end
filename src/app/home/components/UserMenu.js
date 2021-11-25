import { useState, useEffect } from "react"
import { Button, Dropdown, Menu } from "antd"
import { DollarOutlined, UserOutlined, SettingOutlined, LogoutOutlined, ShoppingCartOutlined } from "@ant-design/icons"

import axios from "axios"

const USER_SERVICE = process.env.REACT_APP_API_USER_SERVICE || 'https://accommerce.cuongdm.tech/user-service/api'

const UserMenu = props => {
    const [username, setUsername] = useState('')
    const [user, setUser] = useState('')

    useEffect(async () => {
        const token = localStorage.getItem('token')

        const { data: userData } = await axios({
            method: 'get',
            url: `${USER_SERVICE}/users/self`,
            headers: {
                'Authorization': token,
                'Content-Type': 'text/plain'
            }
        })
        const { data, message, success } = userData
        if (!success) throw new Error(message)

        const { username, firstName, lastName } = data
        setUsername(username)
        setUser(`${firstName} ${lastName}`)
    })

    const handleMenuClick = e => {
        const { key } = e
        switch (key) {
            case 'logout': {
                localStorage.removeItem('token')
                window.location.reload()
            }
        }
    }

        const menu = (
            <Menu onClick={handleMenuClick}>
                <Menu.Item key="self" icon={<UserOutlined />}>
                    {user}
                </Menu.Item>
                <Menu.Item key="bought" icon={<DollarOutlined />}>
                    Đã mua
                </Menu.Item>
                <Menu.Item key="cart" icon={<ShoppingCartOutlined />}>
                    Giỏ hàng
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
                <Button size="large" shape="round" shape="round" id="btn_user">
                    {username}
                </Button>
            </Dropdown>
        )
    }

    export default UserMenu