import styles from '../../css_modules/css/all.module.css'

import { Button, Form, Input, message as Message } from 'antd'

import { useState } from 'react'
import { useDispatch } from 'react-redux'

import numberSeparator from '../../../../helpers/validating/numberSeparator'
import { _deleteCartItems, _order } from '../../../../redux/actions/cartActions'

const CartFooter = (props) => {
  const dispatch = useDispatch()
  const { selectedItems, discount } = props
  const [showAddress, setShowAddress] = useState(false)
  const [address, setAddress] = useState('')

  const orderPrice = (items) => {
    let sum = 0
    items.forEach((item) => {
      sum += item.price * item.quantity
    })
    return sum
  }

  const orderItems = (items) => {
    let sum = 0
    items.forEach((item) => {
      sum += item.quantity
    })
    return sum
  }

  const orderShops = (items) => {
    const shops = new Set(items.map((i) => i.shopId))
    return shops.size
  }

  const handleOrder = (e) => {
    if (!showAddress) {
      setShowAddress(true)
    } else {
      if (orderShops > 2) {
        Message.warning(`Mỗi lần mua hàng chỉ đặt của một shop`)
      } else {
        const cartItems = selectedItems.map((item) => item.cartItemId)
        dispatch(_order(cartItems, address))
      }
    }
  }

  const handleDelete = (e) => {
    const cartItemIds = selectedItems.map((item) => item.cartItemId)
    dispatch(_deleteCartItems(cartItemIds))
  }

  return (
    <div className="row">
      <div className="card-header">
        <div className="input-group">
          <input type="text" className="form-control" name placeholder="Mã giảm giá" />
          <span className="input-group-append">
            <button className="btn btn-primary">Kích hoạt</button>
          </span>
        </div>
      </div>

      <div className="card-body">
        <dl className="dlist-align">
          <dt>Số lượng</dt>
          <dd className="text-right">
            {orderItems(selectedItems)} món hàng / {selectedItems.length} sản phẩm / {orderShops(selectedItems)} gian
            hàng
          </dd>
        </dl>
        <dl className="dlist-align">
          <dt>Tổng số tiền</dt>
          <dd className="text-right">₫ {numberSeparator(orderPrice(selectedItems))}</dd>
        </dl>
        <dl className="dlist-align">
          <dt>Giảm</dt>
          <dd className="text-right">₫ {numberSeparator(discount)}</dd>
        </dl>
        <dl className="dlist-align">
          <dt>Thành tiền</dt>
          <dd className="text-right  h5">
            <strong>₫ {numberSeparator(orderPrice(selectedItems) - discount)}</strong>
          </dd>
        </dl>
        <hr />
      </div>

      {showAddress && (
        <>
          <Form
            name="register"
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 20 }}
            initialValues={{ remember: true }}
            autoComplete="off"
            style={{ textAlign: 'center' }}
          >
            <Form.Item
              label="Địa chỉ nhận hàng"
              hasFeedback
              required
              help={!address ? 'Cần nhập địa chỉ nhận hàng' : ''}
            >
              <Input allowClear={true} onChange={(e) => setAddress(e.target.value)} />
            </Form.Item>
          </Form>
        </>
      )}

      <div className="cart-footer row">
        <div className="col-sm-4">
          <p className="text-center mb-3">
            <img src="assets/images/misc/payments.png" height={26} />
          </p>
        </div>
        <div className="col-sm-4" style={{ textAlign: 'center' }}>
          <Button
            disabled={selectedItems.length === 0 || (showAddress && !address)}
            size="large"
            className={`${styles['btn']} ${styles['btn-success']}`}
            data-toggle="tooltip"
            title="Đặt hàng"
            onClick={handleOrder}
            icon={<i className="fa fa-shopping-cart" style={{ marginRight: '5px' }} />}
          >
            Đặt hàng
          </Button>
        </div>

        <div className="col-sm-4" style={{ textAlign: 'center' }}>
          <Button
            disabled={selectedItems.length === 0}
            size="large"
            className={`${styles['btn']} ${styles['btn-danger']}`}
            data-toggle="tooltip"
            title="Xoá sản phẩm đã chọn"
            onClick={handleDelete}
            icon={<i className="fa fa-trash" style={{ marginRight: '5px' }} />}
          >
            Xoá các sản phẩm
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CartFooter
