import { Form, Input, Checkbox, Button } from 'antd'
import { useSelector, useDispatch } from 'react-redux'

const LoginForm = props => {
    const { onForgot, onUsernameChange, onPasswordChange } = props

    return (
        <Form
            name="login"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            autoComplete="off"
        >
            <Form.Item
                label="Tên đăng nhập"
                name="username"
                type="string"
                rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]}
            >
                <Input onChange={onUsernameChange} allowClear={true} />
            </Form.Item>

            <Form.Item
                label="Mật khẩu"
                name="password"
                type="string"
                rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
            >
                <Input.Password onChange={onPasswordChange} allowClear={true} />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                <Checkbox>Nhớ tài khoản</Checkbox>
            </Form.Item>

            <Form.Item name="forgot" wrapperCol={{ offset: 8, span: 16 }}>
                <Button id="btn_forgot" type="link" htmlType="button" onClick={onForgot}>Quên mật khẩu?</Button>
            </Form.Item>
        </Form>
    )
}

export default LoginForm