import { useState } from 'react'
import { Row, Col, Layout, Image, Modal, Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterFrom'
const { Header } = Layout


const PageHeader = props => {
    const [loading, setLoading] = useState(false)
    const [visible, setVisible] = useState(false)
    const [register, setRegister] = useState(false)

    const showModal = e => {
        setVisible(true)
    }
    const closeModal = e => {
        setVisible(false)
    }
    const changeModal = e => {
        setRegister(!register)
    }

    return (
        <Row id="Header" justify="start">
            <Col span={2}></Col>

            <Col span={4}>
                <Layout width={"20%"}>
                    <Header width={"100%"}>
                        <a href="/"><Image src="/img/acCommerce.png" href={"/"} height={100} preview={false} /></a>
                    </Header>
                </Layout>
            </Col>

            <Col span={12}>
                <div className="input-group mb-3 input-group-lg headerSearch">
                    <input type="text" className="form-control inp_headerSearch" placeholder="Tìm kiếm sản phẩm ..." />
                    <button width="50px" className="btn_headerSearch"><SearchOutlined style={{ width: "40px" }} /></button>
                </div>
            </Col>

            <Col span={4}>
                <Row>
                    <Button type="primary" onClick={showModal}>
                        Đăng nhập / Đăng ký
                    </Button>
                    <Modal
                        visible={visible}
                        title={!register ? "Đăng nhập" : "Đăng ký"}
                        onOk={closeModal}
                        onCancel={closeModal}
                        footer={[
                            <Button key="back" onClick={changeModal}>
                                {register ? "Đăng nhập" : "Đăng ký"}
                            </Button>,
                            <Button key="submit" type="primary" loading={loading} onClick={showModal}>
                                OK
                            </Button>
                        ]}
                    >
                        {register ? <RegisterForm></RegisterForm> : <LoginForm></LoginForm>}
                    </Modal>
                </Row>
            </Col>

            <Col span={2}></Col>
            <hr></hr>
        </Row>
    )
}

export default PageHeader