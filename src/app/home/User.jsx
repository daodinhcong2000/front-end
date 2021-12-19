import { Tabs, Col, Row, Spin, Form, Input, Button, message as Message } from 'antd'
import Header from './components/Header'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import hashPassword from '../../helpers/validating/hashPassword'
import { changePassword } from '../../services/api/customerApi'
import { _logout } from '../../redux/actions/userActions'

const User = (props) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { loading, username, firstName, lastName, email, phoneNumber, address, fullName } = useSelector(
    (state) => state.user
  )
  const [tab, setTab] = useState('info')
  const initial = {
    oldPassword: '',
    newPassword: '',
    rePassword: ''
  }
  const [payload, setPayload] = useState(initial)
  const [status, setStatus] = useState(initial)
  const [suggest, setSuggest] = useState(initial)
  const [changingPassword, setChangingPassword] = useState(false)
  const [changingInfo, setChangingInfo] = useState(false)

  useEffect(() => {}, [])

  const handleChangeTab = (tab) => setTab(tab)

  const handleValueChange = (e) => {
    setStatus({ ...status, [e.target.name]: '' })
    setSuggest({ ...suggest, [e.target.name]: '' })
    setPayload({ ...payload, [e.target.name]: e.target.value })
  }

  const handleChangePassword = (e) => {
    const validatePassword = (pw) => {
      const regex = /.{8,}/
      return regex.exec(pw)
    }

    const { oldPassword, newPassword, rePassword } = payload

    setChangingPassword(true)
    if (newPassword !== rePassword) {
      setStatus({
        ...status,
        rePassword: 'error'
      })
      setSuggest({
        ...suggest,
        rePassword: 'Mật khẩu không khớp!'
      })
      setChangingPassword(false)
    } else if (!validatePassword(newPassword)) {
      setStatus({
        ...status,
        newPassword: 'error',
        rePassword: 'error'
      })
      setSuggest({
        ...suggest,
        newPassword: 'Mật khẩu cần ít nhất 8 ký tự!',
        rePassword: 'Mật khẩu cần ít nhất 8 ký tự!'
      })
      setChangingPassword(false)
    } else if (newPassword === oldPassword) {
      setStatus({
        ...status,
        newPassword: 'error',
        rePassword: 'error'
      })
      setSuggest({
        ...suggest,
        newPassword: 'Mật khẩu mới phải khác mật khẩu cũ!',
        rePassword: 'Mật khẩu mới phải khác mật khẩu cũ!'
      })
      setChangingPassword(false)
    } else {
      changePassword({
        oldPassword: hashPassword(oldPassword),
        newPassword: hashPassword(newPassword)
      })
        .then((res) => {
          Message.success('Đổi mật khẩu thành công!')
          setTimeout(() => {
            setChangingPassword(false)
            dispatch(_logout())
          }, 1000)
        })
        .catch((e) => {
          Message.error('Mật khẩu cũ không chính xác')
        })
    }
  }

  return (
    <>
      <Header />

      <section class="section-pagetop bg">
        <div class="container">
          <h2 class="title-page">{fullName}</h2>
        </div>
      </section>
      <Spin spinning={loading}>
        <Col span={10} offset={1}>
          <Tabs defaultActiveKey={tab} onChange={handleChangeTab}>
            <Tabs.TabPane tab="Thông tin cơ bản" key="info">
              Thông tin cá nhân
            </Tabs.TabPane>

            <Tabs.TabPane tab="Đổi mật khẩu" key="changePassword">
              <Form
                name="register"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 14 }}
                initialValues={{ remember: true }}
                autoComplete="off"
                style={{ textAlign: 'center' }}
              >
                <Form.Item
                  label="Mật khẩu cũ"
                  hasFeedback
                  validateStatus={status.oldPassword}
                  help={suggest.oldPassword}
                  required
                >
                  <Input.Password name="oldPassword" allowClear={true} onChange={handleValueChange} />
                </Form.Item>

                <Form.Item
                  label="Mật khẩu mới"
                  hasFeedback
                  validateStatus={status.newPassword}
                  help={suggest.newPassword}
                  required
                >
                  <Input.Password name="newPassword" allowClear={true} onChange={handleValueChange} />
                </Form.Item>

                <Form.Item
                  label="Nhập lại"
                  hasFeedback
                  validateStatus={status.rePassword}
                  help={suggest.rePassword}
                  required
                >
                  <Input.Password name="rePassword" allowClear={true} onChange={handleValueChange} />
                </Form.Item>

                <Button shape="round" size="large" onClick={handleChangePassword}>
                  Đổi mật khẩu
                </Button>
              </Form>
            </Tabs.TabPane>
          </Tabs>
        </Col>
      </Spin>
    </>
  )
}

export default User
