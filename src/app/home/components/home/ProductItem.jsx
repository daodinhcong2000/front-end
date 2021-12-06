import { Link } from 'react-router-dom'
import { Row, Col, Image, Card } from 'antd'

import { _addToCart } from '../../../../redux/actions/cartActions'
import numberSeparator from '../../../../helpers/validating/numberSeparator'

const ProductItem = (props) => {
  const { item } = props
  const { _id, name, images = [], price, sold = 0 } = item

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
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                color: 'black',
                height: '60px',
                lineHeight: '30px'
              }}
            >
              <div style={{ width: '100%' }}>
                <h5>{name}</h5>
              </div>
            </Col>
          </Row>

          <Row>
            <Col span={16} style={{ color: 'red' }}>
              <b style={{ fontSize: '110%' }}>{numberSeparator(price)}đ</b>
            </Col>

            <Col span={8} style={{ color: 'black', textAlign: 'right' }}>
              <b style={{ fontSize: '110%' }}>Đã bán: </b>
              {sold}
            </Col>
          </Row>
        </Link>
      </Card>
    </Col>
  )
}

export default ProductItem
