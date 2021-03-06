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
        return Message.error('L???i h??? th???ng, vui l??ng th??? l???i sau!')
      }

      const { success, message } = response
      if (!success) {
        setLoading(false)
        return Message.error(message)
      } else {
        Message.success(`Ng?????i d??ng ${firstName} ${lastName} ???? ????ng k?? t??i kho???n ${username} th??nh c??ng`)
        setLoading(false)
        setPayload(initial)
        setStatus(initial)
        dispatch(_changeLogForm('login'))
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
        <Form.Item label="T??n" hasFeedback required validateStatus={status.firstName} help={suggest.firstName}>
          <Input name="firstName" allowClear={true} onChange={handleValueChange} onPressEnter={register} />
        </Form.Item>

        {/* LAST NAME */}
        <Form.Item label="H??? v?? ?????m" hasFeedback required validateStatus={status.lastName} help={suggest.lastName}>
          <Input name="lastName" allowClear={true} onChange={handleValueChange} onPressEnter={register} />
        </Form.Item>

        {/* PHONE NUMBER */}
        <Form.Item
          label="S??? ??i???n tho???i"
          hasFeedback
          required
          validateStatus={status.phoneNumber}
          help={suggest.phoneNumber}
        >
          <Input name="phoneNumber" allowClear={true} onChange={handleValueChange} onPressEnter={register} />
        </Form.Item>

        {/* USERNAME */}
        <Form.Item label="T??i kho???n" hasFeedback required validateStatus={status.username} help={suggest.username}>
          <Input name="username" allowClear={true} onChange={handleValueChange} onPressEnter={register} />
        </Form.Item>

        {/* PASSWORD */}
        <Form.Item label="M???t kh???u" hasFeedback required validateStatus={status.password} help={suggest.password}>
          <Input.Password name="password" allowClear={true} onChange={handleValueChange} onPressEnter={register} />
        </Form.Item>

        {/* RE PASSWORD */}
        <Form.Item
          label="Nh???p l???i m???t kh???u"
          hasFeedback
          required
          validateStatus={status.rePassword}
          help={suggest.rePassword}
        >
          <Input.Password name="rePassword" allowClear={true} onChange={handleValueChange} onPressEnter={register} />
        </Form.Item>

        {/* ADDRESS */}
        <Form.Item label="?????a ch???" hasFeedback validateStatus={status.address} help={suggest.address}>
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
              ????ng nh???p
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
              ????ng k??
            </Button>
          </Col>
        </Row>
      </Form>
    </Spin>
  )
}

export default RegisterForm
