import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Row, Col, Layout, Image, Input } from 'antd'

import LogModal from './LogModal'
import UserMenu from './UserMenu'
import SearchItem from './SearchItem'
import CartModal from './CartModal'
import { _setUser } from '../../../../redux/actions/userActions'
import { isAuthenticated } from '../../../../services/makeApiRequest'
import { _search } from '../../../../redux/actions/searchActions'

const { Header } = Layout

const PageHeader = props => {
    const dispatch = useDispatch()
    const { username } = useSelector(state => state.user)
    const { searching, keyword, page, limit, sort } = useSelector(state => state.search)
    const [filter, setFilter] = useState('')
    useEffect(() => {
        if (isAuthenticated() && !username) {
            dispatch(_setUser())
        }
    }, [username])

    const onSearch = (value, event) => {
        dispatch(_search(value, page, limit, sort))
    }
    const handleValueChange = e => {
        setFilter(e.target.value)
    }
    return (
        <Row id="Header" justify="start">
            {/* LOGO */}
            <Col span={4} offset={1}>
                <Layout width={"20%"}>
                    <Header width={"100%"}>
                        <Link to="/"><Image src="/img/acCommerce.png" height={100} preview={false} /></Link>
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
                                size='large'
                                loading={searching}
                                value={filter}
                                onSearch={onSearch}
                                onChange={handleValueChange}
                            />
                        </div>
                    </Col>
                </Row>

                {/* Search item */}
                <Row>
                    <Col span={3} >{SearchItem('/icons/phones.png', 'Điện thoại', setFilter)}</Col>
                    <Col span={3} >{SearchItem('/icons/electronices.png', 'Đồ điện tử', setFilter)}</Col>
                    <Col span={3} >{SearchItem('/icons/housewares.png', 'Đồ gia dụng', setFilter)}</Col>
                    <Col span={3} >{SearchItem('/icons/clothes.png', 'Quần áo', setFilter)}</Col>
                    <Col span={3} >{SearchItem('/icons/toys.png', 'Đồ chơi', setFilter)}</Col>
                    <Col span={3} >{SearchItem('/icons/books.png', 'Sách', setFilter)}</Col>
                    <Col span={3} >{SearchItem('/icons/sports.png', 'Thể thao', setFilter)}</Col>
                    <Col span={3} >{SearchItem('/icons/pets.png', 'Thú cưng', setFilter)}</Col>
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