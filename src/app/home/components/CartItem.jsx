import { InputNumber } from 'antd'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
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

  const disableShop = shopDelete || !shopActive

  const [edit, setEdit] = useState(false)

  const handleTitleClick = (e) => {
    history.push(`/product/${productId}`)
  }

  const handleShopClick = (e) => {
    history.push(`/shop/${shopId}`)
  }

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
          <figure className="itemside">
            {/* Thumbnail */}
            <div className="aside">
              <img src={thumbnail} className="img-sm" />
            </div>

            {/* Information */}
            <figcaption className="info">
              <a className="title text-dark" onClick={handleTitleClick}>
                {productName}
              </a>
              <a disabled={disableShop} onClick={handleShopClick}>
                Shop: {shopName}
              </a>
              <p className="text-muted small">Size: {size}</p>
              {shopDelete || !shopActive ? (
                <span className="text-danger">Gian hàng hiện không hoạt động</span>
              ) : productDelete ? (
                <span className="text-danger">Sản phẩm không còn được bày bán</span>
              ) : (
                !quantity && <span className="text-warning">Sản phẩm hiện đang hết hàng</span>
              )}
            </figcaption>
          </figure>
        </td>

        {/* Quantity */}
        <td>
          <InputNumber className="from-control form-group" type="number" defaultValue={quantity} disabled={!edit} />
        </td>

        {/* Price */}
        <td>
          <div className="price-wrap">
            <var className="price">₫ {numberSeparator(price * quantity)}</var>
            <small className="text-muted">₫ {numberSeparator(price)}</small>
          </div>
        </td>

        {/* Action */}
        <td className="text-right">
          {!edit ? (
            <button className="btn btn-light mr-2" onClick={handleEditClick}>
              Sửa
            </button>
          ) : (
            <button className="btn btn-success mr-2" onClick={handleSaveClick}>
              Lưu
            </button>
          )}
          <button className="btn btn-light">Xoá</button>
        </td>
      </tr>
    </>
  )
}

export default CartItem
