import styles from '../css_modules/css/all.module.css'

import numberSeparator from '../../../helpers/validating/numberSeparator'
import { Link } from 'react-router-dom'

const GridItem = (props) => {
  console.log(props)
  const { _id: productId, images = [], name, price, originalPrice, createdAt, sold, views } = props
  const created = new Date(createdAt).getTime()
  const isNew = Date.now() - created <= 7 * 24 * 60 * 60 * 1000
  const sale = 100 - Math.floor((price / originalPrice) * 100)

  return (
    <>
      <div className={`${styles['col-md-3']}`}>
        <figure className={`${styles['card']} ${styles['card-product-grid']}`}>
          <div className={`${styles['img-wrap']}`}>
            {isNew ? (
              <span className="badge badge-danger"> NEW </span>
            ) : (
              sale > 10 && <span className="badge badge-danger"> SALE {sale}% </span>
            )}
            <img src={images[0]} />
            <Link className={`${styles['btn-overlay']}`} to={`/product/${productId}`}>
              <i className={`${styles['fa']} ${styles['fa-search-plus']}`} /> Xem sản phẩm
            </Link>
          </div>
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
          {/* <figcaption className={`${styles['info-wrap']}`}>
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
                  {numberSeparator(price)}₫{' '}
                </span>
                {originalPrice !== price && (
                  <span className={`${styles['old-price']}`} style={{ color: 'gray' }}>
                    <del>{numberSeparator(originalPrice)}₫</del>
                  </span>
                )}
              </div>
            </div>
          </figcaption> */}
        </figure>
      </div>
    </>
  )
}

export default GridItem
