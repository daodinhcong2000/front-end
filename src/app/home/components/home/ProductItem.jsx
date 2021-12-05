import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ShopOutlined } from '@ant-design/icons'
import { Row, Col, Image, Rate, Button, Card, Tag } from 'antd'

import { _addToCart } from '../../../../redux/actions/cartActions'

const ProductItem = (props) => {
  const dispatch = useDispatch()
  const { item } = props
  const { _id, name, rating, images = [], price, originalPrice, sold = 0, views = 0, shop = {}, category } = item

  const thumbnail = ((link) => {
    if (!link) return ''

    const host = 'https://res.cloudinary.com/'
    const [cloud, asset, delivery, version, name] = link.replace(host, '').split('/')
    const transformation = 'c_crop,g_center,h_500,w_500,c_fill'
    return [host, cloud, asset, delivery, transformation, name].join('/')
  })(images[0])

  const showView = (views) => {
    if (views > 1000000) {
      return `${Math.floor(views / 100000) / 10}M`
    }

    if (views > 1000) {
      return `${Math.floor(views / 100) / 10}K`
    }

    return views
  }

  const showShopName = (name) => {
    if (name.length > 20) {
      return `${name.slice(0, 20)}...`
    }
    return name
  }

  return (
    <Col span={24} style={{ textAlign: 'center', marginLeft: '20px', marginRight: '20px' }}>
      <Card style={{ width: '100%', borderRadius: '30px' }} hoverable>
        <Link to={`/products/${_id}`} style={{ textDecoration: 'none' }}>
          <Image
            style={{ padding: '10px', width: '90%' }}
            alt="example"
            src={thumbnail || '/img/product.jpeg'}
            preview={false}
          />

          <Row>
            <Col
              span={24}
              style={{ width: '100%', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}
            >
              <div style={{ width: '100%' }}>
                <h5 style={{ textAlign: 'center', color: 'mediumseagreen', fontWeight: 'bold' }}>{name}</h5>
              </div>
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <Rate allowHalf defaultValue={rating} disabled />
            </Col>
          </Row>

          <Row>
            <Col span={10} style={{ paddingTop: '10px' }}>
              <Row>
                <Col span={24}>
                  <strong style={{ color: 'blue' }}>Lượt xem: </strong>
                  {showView(views)}
                </Col>
              </Row>

              <Row>
                <Col span={24}>
                  <strong style={{ color: 'green' }}>Đã bán: </strong>
                  {sold}
                </Col>
              </Row>
            </Col>

            <Col span={14}>
              <Row>
                <Col span={24} style={{ color: 'red' }}>
                  <b style={{ fontSize: '130%' }}>{price}đ</b>
                </Col>
              </Row>

              {originalPrice !== price && (
                <Row>
                  <Col span={24} style={{ color: 'silver' }}>
                    <b style={{ textAlign: 'center', textDecoration: 'line-through' }}>{originalPrice}đ</b>
                  </Col>
                </Row>
              )}
            </Col>
          </Row>
        </Link>

        <Row style={{ paddingTop: '20px', textAlign: 'left' }}>
          <Col span={19}>
            <Button
              shape="round"
              style={{ height: '40px', paddingBottom: '5px', background: 'orange', color: 'white' }}
            >
              <Link to={`/shops/${shop._id}`} style={{ textDecoration: 'none' }}>
                <ShopOutlined style={{ fontSize: '25px' }} />
                <b style={{ width: '160px' }}>{showShopName(shop.name)}</b>
              </Link>
            </Button>
          </Col>

          <Col span={5}>
            <Tag color="magenta">
              <div style={{ alginItems: 'center', width: '100%' }}>{category}</div>
            </Tag>
          </Col>
        </Row>
      </Card>
    </Col>
  )
}

export default ProductItem
