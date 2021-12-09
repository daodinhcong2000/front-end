import { Link } from 'react-router-dom'

import numberSeparator from '../../../helpers/validating/numberSeparator'

const ProductItem = (props) => {
  const { id, image, name, price } = props
  return (
    <>
      <div className="col-md-3">
        <Link to={`/product/${id}`}>
          <div href="#" className="card card-product-grid">
            <a href="#" className="img-wrap">
              {' '}
              <img src={image} />{' '}
            </a>
            <figcaption className="info-wrap">
              <div
                className="title"
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
              <div className="price mt-1" style={{ color: 'red' }}>
                ₫{numberSeparator(price)}
              </div>
            </figcaption>
          </div>
        </Link>
      </div>
    </>
  )
}

export default ProductItem
