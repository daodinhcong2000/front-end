import { Col, Image, Divider } from 'antd'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DownOutlined, UpOutlined } from '@ant-design/icons'

import ProductItem from './ProductItem'
import CarouselHeader from './CarouselHeader'
import SlickItems from './SlickItems'
import { _search } from '../../../../redux/actions/searchActions'

const PageContent = (props) => {
  const dispatch = useDispatch()
  const { items = [], keyword, page, limit, total, sort } = useSelector((state) => state.search)

  useEffect(() => {
    dispatch(_search(keyword, page, limit, sort))
  }, [page, limit, sort])

  const topSold = items.sort((a, b) => a.sort - b.sort).slice(0, 10)
  const sales = items.filter((item) => item.price !== item.originalPrice)
  const toys = items.filter((item) => item.category.includes('Đồ chơi'))
  const books = items.filter((item) => item.category.includes('Sách'))

  return (
    <>
      <Col span={22} offset={1}>
        {total ? (
          <>
            <CarouselHeader />

            <Col span={22} offset={1} style={{ marginBottom: '30px' }}>
              <Divider>
                <h2>Bán chạy</h2>
              </Divider>
              <SlickItems Item={ProductItem} listItems={topSold} style={{ width: '25%' }} />
            </Col>

            <Col span={22} offset={1} style={{ marginBottom: '30px' }}>
              <Divider>
                <h2>Giảm giá</h2>
              </Divider>
              <SlickItems Item={ProductItem} listItems={sales} style={{ width: '25%' }} />
            </Col>

            <Col span={22} offset={1} style={{ marginBottom: '30px' }}>
              <Divider>
                <h2>Đồ chơi hot</h2>
              </Divider>
              <SlickItems Item={ProductItem} listItems={toys} style={{ width: '25%' }} />
            </Col>

            <Col span={22} offset={1} style={{ marginBottom: '30px' }}>
              <Divider>
                <h2>Sách hot</h2>
              </Divider>
              <SlickItems Item={ProductItem} listItems={books} style={{ width: '25%' }} />
            </Col>
          </>
        ) : (
          <>
            <Col span={24} style={{ textAlign: 'center', margin: '30px' }}>
              <Image src="/img/empty.png" width="90%" preview={false} />
            </Col>
          </>
        )}
      </Col>
    </>
  )
}

export default PageContent
