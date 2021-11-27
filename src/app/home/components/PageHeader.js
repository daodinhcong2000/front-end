import { useState, useEffect } from 'react'
import { Row, Col, Layout, Image, Input, Badge } from 'antd'
import { useSelector, useDispatch } from 'react-redux'

import LogModal from './LogModal'
import UserMenu from './UserMenu'
import SearchItem from './SearchItem'

const { Header } = Layout

const PageHeader = props => {
    const user = useSelector(state => state.user)
    const [cartSize, setCartSize] = useState('3em')
    const cart = useSelector(state => state.cart)

    const dispatch = useDispatch()
    const onSearch = () => { }

    return (
        <Row id="Header" justify="start">
            <Col span={1}></Col>

            {/* LOGO */}
            <Col span={4}>
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
                    <Col span={3} >{SearchItem('/icon/phones.png', 'Điện thoại')}</Col>
                    <Col span={3} >{SearchItem('/icon/electronices.png', 'Đồ điện tử')}</Col>
                    <Col span={3} >{SearchItem('/icon/housewares.png', 'Đồ gia dụng')}</Col>
                    <Col span={3} >{SearchItem('/icon/clothes.png', 'Quần áo')}</Col>
                    <Col span={3} >{SearchItem('/icon/toys.png', 'Đồ chơi')}</Col>
                    <Col span={3} >{SearchItem('/icon/books.png', 'Sách')}</Col>
                    <Col span={3} >{SearchItem('/icon/sports.png', 'Thể thao')}</Col>
                    <Col span={3} >{SearchItem('/icon/pets.png', 'Thú cưng')}</Col>
                </Row>
            </Col>

            {/* LOGIN - USER */}
            <Col span={3}>
                {!localStorage.getItem('token') ? <LogModal /> : <UserMenu />}
            </Col>

            {/* CART */}
            <Col span={1}>
                <div className='cart-container'>
                    <div className='header-cart'>
                        <a id="cart">
                            <Badge count={cart.length}>
                                <svg id="icon-cart" width={cartSize} height={cartSize} fill="#fff" viewBox="0 0 1024 1024"
                                    onMouseOver={e => setCartSize('4em')}
                                    onMouseLeave={e => setCartSize('3em')}
                                >
                                    <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 00-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 100 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 00-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 00-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6z" />
                                </svg>
                            </Badge>
                        </a>
                    </div>
                </div>
            </Col>

            <Col span={2}></Col>
            <hr></hr>
        </Row>
    )
}

export default PageHeader