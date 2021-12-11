import styles from '../css_modules/css/all.module.css'

import { InputNumber } from 'antd'

import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import numberSeparator from '../../../helpers/validating/numberSeparator'

const CartItem = (props) => {
  const history = useHistory()
  const {
    index,
    productId,
    productName,
    productDelete,
    thumbnail,
    price,
    size,
    quantity,
    shopId,
    shopName,
    shopDelete,
    shopActive
  } = props

  const shopDisabled = shopDelete || !shopActive
  const productDisabled = shopDisabled || productDelete

  const [edit, setEdit] = useState(false)

  const handleEditClick = (e) => {
    setEdit(true)
  }

  const handleSaveClick = (e) => {
    setEdit(false)
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
              <p className={`${styles['text-muted']} ${styles['small']}]}`}>Size: {size}</p>
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

        {/* Quantity */}
        <td>
          <InputNumber
            className={`${styles['form-control']} ${styles['form-group']}`}
            type="number"
            defaultValue={quantity}
            disabled={!edit}
          />
        </td>

        {/* Price */}
        <td>
          <div className={`${styles['price-wrap']}`}>
            <var className={`${styles['price']}`}>₫ {numberSeparator(price * quantity)}</var>
            <br />
            <small className={`${styles['text-muted']}`}>₫ {numberSeparator(price)}</small>
          </div>
        </td>

        {/* Action */}
        <td className={`${styles['text-right']}`} style={{ textAlign: 'center' }}>
          {!edit ? (
            <button className={`${styles['btn']} ${styles['btn-light']}`} onClick={handleEditClick}>
              Sửa
            </button>
          ) : (
            <button className={`${styles['btn']} ${styles['btn-success']}`} onClick={handleSaveClick}>
              Lưu
            </button>
          )}
          <br />
          <button className={`${styles['btn']} ${styles['btn-light']}`}>Xoá</button>
        </td>
        <td></td>
      </tr>
    </>
  )
}

export default CartItem
