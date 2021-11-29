import { Form, Input, Button, Row, Col, Image } from 'antd'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { _changeLogForm } from '../../../redux/actions/logFormActions'
import { _login, _setStatus } from '../../../redux/actions/userActions'

const LoginForm = props => {
    const dispatch = useDispatch()

    const initial = { username: '', password: '' }
    const [loading, setLoading] = useState(false)
    const [payload, setPayload] = useState(initial)
    const { status, error } = useSelector(state => state.user)

    useEffect(() => {
        if (status !== 'validating') {
            setLoading(false)
        }
    }, [status])


    const handleValueChange = e => {
        setPayload({ ...payload, [e.target.name]: e.target.value.trim() })
        dispatch(_setStatus('', ''))
    }
    const handleRegister = e => {
        setPayload(initial)
        dispatch(_changeLogForm('register'))
    }
    const handleForgot = e => {
        setPayload(initial)
        dispatch(_changeLogForm('forgot'))
    }

    const login = e => {
        setLoading(true)
        dispatch(_login(payload.username, payload.password))
    }

    return (
        <Form
            name="login"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            autoComplete="off"
        >

            {/* USERNAME */}
            <Form.Item
                label="Tên đăng nhập"
                hasFeedback
                name="username"
                type="string"
                validateStatus={status}
                help={error}
                rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]}
            >
                <Input allowClear={true} name='username' onChange={handleValueChange} onPressEnter={login} />
            </Form.Item>

            {/* PASSWORD */}
            <Form.Item
                label="Mật khẩu"
                hasFeedback
                name="password"
                type="string"
                validateStatus={status}
                help={error}
                rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
            >
                <Input.Password allowClear={true} name='password' onChange={handleValueChange} onPressEnter={login} />
            </Form.Item>

            {/* REGISTER / FORGOT */}
            <Row>
                <Col span={12}><Button span={12} type="link" htmlType="button" onClick={handleRegister} style={{ width: '100%' }}>Chưa có tài khoản?</Button></Col>
                <Col span={12}><Button span={12} offset={12} type="link" htmlType="button" onClick={handleForgot} style={{ width: '100%' }}>Quên mật khẩu?</Button></Col>
            </Row>

            {/* LOGIN BUTTON */}
            <Form.Item wrapperCol={{ offset: 8, span: 16 }} style={{ marginBottom: '30px' }}>
                <Button size='large' loading={loading} shape='round' onClick={login}
                    style={{ textAlign: 'center', background: 'orange', color: 'white', fontSize: '130%', height: '50px', width: '50%' }}
                >
                    Đăng nhập
                </Button>
            </Form.Item>

            {/* THIRD-PARTY */}
            <Form.Item wrapperCol={{ span: 24 }} style={{ marginBottom: '0px' }}><Row>
                <Col span={6} offset={3} style={{ textAlign: 'center' }}>
                    <Button shape='circle' type='primary' style={{ width: '4em', height: '4em' }} >
                        <Image src='/icons/Google.png' preview={false} width={'3em'} height={'3em'} style={{ marginTop: '2px', marginLeft: '1px' }} />
                    </Button>
                </Col>
                <Col span={6} style={{ textAlign: 'center' }}>
                    <Button shape='circle' type='primary' style={{ width: '4em', height: '4em' }}>
                        <Image src='/icons/Facebook.png' preview={false} width={'3.5em'} height={'3.5em'} />
                    </Button>
                </Col>
                <Col span={6} style={{ textAlign: 'center' }}>
                    <Button shape='circle' type='primary' style={{ width: '4em', height: '4em' }}>
                        <Image src='/icons/Apple.png' preview={false} width={'3em'} height={'3em'} />
                    </Button>
                </Col>
            </Row></Form.Item>
            <hr />
        </Form>
    )
}

export default LoginForm