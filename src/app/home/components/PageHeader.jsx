import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Row, Col, Layout, Image, Input } from 'antd'

import LogModal from './LogModal'
import UserMenu from './UserMenu'
import SearchItem from './SearchItem'
import CartModal from './CartModal'
import { _setUser } from '../../../redux/actions/userActions'
import { isAuthenticated } from '../../../services/makeApiRequest'

const { Header } = Layout

const PageHeader = props => {
    const dispatch = useDispatch()
    const { username } = useSelector(state => state.user)
    const onSearch = () => { }
    useEffect(() => {
        if (isAuthenticated() && !username) {
            dispatch(_setUser())
        }
    }, [username])

    return (
        <Row id="Header" justify="start">
            {/* LOGO */}
            <Col span={4} offset={1}>
                <Layout width={"20%"}>
                    <Header width={"100%"}>
                        <a href="/"><Image src="/img/acCommerce.png" height={100} preview={false} /></a>
                    </Header>
                </Layout>
            </Col>

            {/* SEARCH */}
            <Col span={13}>
                {/* Search bar */}
                <Row >
                    <Col span={24}>
                        <div id="headerSearch">
                            <Input.Search
                                id='inp_headerSearch'
                                placeholder='Nhập tên sản phẩm, thương hiệu muốn tìm ...'
                                allowClear
                                onSearch={onSearch}
                                size='large'
                                onPressEnter={onSearch}
                            />
                        </div>
                    </Col>
                </Row>

                {/* Search item */}
                <Row>
                    <Col span={3} >{SearchItem('/icons/phones.png', 'Điện thoại')}</Col>
                    <Col span={3} >{SearchItem('/icons/electronices.png', 'Đồ điện tử')}</Col>
                    <Col span={3} >{SearchItem('/icons/housewares.png', 'Đồ gia dụng')}</Col>
                    <Col span={3} >{SearchItem('/icons/clothes.png', 'Quần áo')}</Col>
                    <Col span={3} >{SearchItem('/icons/toys.png', 'Đồ chơi')}</Col>
                    <Col span={3} >{SearchItem('/icons/books.png', 'Sách')}</Col>
                    <Col span={3} >{SearchItem('/icons/sports.png', 'Thể thao')}</Col>
                    <Col span={3} >{SearchItem('/icons/pets.png', 'Thú cưng')}</Col>
                </Row>
            </Col>

            {/* LOGIN - USER */}
            <Col span={3}>
                {!isAuthenticated() ? <LogModal /> : <UserMenu />}
            </Col>

            {/* CART */}
            <Col span={1}>
                <CartModal />
            </Col>
            <hr></hr>
        </Row>
    )
}

export default PageHeader