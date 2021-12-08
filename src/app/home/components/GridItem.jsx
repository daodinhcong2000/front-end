const GridItem = (props) => {
  return (
    <>
      <div className="col-md-4">
        <figure className="card card-product-grid">
          <div className="img-wrap">
            <img src="assets/images/items/4.jpg" />
            <a className="btn-overlay" href="#">
              <i className="fa fa-search-plus" /> Quick view
            </a>
          </div>
          <figcaption className="info-wrap">
            <div className="fix-height">
              <a href="#" className="title">
                Product name goes here just for demo item
              </a>
              <div className="price-wrap mt-2">
                <span className="price">$1280</span>
              </div>
            </div>
            <a href="#" className="btn btn-block btn-primary">
              Add to cart{' '}
            </a>
          </figcaption>
        </figure>
      </div>
    </>
  )
}

export default GridItem
