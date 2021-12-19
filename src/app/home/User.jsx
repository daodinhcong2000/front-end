import { Tabs, Col, Row, Spin, Form, Input, Button, message as Message } from 'antd'
import Header from './components/Header'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import hashPassword from '../../helpers/validating/hashPassword'
import { changePassword, changeInformation } from '../../services/api/customerApi'
import { _logout } from '../../redux/actions/userActions'

const User = (props) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const { loading, username, firstName, lastName, email, phoneNumber, address, fullName } = user
  const [tab, setTab] = useState('info')

  const initialPassword = {
    oldPassword: '',
    newPassword: '',
    rePassword: ''
  }
  const [passwordPayload, setPasswordPayload] = useState(initialPassword)
  const [passwordStatus, setPasswordStatus] = useState(initialPassword)
  const [passwordSuggest, setPasswordSuggest] = useState(initialPassword)
  const [changingPassword, setChangingPassword] = useState(false)

  const initialInfo = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: ''
  }
  const [infoPayload, setInfoPayload] = useState(initialInfo)
  const [infoStatus, setInfoStatus] = useState(initialInfo)
  const [infoSuggest, setInfoSuggest] = useState(initialInfo)
  const [changingInfo, setChangingInfo] = useState(false)
  const [changedInfo, setChangedInfo] = useState(false)
  useEffect(() => {
    if (username) {
      setInfoPayload({
        username,
        firstName,
        lastName,
        email,
        phoneNumber,
        address
      })
    }
  }, [username])

  useEffect(() => {
    const changed =
      firstName !== infoPayload.firstName ||
      lastName !== infoPayload.lastName ||
      phoneNumber !== infoPayload.phoneNumber ||
      email !== infoPayload.email ||
      address !== infoPayload.address
    console.log(changed)
    setChangedInfo(changed)
  }, [infoPayload])

  const handleChangeTab = (tab) => {
    // infoActions.handleCancel()
    // passwordActions.handleCancel()
    setTab(tab)
  }

  const infoActions = {
    handleChangeValue: (e) => {
      setInfoStatus({ ...infoStatus, [e.target.name]: '' })
      setInfoSuggest({ ...infoSuggest, [e.target.name]: '' })
      setInfoPayload({ ...infoPayload, [e.target.name]: e.target.value || user[`${e.target.name}`] })
    },

    handleCancel: () => {
      setInfoStatus(initialInfo)
      setInfoSuggest(initialInfo)
      setInfoPayload({
        username,
        firstName,
        lastName,
        email,
        phoneNumber,
        address
      })
    },

    handleChangeInfo: (e) => {
      setChangingInfo(true)

      const phoneNumberRegex = /^([+84|84|0]+([35789]))+([0-9]{8})$/
      const emailRegex = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/

      const { firstName, lastName, email, address, phoneNumber } = infoPayload
      if (!emailRegex.exec(email) || !phoneNumberRegex.exec(phoneNumber)) {
        if (!emailRegex.exec(email)) {
          setInfoStatus({ ...infoStatus, email: 'error' })
          setInfoSuggest({ ...infoStatus, email: 'Email sai!' })
        }

        if (!phoneNumberRegex.exec(phoneNumber)) {
          setInfoStatus({ ...infoStatus, phoneNumber: 'error' })
          setInfoSuggest({ ...infoStatus, phoneNumber: 'Số điện thoại sai!' })
        }

        setChangingInfo(false)
      } else {
        changeInformation({ firstName, lastName, phoneNumber, email, address })
          .then((res) => {
            Message.success('Đổi thông tin thành công!')
            setChangingInfo(false)
            setTimeout(() => {
              window.location.href = '/'
            }, 1000)
          })
          .catch((e) => {
            const { status, data } = e.response
            if (status >= 500) {
              Message.error('Lỗi hệ thống, vui lòng thử lại sau!')
            } else {
              const { message } = data
              Message.error(message)
            }
            setChangingInfo(false)
          })
      }
    }
  }

  const passwordActions = {
    handleChangeValue: (e) => {
      setPasswordStatus({ ...passwordStatus, [e.target.name]: '' })
      setPasswordSuggest({ ...passwordSuggest, [e.target.name]: '' })
      setPasswordPayload({ ...passwordPayload, [e.target.name]: e.target.value })
    },

    handleCancel: () => {
      setPasswordStatus(initialPassword)
      setPasswordSuggest(initialPassword)
      setPasswordPayload(initialPassword)
    },

    handleChangePassword: (e) => {
      const validatePassword = (pw) => {
        const regex = /.{8,}/
        return regex.exec(pw)
      }

      const { oldPassword, newPassword, rePassword } = passwordPayload

      setChangingPassword(true)
      if (newPassword !== rePassword) {
        setPasswordStatus({
          ...passwordStatus,
          rePassword: 'error'
        })
        setPasswordSuggest({
          ...passwordSuggest,
          rePassword: 'Mật khẩu không khớp!'
        })
        setChangingPassword(false)
      } else if (!validatePassword(newPassword)) {
        setPasswordStatus({
          ...passwordStatus,
          newPassword: 'error',
          rePassword: 'error'
        })
        setPasswordSuggest({
          ...passwordSuggest,
          newPassword: 'Mật khẩu cần ít nhất 8 ký tự!',
          rePassword: 'Mật khẩu cần ít nhất 8 ký tự!'
        })
        setChangingPassword(false)
      } else if (newPassword === oldPassword) {
        setPasswordStatus({
          ...passwordStatus,
          newPassword: 'error',
          rePassword: 'error'
        })
        setPasswordSuggest({
          ...passwordSuggest,
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
              <Spin spinning={changingInfo}>
                <Form
                  name="changeInfo"
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 14 }}
                  initialValues={{ remember: true }}
                  autoComplete="off"
                  style={{ textAlign: 'center' }}
                >
                  <Form.Item
                    label="Tên"
                    hasFeedback
                    validateStatus={infoStatus.firstName}
                    help={infoSuggest.firstName}
                    value={infoPayload.name}
                  >
                    <Input
                      name="firstName"
                      allowClear={true}
                      onChange={infoActions.handleChangeValue}
                      placeholder={firstName}
                    />
                  </Form.Item>

                  <Form.Item
                    label="Họ và đệm"
                    hasFeedback
                    validateStatus={infoStatus.lastName}
                    help={infoSuggest.lastName}
                  >
                    <Input
                      name="lastName"
                      allowClear={true}
                      onChange={infoActions.handleChangeValue}
                      placeholder={lastName}
                    />
                  </Form.Item>

                  <Form.Item
                    label="Số điện thoại"
                    hasFeedback
                    validateStatus={infoStatus.phoneNumber}
                    help={infoSuggest.phoneNumber}
                  >
                    <Input
                      name="phoneNumber"
                      allowClear={true}
                      onChange={infoActions.handleChangeValue}
                      placeholder={phoneNumber}
                    />
                  </Form.Item>

                  <Form.Item label="Địa chỉ" hasFeedback validateStatus={infoStatus.address} help={infoSuggest.address}>
                    <Input
                      name="address"
                      allowClear={true}
                      onChange={infoActions.handleChangeValue}
                      placeholder={address}
                    />
                  </Form.Item>

                  <Form.Item label="Email" hasFeedback validateStatus={infoStatus.email} help={infoSuggest.email}>
                    <Input
                      name="email"
                      allowClear={true}
                      onChange={infoActions.handleChangeValue}
                      placeholder={email}
                    />
                  </Form.Item>

                  <Button shape="round" size="large" onClick={infoActions.handleChangeInfo} disabled={!changedInfo}>
                    Đổi thông tin
                  </Button>
                </Form>
              </Spin>
            </Tabs.TabPane>

            <Tabs.TabPane tab="Đổi mật khẩu" key="changePassword">
              <Spin spinning={changingPassword}>
                <Form
                  name="changePassword"
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 14 }}
                  initialValues={{ remember: true }}
                  autoComplete="off"
                  style={{ textAlign: 'center' }}
                >
                  <Form.Item
                    label="Mật khẩu cũ"
                    hasFeedback
                    validateStatus={passwordStatus.oldPassword}
                    help={passwordSuggest.oldPassword}
                    required
                  >
                    <Input.Password name="oldPassword" allowClear={true} onChange={passwordActions.handleChangeValue} />
                  </Form.Item>

                  <Form.Item
                    label="Mật khẩu mới"
                    hasFeedback
                    validateStatus={passwordStatus.newPassword}
                    help={passwordSuggest.newPassword}
                    required
                  >
                    <Input.Password name="newPassword" allowClear={true} onChange={passwordActions.handleChangeValue} />
                  </Form.Item>

                  <Form.Item
                    label="Nhập lại"
                    hasFeedback
                    validateStatus={passwordStatus.rePassword}
                    help={passwordSuggest.rePassword}
                    required
                  >
                    <Input.Password name="rePassword" allowClear={true} onChange={passwordActions.handleChangeValue} />
                  </Form.Item>

                  <Button shape="round" size="large" onClick={passwordActions.handleChangePassword}>
                    Đổi mật khẩu
                  </Button>
                </Form>
              </Spin>
            </Tabs.TabPane>
          </Tabs>
        </Col>
      </Spin>
    </>
  )
}

export default User
