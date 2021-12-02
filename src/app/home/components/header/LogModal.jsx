import { useDispatch, useSelector } from 'react-redux'
import { Modal, Button } from 'antd'

import LoginForm from './LoginForm'
import RegisterForm from './RegisterFrom'
import ForgotForm from './ForgotForm'

import { _showLogForm, _hideLogForm } from '../../../../redux/actions/logFormActions'

const LogModal = props => {
    const { visible, mode } = useSelector(state => state.logForm)
    const dispatch = useDispatch()

    const showModal = e => {dispatch(_showLogForm())}
    const closeModal = e => {dispatch(_hideLogForm())}

    return (
        <div>
            <Button type="text" id="btn_login"
                color='#2774f0'
                onClick={showModal}
            >
                Đăng nhập
            </Button>

            <Modal
                visible={visible}
                title={mode === 'forgot' ? "Lấy lại mật khẩu" : mode === 'login' ? "Đăng nhập" : "Đăng ký"}
                onCancel={closeModal}
                closeable={true}
                footer={null}
            >
                {
                    mode === 'forgot' ? <ForgotForm /> : mode === 'login'
                        ? <LoginForm />
                        : <RegisterForm />
                }
            </Modal>
        </div>
    )
}

export default LogModal