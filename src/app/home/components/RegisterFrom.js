import { Form, Input } from 'antd'
import { useDispatch } from 'react-redux'

const RegisterForm = props => {
    const dispatch = useDispatch()
    const { onRegister } = props

    return (
        <Form
            name="register"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            autoComplete="off"
        >
            {/* FIRST NAME */}
            <Form.Item
                label="Họ và đệm"
                name="firstName"
                rules={[{ required: true, message: 'Vui lòng nhập họ và đệm!' }]}
            >
                <Input allowClear={true} onPressEnter={onRegister}
                    onChange={e => {
                        dispatch({
                            type: 'CHANGE_FORM',
                            payload: { firstName: e.target.value.trim() }
                        })
                    }}
                />
            </Form.Item>

            {/* LAST NAME */}
            <Form.Item
                label="Tên"
                name="lastName"
                rules={[{ required: true, message: 'Vui lòng nhập tên!' }]}
            >
                <Input allowClear={true} onPressEnter={onRegister}

                    onChange={e => {
                        dispatch({
                            type: 'CHANGE_FORM',
                            payload: { lastName: e.target.value.trim() }
                        })
                    }}
                />
            </Form.Item>

            {/* PHONE NUMBER */}
            <Form.Item
                label="Số điện thoại"
                name="phoneNumber"
                rules={[{ required: true, message: 'Vui lòng nhập số điện thoại!' }]}
            >
                <Input allowClear={true} onPressEnter={onRegister}
                    onChange={e => {
                        dispatch({
                            type: 'CHANGE_FORM',
                            payload: { phoneNumber: e.target.value.trim().replace(' ', '') }
                        })
                    }}
                />
            </Form.Item>

            {/* USERNAME */}
            <Form.Item
                label="Tài khoản"
                name="username"
                rules={[{ required: true, message: 'Vui lòng nhập tài khoản!' }]}
            >
                <Input allowClear={true} onPressEnter={onRegister}
                    onChange={e => {
                        dispatch({
                            type: 'CHANGE_FORM',
                            payload: { username: e.target.value.trim().toLowerCase() }
                        })
                    }}
                />
            </Form.Item>

            {/* PASSWORD */}
            <Form.Item
                label="Mật khẩu"
                name="password"
                rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
            >
                <Input.Password allowClear={true} onPressEnter={onRegister}
                    onChange={e => {
                        dispatch({
                            type: 'CHANGE_FORM',
                            payload: { password: e.target.value }
                        })
                    }}
                />
            </Form.Item>

            {/* RE PASSWORD */}
            <Form.Item
                label="Nhập lại"
                name="re-password"
                rules={[{ required: true, message: 'Nhập lại mât khẩu!' }]}
            >
                <Input.Password allowClear={true} onPressEnter={onRegister}
                    onChange={e => {
                        dispatch({
                            type: 'CHANGE_FORM',
                            payload: { rePassword: e.target.value }
                        })
                    }} />
            </Form.Item>

            {/* ADDRESS */}
            <Form.Item
                label="Địa chỉ"
                name="address"
            >
                <Input allowClear={true} onPressEnter={onRegister}
                    onChange={e => {
                        dispatch({
                            type: 'CHANGE_FORM',
                            payload: { address: e.target.value.trim() }
                        })
                    }}
                />
            </Form.Item>

            {/* EMAIL */}
            <Form.Item
                label="Email"
                name="email"
            // rules={[{ required: true, message: 'Nhập email!' }]}
            >
                <Input allowClear={true} onPressEnter={onRegister}
                    onChange={e => {
                        dispatch({
                            type: 'CHANGE_FORM',
                            payload: { email: e.target.value.trim() }
                        })
                    }}
                />
            </Form.Item>
        </Form>
    )
}

export default RegisterForm