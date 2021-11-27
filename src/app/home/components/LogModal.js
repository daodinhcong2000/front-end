import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Modal, Button, message as Message } from 'antd'

import axios from 'axios'
import sha256 from 'js-sha256'
import md5 from 'md5'

import LoginForm from './LoginForm'
import RegisterForm from './RegisterFrom'
import ForgotForm from './ForgotForm'

const validateInput = require('../../../helpers/validating/validateInput')

const USER_SERVICE = process.env.REACT_APP_API_USER_SERVICE || 'https://accommerce.cuongdm.tech/user-service/api'


const LogModal = props => {
    const logForm = useSelector(state => state.logForm)
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(false)
    const [visible, setVisible] = useState(false)
    const [mode, setMode] = useState('login')

    const showModal = e => {
        setVisible(true)
    }
    const closeModal = e => {
        setVisible(false)
        setMode('login')
        dispatch({
            type: 'CLEAR_FORM'
        })
    }
    const changeModal = (e, mode) => {
        setMode(mode)
        dispatch({
            type: 'CLEAR_FORM'
        })
    }

    const login = async (e) => {
        const { username, password } = logForm
        setLoading(true)
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

        const { success, token, message } = response
        if (!success) {
            setLoading(false)
            return Message.error(message.includes('Password or username is incorrect')
                ? 'Tài khoản hoặc mật khẩu sai'
                : message
            )
        }

        const { data: userData } = await axios({
            method: 'get',
            url: `${USER_SERVICE}/users/self`,
            headers: {
                'Authorization': token,
                'Content-Type': 'text/plain'
            }
        })
        const { data } = userData

        const { firstName, lastName, roles } = data

        dispatch({
            type: 'LOG_IN',
            payload: {
                token,
                username,
                user: `${firstName} ${lastName}`,
                roles
            }
        })

        setLoading(false)
        setVisible(false)
    }

    const register = async (e) => {
        setLoading(true)
        const { firstName, lastName, phoneNumber, username, password, rePassword, address, email } = logForm
        const { message: typeMessage } = validateInput(logForm)
        
        if (typeMessage) {
            setLoading(false)
            return Message.error(typeMessage)
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
            switch (message) {
                case (message.includes(`User with username ${username} already exists`)): {
                    return Message.error('Tài khoản đã tồn tại')
                }

                case (message.includes(`User with phone number ${phoneNumber} already exists`)): {
                    return Message.error('Số điện thoại đã được sử dụng')
                }

                default: {
                    return Message.error(message)
                }
            }
        }
        else {
            Message.success(`Người dùng ${firstName} ${lastName} đã đăng ký tài khoản ${username} thành công`)
        }

        setTimeout(() => {
            setLoading(false)
            setMode('login')
            dispatch({
                type: 'RESET'
            })
        }, 3000)
    }

    const forgot = async (e) => {

    }

    return (
        <div>
            <Button type="text" id="btn_login"
                color='#2774f0'
                onClick={showModal}
            >
                Đăng nhập
            </Button>
            <Modal
                visible={visible}
                title={mode === 'forgot' ? "Lấy lại mật khẩu" : mode === 'login' ? "Đăng nhập" : "Đăng ký"}
                onOk={mode === 'login' ? login : mode === 'register' ? register : forgot}
                onCancel={closeModal}
                confirmLoading={loading}
                closeable={false}
                footer={[
                    <Button key="back" onClick={e => changeModal(e, mode === 'login' ? 'register' : 'login')}>
                        {mode !== 'login' ? "Đăng nhập" : "Đăng ký"}
                    </Button>,
                    <Button key="submit" type="primary" loading={loading}
                        onClick={mode === 'login' ? login : mode === 'register' ? register : forgot}
                    >
                        {mode === 'login' ? "Đăng nhập" : mode === 'register' ? "Đăng ký" : "Lấy mật khẩu"}
                    </Button>
                ]}
            >
                {
                    mode === 'forgot' ? <ForgotForm /> : mode === 'login'
                        ? <LoginForm onForgot={e => changeModal(e, 'forgot')} onLogin={login} />
                        : <RegisterForm onRegister={register} />
                }
            </Modal>
        </div>
    )
}

export default LogModal