import { Form, Input, Button, Row, Col, message as Message, Spin } from 'antd'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import validateInput from '../../../helpers/validating/validateInput'
import hashPassword from '../../../helpers/validating/hashPassword'
import { _changeLogForm } from '../../../redux/actions/logFormActions'
import { register as _register } from '../../../services/api/userApi'

const RegisterForm = (props) => {
  const dispatch = useDispatch()
  const { onRegister } = props

  const initial = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    username: '',
    password: '',
    rePassword: '',
    address: '',
    email: ''
  }
  const [payload, setPayload] = useState(initial)
  const [status, setStatus] = useState(initial)
  const [suggest, setSuggest] = useState(initial)
  const [loading, setLoading] = useState(false)

  const handleValueChange = (e) => {
    setStatus({ ...status, [e.target.name]: '' })
    setSuggest({ ...suggest, [e.target.name]: '' })
    setPayload({ ...payload, [e.target.name]: e.target.value.trim() })
  }

  const handleLogin = (e) => {
    setPayload(initial)
    setStatus(initial)
    setSuggest(initial)
    dispatch(_changeLogForm('login'))
  }

  const register = async (e) => {
    setLoading(true)

    const validated = validateInput(payload)
    let errorCount = 0
    const newStatus = {}
    const newSuggest = {}
    const keys = Object.keys(initial)

    keys.forEach((key) => {
      if (validated[`${key}`]) {
        newStatus[`${key}`] = 'error'
        newSuggest[`${key}`] = validated[`${key}`]
        errorCount++
      } else {
        newStatus[`${key}`] = 'success'
      }
    })

    setStatus(newStatus)
    setSuggest(newSuggest)

    if (!errorCount) {
      const { firstName, lastName, phoneNumber, username, password, email, address } = payload
      const vPayload = Object.assign(
        {
          firstName,
          lastName,
          phoneNumber,
          username: username.toLowerCase(),
          password: hashPassword(password)
        },
        email ? { email } : {},
        address ? { address } : {}
      )
      const { status, data: response } = await _register(vPayload)
        .then((res) => res)
        .catch((e) => e.response)

      if (status >= 500) {
        setLoading(false)
        return Message.error('Lỗi hệ thống, vui lòng thử lại sau!')
      }

      const { success, message } = response
      if (!success) {
        setLoading(false)
        return Message.error(message)
      } else {
        Message.success(`Người dùng ${firstName} ${lastName} đã đăng ký tài khoản ${username} thành công`)
        setTimeout(() => {
          setLoading(false)
          setPayload(initial)
          setStatus(initial)
          dispatch(_changeLogForm('login'))
        }, 3000)
      }
    } else {
      setLoading(false)
    }
  }

  return (
    <Spin spinning={loading}>
      <Form
        name="register"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 14 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        style={{ textAlign: 'center' }}
      >
        {/* FIRST NAME */}
        <Form.Item label="Tên" hasFeedback required validateStatus={status.firstName} help={suggest.firstName}>
          <Input name="firstName" allowClear={true} onChange={handleValueChange} onPressEnter={register} />
        </Form.Item>

        {/* LAST NAME */}
        <Form.Item label="Họ và đệm" hasFeedback required validateStatus={status.lastName} help={suggest.lastName}>
          <Input name="lastName" allowClear={true} onChange={handleValueChange} onPressEnter={register} />
        </Form.Item>

        {/* PHONE NUMBER */}
        <Form.Item
          label="Số điện thoại"
          hasFeedback
          required
          validateStatus={status.phoneNumber}
          help={suggest.phoneNumber}
        >
          <Input name="phoneNumber" allowClear={true} onChange={handleValueChange} onPressEnter={register} />
        </Form.Item>

        {/* USERNAME */}
        <Form.Item label="Tài khoản" hasFeedback required validateStatus={status.username} help={suggest.username}>
          <Input name="username" allowClear={true} onChange={handleValueChange} onPressEnter={register} />
        </Form.Item>

        {/* PASSWORD */}
        <Form.Item label="Mật khẩu" hasFeedback required validateStatus={status.password} help={suggest.password}>
          <Input.Password name="password" allowClear={true} onChange={handleValueChange} onPressEnter={register} />
        </Form.Item>

        {/* RE PASSWORD */}
        <Form.Item
          label="Nhập lại mật khẩu"
          hasFeedback
          required
          validateStatus={status.rePassword}
          help={suggest.rePassword}
        >
          <Input.Password name="rePassword" allowClear={true} onChange={handleValueChange} onPressEnter={register} />
        </Form.Item>

        {/* ADDRESS */}
        <Form.Item label="Địa chỉ" hasFeedback validateStatus={status.address} help={suggest.address}>
          <Input name="address" allowClear={true} onChange={handleValueChange} onPressEnter={register} />
        </Form.Item>

        {/* EMAIL */}
        <Form.Item label="Email" hasFeedback validateStatus={status.email} help={suggest.email}>
          <Input name="email" allowClear={true} onChange={handleValueChange} onPressEnter={register} />
        </Form.Item>

        <Row>
          <Col span={12}>
            <Button
              size="large"
              disabled={loading}
              shape="round"
              onClick={handleLogin}
              style={{
                textAlign: 'center',
                background: '#41a9ff',
                color: 'white',
                fontSize: '130%',
                height: '50px',
                width: '60%'
              }}
            >
              Đăng nhập
            </Button>
          </Col>
          <Col span={12}>
            <Button
              size="large"
              shape="round"
              onClick={register}
              style={{
                textAlign: 'center',
                background: 'orange',
                color: 'white',
                fontSize: '130%',
                height: '50px',
                width: '60%'
              }}
            >
              Đăng ký
            </Button>
          </Col>
        </Row>
      </Form>
    </Spin>
  )
}

export default RegisterForm
