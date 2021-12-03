import { Row, Col, Pagination, Image, Button } from 'antd'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductItem from "./ProductItem"
import CarouselHeader from './CarouselHeader'
import { _pagination, _search } from '../../../../redux/actions/searchActions'

const PageContent = () => {
    const dispatch = useDispatch()
    const { items = [], keyword, page, limit, total, sort, searching } = useSelector(state => state.search)
    useEffect(() => {
        dispatch(_search(keyword, page, limit, sort))
    }, [page, limit, sort])

    const changeSort = sorter => {
        if (!sort.includes(sorter)) {
            dispatch(_pagination(1, limit, sorter))
        }
        else {
            if (sort.includes('-')) {
                dispatch(_pagination(1, limit, sorter))
            } else {
                dispatch(_pagination(1, limit, `-${sorter}`))
            }
        }
    }

    return (
        <>
            {!keyword && <CarouselHeader />}
            <Col span={22} offset={1} >
                {total
                    ? <>
                        {
                            keyword &&
                            <Row >
                                <Col span={16} >
                                    <Row style={{ margin: '20px' }}>
                                        <Col><Button type='text' size='large' disabled style={{ fontWeight: 'bold', color: 'black' }}>Sắp xếp theo:</Button></Col>

                                        <Col>
                                            <Button className='sort' primary type='round' size='large' style={{ marginRight: '20px' }}
                                                onClick={e => changeSort('sold')} loading={searching}
                                            >
                                                Lượt mua
                                            </Button>
                                        </Col>

                                        <Col>
                                            <Button className='sort' type='round' size='large' style={{ marginRight: '20px' }}
                                                onClick={e => changeSort('views')} loading={searching}
                                            >
                                                Lượt xem
                                            </Button>
                                        </Col>

                                        <Col>
                                            <Button className='sort' type='round' size='large' style={{ marginRight: '20px' }}
                                                onClick={e => changeSort('rating')} loading={searching}
                                            >
                                                Đánh giá
                                            </Button>
                                        </Col>
                                        <Col>
                                            <Button className='sort' type='round' size='large' style={{ marginRight: '20px' }}
                                                onClick={e => changeSort('price')} loading={searching}
                                            >
                                                Giá tiền
                                            </Button>
                                        </Col>

                                    </Row>
                                </Col>

                                <Col span={8} >
                                    <Pagination total={total}
                                        style={{ margin: '20px' }}
                                        total={total}
                                        // simple
                                        showTotal={(total, range) => `Hiển thị ${range[page - 1]}-${range[page]} / ${total} sản phẩm`}
                                        onChange={(page, pageSize) => {
                                            dispatch(_pagination(page, pageSize, sort))
                                        }} />
                                </Col>
                            </Row>
                        }

                        <Row gutter={[16, 16]} >
                            {
                                items.map((item, index) => {
                                    return (
                                        <Col gutter={8, 16} span={6}>
                                            <ProductItem key={`product-item-index-${index}`} product={item} />
                                        </Col>
                                    )
                                })
                            }
                        </Row>

                        <Pagination
                            style={{ textAlign: 'center', margin: '20px' }}
                            total={total}
                            showSizeChanger
                            defaultPageSize={limit}
                            pageSizeOptions={[20, 40, 100]}
                            onChange={(page, pageSize) => {
                                dispatch(_pagination(page, pageSize, sort))
                            }}
                        />
                    </>
                    : <>
                        <Col span={24} style={{ textAlign: 'center', margin: '30px' }} >
                            <Image src="/img/empty.png" width='1000px' preview={false} />
                        </Col>
                    </>
                }
            </Col>
        </>
    )
}

export default PageContent