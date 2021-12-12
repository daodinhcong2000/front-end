import { Form, Input, Row, Col, Button } from 'antd'
import { useDispatch } from 'react-redux'

import { _changeLogForm } from '../../../redux/actions/logFormActions'

const ForgotForm = (props) => {
  const dispatch = useDispatch()

  const handleLogIn = (e) => {
    dispatch(_changeLogForm('login'))
  }

  const handleRegister = (e) => {
    dispatch(_changeLogForm('register'))
  }

  return (
    <Form
      name="forgot"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      autoComplete="off"
    >
      <Form.Item
        label="Tên đăng nhập"
        name="username"
        rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]}
      >
        <Input
          allowClear={true}
          onChange={(e) =>
            dispatch({
              type: 'CHANGE_FORM',
              payload: {
                username: e.target.value.trim().toLowerCase()
              }
            })
          }
        />
      </Form.Item>

      <Row style={{ textAlign: 'center' }}>
        <Col span={12}>
          <Button type="link" onClick={handleLogIn}>
            Đã có tài khoản?
          </Button>
        </Col>
        <Col span={12}>
          <Button type="link" onClick={handleRegister}>
            Đăng ký
          </Button>
        </Col>
      </Row>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }} style={{ margin: '10px' }}>
        <Button
          size="large"
          shape="round"
          style={{
            textAlign: 'center',
            background: 'orange',
            color: 'white',
            fontSize: '130%',
            height: '50px',
            width: '50%'
          }}
        >
          {' '}
          Lấy mật khẩu
        </Button>
      </Form.Item>
    </Form>
  )
}

export default ForgotForm
