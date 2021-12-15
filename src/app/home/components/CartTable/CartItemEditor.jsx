import styles from '../../css_modules/css/all.module.css'

import { Button, Select, InputNumber, Row, Col, Spin } from 'antd'

import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { _deleteCartItems, _editCartItem, _hideEditForm, _showEditForm } from '../../../../redux/actions/cartActions'

const CartItemActions = (props) => {
  const dispatch = useDispatch()
  const { cartItemId, sizes, size, quantity } = props
  const { editing } = useSelector((state) => state.cart)

  const [showEdit, setShowEdit] = useState(false)
  const [editSize, setEditSize] = useState(size)
  const [editQuantity, setEditQuantity] = useState(quantity)
  const isEdited = () => (editSize && editSize !== size) || (editQuantity && editQuantity !== quantity)

  const handleDelete = (e) => {
    dispatch(_deleteCartItems([cartItemId]))
  }

  const handleEditClick = (e) => {
    setShowEdit(!showEdit)
  }

  const handleEditCartItem = (e) => {
    dispatch(_editCartItem(cartItemId, editSize || size, editQuantity || quantity))
  }

  return (
    <div className={`${styles['row']}`}>
      <Button size="large" className={`${styles['btn']} ${styles['btn-danger']}`} onClick={handleDelete}>
        <i className={`${styles['fa']} ${styles['fa-trash']}`} />
      </Button>

      <Button
        size="large"
        className={`${styles['btn']} ${!showEdit ? styles['btn-light'] : styles['btn-primary']}`}
        onClick={handleEditClick}
      >
        <i className={`${styles['fa']} ${styles['fa-pen']}`} />
      </Button>
      {showEdit && (
        <Button
          size="large"
          className={`${styles['btn']} ${styles['btn-success']}`}
          disabled={!isEdited()}
          onClick={handleEditCartItem}
        >
          <i className={`${styles['fa']} ${styles['fa-check']}`} />
        </Button>
      )}

      {showEdit && (
        <>
          <label className={`${styles['col-sm-1']}`} style={{ marginTop: '5px' }}>
            Loại hàng:{' '}
          </label>
          <div className={`${styles['col']}`}>
            <Spin spinning={editing}>
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
            </Spin>
          </div>

          <label htmlFor="size" className="col-sm-1" style={{ marginTop: '5px' }}>
            Số lượng:{' '}
          </label>
          <div className="col">
            <Spin spinning={editing}>
              <InputNumber
                type="number"
                value={!editQuantity ? quantity : editQuantity}
                onChange={(value) => setEditQuantity(value)}
                min={1}
              />
            </Spin>
          </div>
        </>
      )}
    </div>
  )
}

export default CartItemActions
