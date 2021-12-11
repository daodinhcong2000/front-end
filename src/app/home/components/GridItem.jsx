import styles from '../css_modules/css/all.module.css'

import numberSeparator from '../../../helpers/validating/numberSeparator'

const GridItem = (props) => {
  const { _id, images = [], name, price } = props
  return (
    <>
      <div className={`${styles['col-md-4']}`}>
        <figure className={`${styles['card']} ${styles['card-product-grid']}`}>
          <div className={`${styles['img-wrap']}`}>
            <img src={images[0]} />
            <a className={`${styles['btn-overlay']}`} href="#">
              <i className={`${styles['fa']} ${styles['fa-search-plus']}`} /> Xem sản phẩm
            </a>
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
            <a href="#" className={`${styles['btn']} ${styles['btn-block']} ${styles['btn-primary']}`}>
              Thêm vào giỏ
            </a>
          </figcaption>
        </figure>
      </div>
    </>
  )
}

export default GridItem
