import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Button, Pagination, Image } from 'antd'
import { DownOutlined, UpOutlined } from '@ant-design/icons'
import ProductItem from './ProductItem'

import { _pagination, _search } from '../../../../redux/actions/searchActions'

const SearchedContent = (props) => {
  const dispatch = useDispatch()
  const { items = [], keyword, page, limit, total, sort, searching } = useSelector((state) => state.search)
  useEffect(() => {
    dispatch(_search(keyword, page, limit, sort))
  }, [page, limit, sort])

  const changeSort = (sorter) => {
    if (!sort.includes(sorter)) {
      dispatch(_pagination(1, limit, sorter))
    } else {
      if (sort.includes('-')) {
        dispatch(_pagination(1, limit, sorter))
      } else {
        dispatch(_pagination(1, limit, `-${sorter}`))
      }
    }
  }

  const sortOrder = (sorter) => {
    return !sort.includes(sorter) ? <></> : sort.includes('-') ? <DownOutlined /> : <UpOutlined />
  }

  return (
    <Col span={22} offset={1}>
      {total ? (
        <Row>
          <Col span={16}>
            <Row style={{ margin: '20px' }}>
              <Col>
                <Button
                  type="text"
                  size="large"
                  disabled
                  style={{ fontWeight: 'bold', color: 'black' }}
                  loading={searching}
                >
                  Sắp xếp theo:
                </Button>
              </Col>

              <Col>
                <Button
                  className="sort"
                  primary
                  type="round"
                  size="large"
                  style={{ marginRight: '20px' }}
                  onClick={(e) => changeSort('sold')}
                  disabled={searching}
                >
                  Lượt mua
                  {sortOrder('sold')}
                </Button>
              </Col>

              <Col>
                <Button
                  className="sort"
                  type="round"
                  size="large"
                  style={{ marginRight: '20px' }}
                  onClick={(e) => changeSort('views')}
                  disabled={searching}
                >
                  Lượt xem
                  {sortOrder('views')}
                </Button>
              </Col>

              <Col>
                <Button
                  className="sort"
                  type="round"
                  size="large"
                  style={{ marginRight: '20px' }}
                  onClick={(e) => changeSort('rating')}
                  disabled={searching}
                >
                  Đánh giá
                  {sortOrder('rating')}
                </Button>
              </Col>

              <Col>
                <Button
                  className="sort"
                  type="round"
                  size="large"
                  style={{ marginRight: '20px' }}
                  onClick={(e) => changeSort('price')}
                  disabled={searching}
                >
                  Giá tiền
                  {sortOrder('price')}
                </Button>
              </Col>
            </Row>
          </Col>

          <Col span={8} style={{ textAlign: 'right' }}>
            <Pagination
              total={total}
              style={{ margin: '20px' }}
              total={total}
              showLessItems
              current={page}
              pageSize={limit}
              showTotal={(total, range) => `Hiển thị ${range[0]} - ${range[1]} / ${total} sản phẩm `}
              onChange={(page, pageSize) => {
                dispatch(_pagination(page, pageSize, sort))
              }}
            />
          </Col>

          <Row style={{ width: '100%' }}>
            {items.map((item, index) => {
              return (
                <div style={{ width: '20%', paddingBottom: '20px' }}>
                  <ProductItem key={index} item={item} />
                </div>
              )
            })}
          </Row>

          <Pagination
            style={{ textAlign: 'center', margin: '20px', width: '100%' }}
            total={total}
            showSizeChanger
            current={page}
            pageSize={limit}
            defaultPageSize={limit}
            pageSizeOptions={[20, 40, 100]}
            onChange={(page, pageSize) => {
              dispatch(_pagination(page, pageSize, sort))
            }}
          />
        </Row>
      ) : (
        <Col span={24} style={{ textAlign: 'center', margin: '30px' }}>
          <Image src="/img/empty.png" width="90%" preview={false} />
        </Col>
      )}
    </Col>
  )
}

export default SearchedContent
