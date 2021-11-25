import { useState } from 'react'
import { Row, Col, Layout, Image } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { useSelector, useDispatch } from 'react-redux'

import LogModal from './LogModal'
import UserMenu from './UserMenu'

const { Header } = Layout

const PageHeader = props => {
    const token = useSelector(state => state.token)
    const dispatch = useDispatch()

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
                    <input type="text" className="form-control" id="inp_headerSearch" placeholder="Tìm kiếm sản phẩm ..." />
                    <button width="50px" id="btn_headerSearch"><SearchOutlined style={{ width: "40px" }} /></button>
                </div>
            </Col>

            <Col span={4}>
                {
                    !localStorage.getItem('token')
                        ? <LogModal />
                        : <UserMenu token={token} />
                }
            </Col>

            <Col span={2}></Col>
            <hr></hr>
        </Row>
    )
}

export default PageHeader