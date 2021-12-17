import styles from '../css_modules/css/all.module.css'

import numberSeparator from '../../../helpers/validating/numberSeparator'
import { Link } from 'react-router-dom'

const GridItem = (props) => {
  const { _id: productId, images = [], name, price, createdAt } = props
  const created = new Date(createdAt).getTime()

  return (
    <>
      <div className={`${styles['col-md-3']}`}>
        <figure className={`${styles['card']} ${styles['card-product-grid']}`}>
          <div className={`${styles['img-wrap']}`}>
            {Date.now() - created <= 7 * 24 * 60 * 60 * 1000 && <span className="badge badge-danger"> NEW </span>}
            <img src={images[0]} />
            <Link className={`${styles['btn-overlay']}`} to={`/product/${productId}`}>
              <i className={`${styles['fa']} ${styles['fa-search-plus']}`} /> Xem sản phẩm
            </Link>
          </div>
          <figcaption className={`${styles['info-wrap']}`}>
            <div>
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
                <Link cto={`/product/${productId}`} className="text-dark">
                  {name}
                </Link>
              </div>
              <div className={`${styles['price-wrap']} ${styles['mt-2']}`}>
                <span className={`${styles['price']}`} style={{ color: 'red' }}>
                  ₫ {numberSeparator(price)}
                </span>
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </>
  )
}

export default GridItem
