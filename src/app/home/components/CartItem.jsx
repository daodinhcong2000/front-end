import styles from '../css_modules/css/all.module.css'

import { InputNumber, Select, message as Message, Spin } from 'antd'

import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import numberSeparator from '../../../helpers/validating/numberSeparator'
import { _addToCart, _deleteCartItems } from '../../../redux/actions/cartActions'

const CartItem = (props) => {
  const dispatch = useDispatch()
  const {
    index,
    productId,
    productName,
    productDelete,
    thumbnail,
    sizes,
    price,
    size,
    cartItemId,
    quantity,
    shopId,
    shopName,
    shopDelete,
    shopActive
  } = props

  const shopDisabled = shopDelete || !shopActive
  const productDisabled = shopDisabled || productDelete

  const [selectedSize, setSelectedSize] = useState(size)
  const [selectedQuantity, setSelectedQuantity] = useState(quantity)
  const [edited, setEdited] = useState(false)

  useEffect(() => {
    if (selectedSize !== size || selectedQuantity !== quantity) {
      setEdited(true)
    } else {
      setEdited(false)
    }
  }, [selectedSize, selectedQuantity])

  const handleDelete = (e) => {
    dispatch(_deleteCartItems([cartItemId]))
  }

  const handleCancelClick = (e) => {
    setSelectedQuantity(quantity)
    setSelectedSize(size)
  }

  const handleSaveClick = (e) => {
    setEdited(false)
    dispatch(_addToCart(productId, selectedSize, selectedQuantity))
  }

  return (
    <>
      <tr style={{ backgroundColor: !(index % 2) && 'whitesmoke' }}>
        <td>
          <figure className={`${styles['itemside']}`}>
            {/* Thumbnail */}
            <div className={`${styles['aside']}`}>
              <img src={thumbnail} className={`${styles['img-sm']}`} />
            </div>

            {/* Information */}
            <figcaption className={`${styles['info']}`}>
              <Link
                to={`/product/${productId}`}
                className={`${styles['title']} ${styles['text-dark']}`}
                style={{ pointerEvents: productDisabled ? 'none' : 'auto' }}
              >
                {productName}
              </Link>
              <Link to={`/shop/${shopId}`} style={{ pointerEvents: shopDisabled ? 'none' : 'auto' }}>
                Shop: {shopName}
              </Link>
              <br />
              {shopDisabled ? (
                <span className={`${styles['text-danger']}`}>Gian hàng hiện không hoạt động</span>
              ) : productDisabled ? (
                <span className={`${styles['text-danger']}`}>Sản phẩm không còn được bày bán</span>
              ) : (
                !quantity && <span className={`${styles['text-warning']}`}>Sản phẩm hiện đang hết hàng</span>
              )}
            </figcaption>
          </figure>
        </td>

        {/* Size */}
        <td>
          <Select
            defaultValue={size}
            value={!edited ? size : selectedSize}
            disabled={productDisabled}
            onChange={(value) => setSelectedSize(value)}
          >
            {sizes.map((item, index) => {
              return (
                <Select.Option key={index} value={item.name} disabled={item.numberInStock === 0}>
                  {item.name}
                </Select.Option>
              )
            })}
          </Select>
        </td>

        {/* Quantity */}
        <td>
          <InputNumber
            type="number"
            defaultValue={quantity}
            value={!edited ? quantity : selectedQuantity}
            disabled={productDisabled}
            onChange={(value) => setSelectedQuantity(value)}
            min={1}
          />
        </td>

        {/* Price */}
        <td>
          <div className={`${styles['price-wrap']}`}>
            <var className={`${styles['price']}`}>₫ {numberSeparator(price * selectedQuantity)}</var>
            <br />
            <small className={`${styles['text-muted']}`}>₫ {numberSeparator(price)}</small>
          </div>
        </td>

        {/* Action */}
        <td style={{ textAlign: 'center' }} className={`${styles['text-center']}`}>
          <button className={`${styles['btn']} ${styles['btn-light']}`} onClick={handleDelete}>
            <i className={`${styles['fa']} ${styles['fa-trash']}`} />
          </button>

          {edited && (
            <div className={`${styles['row']}`}>
              <button
                className={`${styles['btn']} ${styles['btn-success']}`}
                style={{ marginRight: '1px', marginTop: '5px' }}
                onClick={handleSaveClick}
              >
                <i className={`${styles['fa']} ${styles['fa-check']}`} />
              </button>

              <button
                className={`${styles['btn']} ${styles['btn-warning']}`}
                style={{ marginLeft: '1px', marginTop: '5px' }}
                onClick={handleCancelClick}
              >
                <i className={`${styles['fa']} ${styles['fa-times']}`} />
              </button>
            </div>
          )}
        </td>

        <td></td>
      </tr>
    </>
  )
}

export default CartItem
