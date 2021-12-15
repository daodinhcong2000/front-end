import styles from '../css_modules/css/all.module.css'

import { Link } from 'react-router-dom'
import Loading from 'react-loading'

import numberSeparator from '../../../helpers/validating/numberSeparator'
import CommentProduct from './CommentProduct'

const ProductItem = (props) => {
  const { _id, images, name, price, originalPrice, sold, views } = props
  return (
    <>
      <div className={`${styles['col-md-3']}`}>
        <Link to={`/product/${_id}`}>
          <div className={`${styles['card']} ${styles['card-product-grid']}`}>
            <a className={`${styles['img-wrap']}`}>
              <img src={images[0]} />
            </a>
            <figcaption className={`${styles['info-wrap']}`}>
              <div
                className={`${styles['title']}`}
                style={{
                  fontWeight: 'bold',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  color: 'black',
                  height: '60px',
                  lineHeight: '30px'
                }}
              >
                {name}
              </div>
              <div className={`${styles['row']} ${styles['col-sm-12']}`}>
                <div className={`${styles['price']} ${styles['mt-1']}`} style={{ color: 'red' }}>
                  ₫ {numberSeparator(price)}
                </div>
                {price !== originalPrice && (
                  <div className={`${styles['price-old']} ${styles['mt-2']}`}>
                    <del>₫ {numberSeparator(originalPrice)}</del>
                  </div>
                )}
              </div>
              <div className={`${styles['row']} ${styles['mt-1']} ${styles['text-dark']}`}>
                <div className="col-sm-6 text-left">
                  Đã bán <b>{sold}</b>
                </div>
                <div className="col-sm-6 text-right">
                  <b>{views}</b> lượt xem
                </div>
              </div>
            </figcaption>
          </div>
        </Link>
      </div>
    </>
  )
}

export default ProductItem
