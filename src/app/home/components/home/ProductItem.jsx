import { Link } from 'react-router-dom'
import { Row, Col, Image, Card } from 'antd'

import { _addToCart } from '../../../../redux/actions/cartActions'
import numberSeparator from '../../../../helpers/validating/numberSeparator'

const ProductItem = (props) => {
  const { item } = props
  const { _id, name, images = [], price, sold = 0, views, originalPrice } = item

  const thumbnail = ((link) => {
    if (!link) return ''

    const host = 'https://res.cloudinary.com/'
    const [cloud, asset, delivery, version, name] = link.replace(host, '').split('/')
    const transformation = 'c_crop,g_center,h_500,w_500,c_fill'
    return [host, cloud, asset, delivery, transformation, name].join('/')
  })(images[0])

  return (
    <Col span={24} style={{ marginLeft: '15px', marginRight: '15px' }}>
      <Card style={{ width: '100%', borderRadius: '30px' }} hoverable>
        <Link to={`/products/${_id}`} style={{ textDecoration: 'none' }}>
          <Image
            style={{ width: '100%', marginBottom: '5px' }}
            alt="example"
            src={thumbnail || '/img/product.jpeg'}
            preview={false}
          />
          <Row>
            <Col
              span={24}
              style={{
                marginBottom: '5px'
              }}
            >
              <div
                style={{
                  width: '100%',
                  fontSize: '14rem',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  color: 'black',
                  height: '48px'
                }}
              >
                <h5>{name}</h5>
              </div>
            </Col>
          </Row>

          <Row>
            <Col span={14}>
              <div className="col-sm-12">
                <b style={{ fontSize: '110%', color: 'red' }}>{numberSeparator(price)}₫</b>
              </div>
              {originalPrice !== price && (
                <div className="col-sm-12" style={{ color: 'silver', textDecorationLine: 'line-through' }}>
                  {numberSeparator(originalPrice)}₫
                </div>
              )}
            </Col>

            <Col span={10} style={{ color: 'black', textAlign: 'right' }}>
              <div className="col-sm-12">
                <b style={{ fontSize: '110%' }}>Bán: </b>
                {sold}
              </div>
              <div className="col-sm-12">
                <b style={{ fontSize: '110%' }}>Xem: </b>
                {views}
              </div>
            </Col>
          </Row>
        </Link>
      </Card>
    </Col>
  )
}

export default ProductItem
