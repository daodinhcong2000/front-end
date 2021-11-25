import { Form, Input } from 'antd'

const ForgotForm = props => {
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
                <Input />
            </Form.Item>
        </Form>
    )
}

export default ForgotForm