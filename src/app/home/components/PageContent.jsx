import { Row, Col, Pagination, Image } from 'antd'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductItem from "./ProductItem"
import CarouselHeader from './CarouselHeader'
import { _pagination, _search } from '../../../redux/actions/searchActions'

const PageContent = () => {
    const dispatch = useDispatch()
    const { items = [], keyword, page, limit, total, sort, loading } = useSelector(state => state.search)


    console.log(items)
    useEffect(() => {
        dispatch(_search(keyword, page, limit, sort))
    }, [loading, page, limit])
    return (
        <>
            <CarouselHeader />
            <Col span={22} offset={1} >
                {total
                    ? <>
                        <Row gutter={[48, 16]} >
                            {
                                items.map((item, index) => {
                                    const { shop, name, description, rating, images, price, sold, views } = item
                                    return (
                                        <Col gutter={40, 16} span={6}>
                                            <ProductItem key={`product-item-index-${index}`} name={name} description={description} rating={rating}
                                                images={images} price={price} views={views} sold={sold} shop={shop.name} />
                                        </Col>
                                    )
                                })
                            }
                        </Row>

                        <Pagination
                            style={{ textAlign: 'center', margin: '20px' }}
                            total={total}
                            showSizeChanger
                            defaultPageSize={20}
                            pageSizeOptions={[20, 40, 100]}
                            onChange={(page, pageSize) => {
                                dispatch(_pagination(page, pageSize))
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