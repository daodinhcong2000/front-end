import { Link } from 'react-router-dom'
import numberSeparator from '../../../helpers/validating/numberSeparator'

const ListItem = (props) => {
  const { _id, name, rating, description, images = [], price = 0, originalPrice = 0 } = props
  console.log(props)
  console.log(price)
  console.log(typeof price)
  return (
    <>
      <article className="card card-product-list">
        <div className="row no-gutters">
          <aside className="col-md-3">
            <a href="#" className="img-wrap">
              <img src={images[0]} />
            </a>
          </aside>

          <div className="col-md-6">
            <div className="info-main">
              <a href="#" className="h5 title">
                {name}
              </a>
              <div className="rating-wrap mb-3">
                <ul className="rating-stars">
                  <li className="stars-active w-80">
                    {rating >= 0.5 && <i className="fa fa-star" />}
                    {rating >= 1.5 && <i className="fa fa-star" />}
                    {rating >= 2.5 && <i className="fa fa-star" />}
                    {rating >= 3.5 && <i className="fa fa-star" />}
                    {rating >= 4.5 && <i className="fa fa-star" />}
                  </li>
                  <li>
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </li>
                </ul>
                <div className="label-rating">{rating}/5</div>
              </div>
              <p
                style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  color: 'black',
                  height: '90px',
                  lineHeight: '30px'
                }}
              >
                {description}
              </p>
            </div>
          </div>
          <aside className="col-sm-3">
            <div className="info-aside">
              <div className="price-wrap">
                <span className="price h5">₫ {numberSeparator(price)} </span>
                {originalPrice !== price && <del className="price-old">₫ {numberSeparator(originalPrice)}</del>}
              </div>
              <p className="text-success">Miễn phí giao hàng</p>
              <br />
              <p>
                <Link to={`/product/${_id}`}>
                  <button className="btn btn-primary btn-block">Xem sản phẩm</button>
                </Link>
                {/* <a href="#" className="btn btn-light btn-block">
                  <i className="fa fa-heart" />
                  <span className="text">Add to wishlist</span>
                </a> */}
              </p>
            </div>
          </aside>
        </div>
      </article>
    </>
  )
}

export default ListItem
