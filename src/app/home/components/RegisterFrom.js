import { Form, Input, Checkbox } from 'antd'

const RegisterForm = () => {
    return (
        <Form
            name="basic"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            autoComplete="off"
        >
            <Form.Item
                label="First name"
                name="firstname"
                rules={[{ required: true, message: 'Please input your first name!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Last name"
                name="lastname"
                rules={[{ required: true, message: 'Please input your last name!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Phone number"
                name="phone"
                rules={[{ required: true, message: 'Please input your phone number!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="username"
                name="username"
                rules={[{ required: true, message: 'Please input your phone username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                label="Re assword"
                name="re-password"
                rules={[{ required: true, message: 'Please input your re password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                label="Re assword"
                name="re-password"
                rules={[{ required: true, message: 'Please input your re password!' }]}
            >
                <Input.Password />
            </Form.Item>
        </Form>
    )
}

export default RegisterForm