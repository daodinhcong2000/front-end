import { useEffect, useState } from 'react'
import { Row, Col, Image, Carousel } from 'antd'

const ProductDetail = (props) => {
  const { detail } = props
  console.log(detail)
  const {
    _id: id,
    category,
    description,
    images = [],
    name,
    originalPrice,
    price,
    rating,
    shop = {},
    sizes = [],
    sold,
    views
  } = detail
  const [preview, setPreview] = useState(`${images[0]}` || '')

  return (
    <Col span={22} offset={1} style={{ marginTop: '20px' }}>
      <Row>
        <Col span={10}>
          <div style={{ width: '100%', height: '600px', width: '100%', textAlign: 'center', padding: '10px' }}>
            <Carousel arrows dots autoplay autoplaySpeed={3000} style={{ textAlign: 'center' }}>
              {images.map((image) => {
                return <Image src={image} height={'400px'} style={{ maxWidth: '700px' }}></Image>
              })}
            </Carousel>
          </div>
        </Col>
      </Row>
    </Col>
  )
}

export default ProductDetail
