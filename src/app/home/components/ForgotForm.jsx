import { Form, Input } from 'antd'
import { useDispatch } from 'react-redux'

const ForgotForm = (props) => {
  const dispatch = useDispatch()
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
    </Form>
  )
}

export default ForgotForm
