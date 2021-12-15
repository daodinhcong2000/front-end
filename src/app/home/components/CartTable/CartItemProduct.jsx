import styles from '../../css_modules/css/all.module.css'

import { Link } from 'react-router-dom'

import numberSeparator from '../../../../helpers/validating/numberSeparator'

const CartItemProduct = (props) => {
  const { thumbnail, productId, productName, productDisabled, shopId, shopName, shopDisabled, quantity, size, price } =
    props
  return (
    <figure className={`${styles['itemside']}`} style={{ width: '100%' }}>
      {/* Thumbnail */}
      <div className={`${styles['aside']}`}>
        <img src={thumbnail} className={`${styles['img-sm']}`} />
      </div>

      {/* Information */}
      <div style={{ marginLeft: '2em', width: '80%' }}>
        <div>
          <Link
            to={`/product/${productId}`}
            className={`${styles['title']} ${styles['text-dark']}`}
            style={{ pointerEvents: productDisabled ? 'none' : 'auto' }}
          >
            <b>{productName}</b>
          </Link>

          <div className="row">
            <Link
              to={`/shop/${shopId}`}
              className={`${styles['col']}`}
              style={{ pointerEvents: shopDisabled ? 'none' : 'auto' }}
            >
              Shop: {shopName}
            </Link>
            <div className={`${styles['col']}`}>Loại hàng: {size} </div>
          </div>

          <div className="row">
            <div className="col">Số lượng: {quantity} </div>
            <div className="col">Đơn giá: {numberSeparator(price)} ₫ </div>
          </div>

          <div className="price" style={{ textAlign: 'center', color: 'red' }}>
            ₫ {numberSeparator(price * quantity)}
          </div>
        </div>
      </div>
      {/* <figcaption className={`${styles['info']} ${styles['row']}`}>
        <div className="row">
          
        </div>

        

         */}
      <br />
      {shopDisabled ? (
        <span className={`${styles['text-danger']}`}>Gian hàng hiện không hoạt động</span>
      ) : productDisabled ? (
        <span className={`${styles['text-danger']}`}>Sản phẩm không còn được bày bán</span>
      ) : (
        !quantity && <span className={`${styles['text-warning']}`}>Sản phẩm hiện đang hết hàng</span>
      )}
      {/* </figcaption> */}
    </figure>
  )
}

export default CartItemProduct
