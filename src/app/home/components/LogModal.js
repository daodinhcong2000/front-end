import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Modal, Button, message as Message } from 'antd'

import axios from 'axios'
import sha256 from 'js-sha256'
import md5 from 'md5'

import LoginForm from './LoginForm'
import RegisterForm from './RegisterFrom'
import ForgotForm from './ForgotForm'

const regex = require('../../../helpers/validating/regex')

const USER_SERVICE = process.env.REACT_APP_API_USER_SERVICE || 'https://accommerce.cuongdm.tech/user-service/api'

const LogModal = props => {
    const logForm = useSelector(state => state.logForm)

    const [loading, setLoading] = useState(false)
    const [visible, setVisible] = useState(false)
    const [mode, setMode] = useState('login')
    const dispatch = useDispatch()

    const onFirstNameChange = e => {
        dispatch({
            type: 'CHANGE_FORM',
            firstName: e.target.value.trim()
        })
    }
    const onLastNameChange = e => {
        dispatch({
            type: 'CHANGE_FORM',
            lastName: e.target.value.trim()
        })
    }
    const onPhoneNumberChange = e => {
        dispatch({
            type: 'CHANGE_FORM',
            phoneNumber: e.target.value.trim()
        })
    }
    const onUsernameChange = e => {
        dispatch({
            type: 'CHANGE_FORM',
            username: e.target.value.trim().toLowerCase()
        })
    }
    const onPasswordChange = e => {
        dispatch({
            type: 'CHANGE_FORM',
            password: e.target.value
        })
    }
    const onRePasswordChange = e => {
        dispatch({
            type: 'CHANGE_FORM',
            rePassword: e.target.value
        })
    }
    const onAddressChange = e => {
        dispatch({
            type: 'CHANGE_FORM',
            address: e.target.value.trim()
        })
    }
    const onEmailChange = e => {
        dispatch({
            type: 'CHANGE_FORM',
            email: e.target.value.trim().toLowerCase()
        })
    }

    const showModal = e => {
        setVisible(true)
    }
    const closeModal = e => {
        setVisible(false)
        setMode('login')
        dispatch({
            type: 'RESET'
        })
    }
    const changeModal = (e, mode) => {
        setMode(mode)
    }

    const login = async (e) => {
        setLoading(true)
        const { username, password } = logForm
        const response = await axios({
            method: 'post',
            url: `${USER_SERVICE}/users/jwt`,
            data: {
                username,
                password: sha256(md5(password))
            },
            responseType: 'json'
        })
            .then(response => response.data)
            .catch(e => e.response.data)
        setLoading(false)

        const { success, token, message } = response
        if (!success) {
            return Message.error(message.includes('Password or username is incorrect')
                ? 'Tài khoản hoặc mật khẩu sai'
                : message
            )
        }

        localStorage.setItem('token', token)
        setVisible(false)
        window.location.reload()
    }

    const register = async (e) => {
        setLoading(true)
        const { firstName, lastName, phoneNumber, username, password, rePassword, address, email } = logForm
        if (password !== rePassword) {
            setLoading(false)
            return Message.error('Mật khẩu không khớp')
        }

        if (!regex.phoneNumber.exec(phoneNumber)) {
            setLoading(false)
            return Message.error('Số điện thoại sai')
        }

        if (!regex.username.exec(username)) {
            setLoading(false)
            return Message.error('Tài khoản từ 3-30 ký tự, bao gồm chữ và số')
        }

        if (!regex.password.exec(password)) {
            setLoading(false)
            return Message.error('Mật khẩu gồm ít nhất 8 ký tự')
        }

        if (email && !regex.email.exec(email)) {
            setLoading(false)
            return Message.error('Email sai')
        }

        const data = Object.assign(
            {
                firstName,
                lastName,
                phoneNumber,
                username,
                password: sha256(md5(password))
            },
            !address ? {} : { address },
            !email ? {} : { email }
        )

        const response = await axios({
            method: 'post',
            url: `${USER_SERVICE}/users/`,
            data,
            responseType: 'json'
        })
            .then(response => response.data)
            .catch(e => e.response.data)


        const { success, message } = response
        if (!success) {
            setLoading(false)
            return Message.error(
                message.includes(`User with username ${username} already exists`) ? 'Tài khoản đã tồn tại' :
                    message.includes(`User with phone number ${phoneNumber} already exists`) ? 'Số điện thoại đã được sử dụng' : message
            )
        }
        else {
            Message.success(`Người dùng ${firstName} ${lastName} đã đăng ký tài khoản ${username} thành công`)
        }

        setTimeout(() => {
            setLoading(false)
            setMode('login')
        }, 3000)
    }

    const forgot = async (e) => {

    }

    return (
        <div>
            <Button type="primary" onClick={showModal} id="btn_login">
                <strong>Đăng nhập / Đăng ký</strong>
            </Button>
            <Modal
                visible={visible}
                title={mode === 'forgot' ? "Lấy lại mật khẩu" : mode === 'login' ? "Đăng nhập" : "Đăng ký"}
                onOk={mode === 'login' ? login : mode === 'register' ? register : forgot}
                onCancel={closeModal}
                confirmLoading={loading}
                footer={[
                    <Button key="back" onClick={e => changeModal(e, mode === 'login' ? 'register' : 'login')}>
                        {mode !== 'login' ? "Đăng nhập" : "Đăng ký"}
                    </Button>,
                    <Button key="submit" type="primary" loading={loading}
                        onClick={mode === 'login' ? login : mode === 'register' ? register : forgot}
                    >
                        OK
                    </Button>
                ]}
            >
                {
                    mode === 'forgot' ? <ForgotForm onUsernameChange={onUsernameChange}></ForgotForm> : mode === 'login'
                        ? <LoginForm
                            onForgot={e => changeModal(e, 'forgot')}
                            onUsernameChange={onUsernameChange}
                            onPasswordChange={onPasswordChange}
                        />
                        : <RegisterForm
                            onFirstNameChange={onFirstNameChange}
                            onLastNameChange={onLastNameChange}
                            onPhoneNumberChange={onPhoneNumberChange}
                            onUsernameChange={onUsernameChange}
                            onPasswordChange={onPasswordChange}
                            onRePasswordChange={onRePasswordChange}
                            onAddressChange={onAddressChange}
                            onEmailChange={onEmailChange}
                        />
                }
            </Modal>
        </div>
    )
}

export default LogModal