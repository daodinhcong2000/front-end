import { Tabs, Col, Modal, Spin, Form, Input, Button, message as Message } from 'antd'
import Header from './Header'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import hashPassword from '../../../helpers/validating/hashPassword'
import { changePassword, changeInformation } from '../../../services/api/customerApi'
import { _logout } from '../../../redux/actions/userActions'

const User = (props) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const { loading, username, firstName, lastName, email, phoneNumber, address, fullName } = user
  const [tab, setTab] = useState('info')

  const [visible, setVisible] = useState(false)
  const showModal = (e) => {
    setVisible(true)
  }
  const closeModal = (e) => {
    setVisible(false)
  }

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
          setInfoSuggest({ ...infoStatus, phoneNumber: 'S??? ??i???n tho???i sai!' })
        }

        setChangingInfo(false)
      } else {
        changeInformation({ firstName, lastName, phoneNumber, email, address })
          .then((res) => {
            Message.success('?????i th??ng tin th??nh c??ng!')
            setChangingInfo(false)
            setTimeout(() => {
              window.location.reload()
            }, 1000)
          })
          .catch((e) => {
            const { status, data } = e.response
            if (status >= 500) {
              Message.error('L???i h??? th???ng, vui l??ng th??? l???i sau!')
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
          rePassword: 'M???t kh???u kh??ng kh???p!'
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
          newPassword: 'M???t kh???u c???n ??t nh???t 8 k?? t???!',
          rePassword: 'M???t kh???u c???n ??t nh???t 8 k?? t???!'
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
          newPassword: 'M???t kh???u m???i ph???i kh??c m???t kh???u c??!',
          rePassword: 'M???t kh???u m???i ph???i kh??c m???t kh???u c??!'
        })
        setChangingPassword(false)
      } else {
        changePassword({
          oldPassword: hashPassword(oldPassword),
          newPassword: hashPassword(newPassword)
        })
          .then((res) => {
            Message.success('?????i m???t kh???u th??nh c??ng!')
            setTimeout(() => {
              setChangingPassword(false)
              dispatch(_logout())
            }, 1000)
          })
          .catch((e) => {
            Message.error('M???t kh???u c?? kh??ng ch??nh x??c')
            setChangingPassword(false)
          })
      }
    }
  }

  return (
    <>
      <Button type="text" style={{ fontWeight: 'bold' }} onClick={showModal}>
        {fullName}
      </Button>

      <Modal visible={visible} title={fullName} onCancel={closeModal} closeable={true} footer={null}>
        <Spin spinning={loading}>
          <Tabs defaultActiveKey={tab} onChange={handleChangeTab}>
            <Tabs.TabPane tab="Th??ng tin c?? b???n" key="info">
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
                    label="T??n"
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
                    label="H??? v?? ?????m"
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
                    label="S??? ??i???n tho???i"
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

                  <Form.Item label="?????a ch???" hasFeedback validateStatus={infoStatus.address} help={infoSuggest.address}>
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
                    ?????i th??ng tin
                  </Button>
                </Form>
              </Spin>
            </Tabs.TabPane>

            <Tabs.TabPane tab="?????i m???t kh???u" key="changePassword">
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
                    label="M???t kh???u c??"
                    hasFeedback
                    validateStatus={passwordStatus.oldPassword}
                    help={passwordSuggest.oldPassword}
                    required
                  >
                    <Input.Password name="oldPassword" allowClear={true} onChange={passwordActions.handleChangeValue} />
                  </Form.Item>

                  <Form.Item
                    label="M???t kh???u m???i"
                    hasFeedback
                    validateStatus={passwordStatus.newPassword}
                    help={passwordSuggest.newPassword}
                    required
                  >
                    <Input.Password name="newPassword" allowClear={true} onChange={passwordActions.handleChangeValue} />
                  </Form.Item>

                  <Form.Item
                    label="Nh???p l???i"
                    hasFeedback
                    validateStatus={passwordStatus.rePassword}
                    help={passwordSuggest.rePassword}
                    required
                  >
                    <Input.Password name="rePassword" allowClear={true} onChange={passwordActions.handleChangeValue} />
                  </Form.Item>

                  <Button shape="round" size="large" onClick={passwordActions.handleChangePassword}>
                    ?????i m???t kh???u
                  </Button>
                </Form>
              </Spin>
            </Tabs.TabPane>
          </Tabs>
        </Spin>
      </Modal>
    </>
  )
}

export default User
