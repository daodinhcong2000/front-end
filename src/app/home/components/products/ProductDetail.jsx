import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, Button, Rate, InputNumber, message as Message, message } from 'antd'
import SlickItems from '../home/SlickItems'

import { _addToCart } from '../../../../redux/actions/cartActions'

const PreviewImage = (props) => {
  const { item } = props
  return (
    <>
      <Image src={item} preview={false} />
    </>
  )
}

const ProductDetail = (props) => {
  const { detail } = props
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
  const [targetSize, setTargetSize] = useState({ name: '', numberInStock: 0 })
  const { error } = useSelector((state) => state.cart)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    setQuantity(1)
  }, [name])

  const dispatch = useDispatch()
  const handleAddToCart = (e) => {
    dispatch(_addToCart(id, targetSize.name, quantity))
  }
  console.log(error)

  return (
    <>
      {error && Message.error(error)}
      <Col span={22} offset={1} style={{ marginTop: '20px' }}>
        <Row>
          <Col span={10}>
            <div style={{ width: '100%', height: '600px', textAlign: 'center', padding: '10px' }}>
              <Image src={preview} />
            </div>
          </Col>

          <Col span={14} style={{ paddingLeft: '20px', paddingTop: '10px' }}>
            <div>
              <h4>{name}</h4>
            </div>

            <Row>
              <div className="col-sm-3">
                <text style={{ fontSize: '1.1em', marginRight: '3px' }}>{rating}</text>
                <Rate allowHalf value={rating} disabled />
              </div>
              <div>
                <text style={{ fontSize: '1.1em' }}>Đã bán {sold}</text>
              </div>
            </Row>

            <Row>
              {originalPrice !== price && (
                <div className="col-sm-3">
                  <text style={{ color: 'silver', textDecorationLine: 'line-through', fontSize: '1.5em' }}>
                    {price}₫
                  </text>
                </div>
              )}
              <text style={{ color: 'red', fontSize: '2em' }}>₫{price}</text>
            </Row>

            <Row style={{ margin: '5px' }}>
              <Col span={3}>Sizes: </Col>
              <Col>
                {sizes.map((size, index) => {
                  const { name, numberInStock } = size
                  return (
                    <Button
                      key={index}
                      disabled={!numberInStock}
                      onClick={(e) => setTargetSize({ name, numberInStock })}
                    >
                      {name}
                    </Button>
                  )
                })}
              </Col>
            </Row>

            <Row style={{ margin: '5px' }}>
              <Col span={3}>Số lượng: </Col>
              <Col span={3}>
                <InputNumber min={1} defaultValue={quantity} onChange={setQuantity} />
              </Col>
              <Col>{targetSize.numberInStock > 0 && <text>{targetSize.numberInStock} sản phẩm có sẵn</text>}</Col>
            </Row>

            <Button onClick={handleAddToCart}>Thêm vào giỏ hàng</Button>
          </Col>
        </Row>
      </Col>
    </>
  )
}

export default ProductDetail
