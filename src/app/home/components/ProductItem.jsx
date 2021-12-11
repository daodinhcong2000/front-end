import styles from '../css_modules/css/all.module.css'

import { Link } from 'react-router-dom'
import Loading from 'react-loading'

import numberSeparator from '../../../helpers/validating/numberSeparator'
import CommentProduct from './CommentProduct'

const ProductItem = (props) => {
  const { id, image, name, price } = props
  return (
    <>
      <div className={`${styles['col-md-3']}`}>
        <Link to={`/product/${id}`}>
          <div href="#" className={`${styles['card']} ${styles['card-product-grid']}`}>
            <a href="#" className={`${styles['img-wrap']}`}>
              <img src={image} />
            </a>
            <figcaption className={`${styles['info-wrap']}`}>
              <div
                className={`${styles['title']}`}
                style={{
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
              <div className={`${styles['price']} ${styles['mt-1']}`} style={{ color: 'red' }}>
                ₫ {numberSeparator(price)}
              </div>
            </figcaption>
          </div>
        </Link>
      </div>
    </>
  )
}

export default ProductItem
