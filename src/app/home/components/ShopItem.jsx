import styles from '../css_modules/css/all.module.css'

import { Link } from 'react-router-dom'

import numberSeparator from '../../../helpers/validating/numberSeparator'

const ShopItem = (props) => {
  const { name, thumbnail, productId, price, sold, views } = props
  return (
    <div className={`${styles['col-sm-6']} ${styles['col-lg-3']}`}>
      <div className={`${styles['single-publication']}`}>
        <figure>
          <a href="#">
            <img src={thumbnail} alt="Publication Image" />
          </a>
          <ul>
            <li>
              <a title="Add to Favorite">
                <i className={`${styles['fa']} ${styles['fa-heart']}`} />
              </a>
            </li>

            <li>
              <Link to={`/product/${productId}`}>
                <i className={`${styles['fa']} ${styles['fa-search']}`} />
              </Link>
            </li>
          </ul>
        </figure>

        <div className={`${styles['publication-content']}`}>
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
            <h3>
              <Link to={`/product/${productId}`}>{name}</Link>
            </h3>
          </div>

          <div className={`${styles['row']} ${styles['mt-1']} ${styles['text-dark']}`} style={{ marginTop: '2em' }}>
            <div className="col-sm-6 text-left">
              Đã bán <b>{sold}</b>
            </div>
            <div className="col-sm-6 text-right">
              <b>{views}</b> lượt xem
            </div>
          </div>

          <div className={`${styles['row']} ${styles['col-sm-12']}`}>
            <div className={`${styles['price']} ${styles['mt-1']}`} style={{ color: 'red' }}>
              ₫ {numberSeparator(price)}
            </div>
          </div>
        </div>

        {/* <div className={`${styles['add-to-cart']}`}>
          <button className={`${styles['default-btn']}`}>Thêm vào giỏ</button>
        </div> */}
      </div>
    </div>
  )
}

export default ShopItem
