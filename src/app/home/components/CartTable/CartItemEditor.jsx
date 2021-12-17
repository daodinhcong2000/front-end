import styles from '../../css_modules/css/all.module.css'

import { Button, Select, InputNumber } from 'antd'

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { _deleteCartItems, _editCartItem, _hideEditForm, _showEditForm } from '../../../../redux/actions/cartActions'

const CartItemActions = (props) => {
  const dispatch = useDispatch()
  const { cartItemId, sizes, size, quantity } = props

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
      <Button
        size="large"
        className={`${styles['btn']} ${styles['btn-danger']}`}
        onClick={handleDelete}
        style={{ marginLeft: '1rem' }}
      >
        <i className={`${styles['fa']} ${styles['fa-trash']}`} />
      </Button>

      <Button
        size="large"
        className={`${styles['btn']} ${!showEdit ? styles['btn-light'] : styles['btn-primary']}`}
        onClick={handleEditClick}
        style={{ marginLeft: '1rem' }}
      >
        <i className={`${styles['fa']} ${styles['fa-pen']}`} />
      </Button>
      {showEdit && (
        <Button
          size="large"
          className={`${styles['btn']} ${styles['btn-success']}`}
          disabled={!isEdited()}
          onClick={handleEditCartItem}
          style={{ marginLeft: '1rem' }}
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

          <label htmlFor="size" className="col-sm-1" style={{ marginTop: '5px' }}>
            Số lượng:{' '}
          </label>
          <div className="col">
            <InputNumber
              type="number"
              value={!editQuantity ? quantity : editQuantity}
              onChange={(value) => setEditQuantity(value)}
              min={1}
            />
          </div>
        </>
      )}
    </div>
  )
}

export default CartItemActions
