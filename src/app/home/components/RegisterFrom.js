import { Form, Input } from 'antd'

const RegisterForm = props => {
    const {
        onFirstNameChange,
        onLastNameChange,
        onPhoneNumberChange,
        onUsernameChange,
        onPasswordChange,
        onRePasswordChange,
        onAddressChange,
        onEmailChange,
    } = props

    return (
        <Form
            name="register"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            autoComplete="off"
        >
            <Form.Item
                label="Họ và đệm"
                name="firstName"
                rules={[{ required: true, message: 'Vui lòng nhập họ và đệm!' }]}
            >
                <Input onChange={onFirstNameChange} allowClear={true} />
            </Form.Item>

            <Form.Item
                label="Tên"
                name="lastName"
                rules={[{ required: true, message: 'Vui lòng nhập tên!' }]}
            >
                <Input onChange={onLastNameChange} allowClear={true} />
            </Form.Item>

            <Form.Item
                label="Số điện thoại"
                name="phoneNumber"
                rules={[{ required: true, message: 'Vui lòng nhập số điện thoại!' }]}
            >
                <Input onChange={onPhoneNumberChange} allowClear={true} />
            </Form.Item>

            <Form.Item
                label="Tài khoản"
                name="username"
                rules={[{ required: true, message: 'Vui lòng nhập tài khoản!' }]}
            >
                <Input onChange={onUsernameChange} allowClear={true} />
            </Form.Item>

            <Form.Item
                label="Mật khẩu"
                name="password"
                rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
            >
                <Input.Password onChange={onPasswordChange} allowClear={true} />
            </Form.Item>

            <Form.Item
                label="Nhập lại"
                name="re-password"
                rules={[{ required: true, message: 'Nhập lại mât khẩu!' }]}
            >
                <Input.Password onChange={onRePasswordChange} allowClear={true} />
            </Form.Item>

            <Form.Item
                label="Địa chỉ"
                name="address"
                // rules={[{ required: true, message: 'Nhập địa chỉ!' }]}
            >
                <Input onChange={onAddressChange} allowClear={true} />
            </Form.Item>

            <Form.Item
                label="Email"
                name="email"
                // rules={[{ required: true, message: 'Nhập email!' }]}
            >
                <Input onChange={onEmailChange} allowClear={true} />
            </Form.Item>
        </Form>
    )
}

export default RegisterForm