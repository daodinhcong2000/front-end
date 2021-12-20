import styles from '../../css_modules/css/all.module.css'

import { Button, Select, InputNumber, message as Message } from 'antd'

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { _deleteCartItems, _getMyCart, _hideEditForm, _showEditForm } from '../../../../redux/actions/cartActions'
import { editCartItem } from '../../../../services/api/customerApi'

const CartItemActions = (props) => {
  const dispatch = useDispatch()
  const { cartItemId, sizes, size, quantity } = props

  const [editSize, setEditSize] = useState(size)
  const [editQuantity, setEditQuantity] = useState(quantity)
  const isEdited = () => (editSize && editSize !== size) || (editQuantity && editQuantity !== quantity)

  const handleEditCartItem = (e) => {
    dispatch({
      type: 'LOAD_CART'
    })

    editCartItem({
      cartItemId,
      size: editSize || size,
      quantity: editQuantity || quantity
    })
      .then((res) => {
        const { message } = res.data
        Message.success(message)
        dispatch(_getMyCart())
      })
      .catch((e) => {
        const { status, data } = e.response
        if (status >= 500) {
          Message.error('Lỗi hệ thống, vui lòng thử lại sau!')
        } else {
          const { message } = data
          Message.error(message)
        }

        setEditSize(size)
        setEditQuantity(quantity)

        dispatch({
          type: 'LOAD_CART',
          payload: { loading: false }
        })
      })
  }

  return (
    <div className={`${styles['row']}`}>
      <div className="col-sm-1"></div>
      <div className="col-sm-8">
        <div className="row">
          <label className={`${styles['col-sm-2']}`} style={{ marginTop: '5px' }}>
            Loại hàng:{' '}
          </label>
          <div className={`${styles['col']}`}>
            <Select
              id="size"
              value={!editSize ? size : editSize}
              onChange={(value) => setEditSize(value)}
              style={{ width: '100%' }}
            >
              {sizes
                .sort((a, b) => a.name - b.name)
                .map((item, index) => {
                  return (
                    <Select.Option key={index} value={item.name} disabled={item.numberInStock === 0}>
                      {item.name}
                    </Select.Option>
                  )
                })}
            </Select>
          </div>
        </div>

        <div className="row">
          <label htmlFor="size" className="col-sm-2" style={{ marginTop: '5px' }}>
            Số lượng:{' '}
          </label>
          <div className="col">
            <InputNumber
              className="text-left"
              type="number"
              value={!editQuantity ? quantity : editQuantity}
              onChange={(value) => setEditQuantity(value)}
              min={1}
            />
          </div>
        </div>
      </div>
      <div className="col">
        <Button
          size="large"
          className={`${styles['btn']} ${styles['btn-success']} ${styles['align-middle']}`}
          disabled={!isEdited()}
          onClick={handleEditCartItem}
          style={{ marginLeft: '1rem' }}
        >
          <i className={`${styles['fa']} ${styles['fa-check']}`} />
        </Button>
      </div>
    </div>
  )
}

export default CartItemActions
