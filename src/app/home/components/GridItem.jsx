import styles from '../css_modules/css/all.module.css'

import numberSeparator from '../../../helpers/validating/numberSeparator'
import { Link } from 'react-router-dom'

const GridItem = (props) => {
  const { _id, images = [], name, price } = props
  return (
    <>
      <div className={`${styles['col-md-4']}`}>
        <figure className={`${styles['card']} ${styles['card-product-grid']}`}>
          <div className={`${styles['img-wrap']}`}>
            <img src={images[0]} />
            <Link className={`${styles['btn-overlay']}`} to={`/product/${_id}`}>
              <i className={`${styles['fa']} ${styles['fa-search-plus']}`} /> Xem sản phẩm
            </Link>
          </div>
          <figcaption className={`${styles['info-wrap']}`}>
            <div className={`${styles['fix-height']}`}>
              <a href="#" className={`${styles['title']}`}>
                {name}
              </a>
              <div className={`${styles['price-wrap']} ${styles['mt-2']}`}>
                <span className={`${styles['price']}`}>₫ {numberSeparator(price)}</span>
              </div>
            </div>
            <button href="#" className={`${styles['btn']} ${styles['btn-block']} ${styles['btn-primary']}`}>
              Thêm vào giỏ
            </button>
          </figcaption>
        </figure>
      </div>
    </>
  )
}

export default GridItem
