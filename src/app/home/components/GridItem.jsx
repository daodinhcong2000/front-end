import numberSeparator from '../../../helpers/validating/numberSeparator'

const GridItem = (props) => {
  const { _id, images = [], name, price } = props
  return (
    <>
      <div className="col-md-4">
        <figure className="card card-product-grid">
          <div className="img-wrap">
            <img src={images[0]} />
            <a className="btn-overlay" href="#">
              <i className="fa fa-search-plus" /> Xem sản phẩm
            </a>
          </div>
          <figcaption className="info-wrap">
            <div className="fix-height">
              <a href="#" className="title">
                {name}
              </a>
              <div className="price-wrap mt-2">
                <span className="price">₫ {numberSeparator(price)}</span>
              </div>
            </div>
            <a href="#" className="btn btn-block btn-primary">
              Thêm vào giỏ
            </a>
          </figcaption>
        </figure>
      </div>
    </>
  )
}

export default GridItem
