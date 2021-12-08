const ListItem = (props) => {
  return (
    <>
      <article className="card card-product-list">
        <div className="row no-gutters">
          <aside className="col-md-3">
            <a href="#" className="img-wrap">
              <img src="assets/images/items/6.jpg" />
            </a>
          </aside>
          <div className="col-md-6">
            <div className="info-main">
              <a href="#" className="h5 title">
                {' '}
                Product name can be here
              </a>
              <div className="rating-wrap mb-3">
                <ul className="rating-stars">
                  <li className="stars-active w-80">
                    <i className="fa fa-star" /> <i className="fa fa-star" />
                    <i className="fa fa-star" /> <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" /> <i className="fa fa-star" />
                    <i className="fa fa-star" /> <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </li>
                </ul>
                <div className="label-rating">7/10</div>
              </div>
              <p>
                {' '}
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer
                adipiscing elit, Ut wisi enim ad minim veniam{' '}
              </p>
            </div>
          </div>
          <aside className="col-sm-3">
            <div className="info-aside">
              <div className="price-wrap">
                <span className="price h5"> $62 </span>
              </div>
              <p className="text-success">Free shipping</p>
              <br />
              <p>
                <a href="#" className="btn btn-primary btn-block">
                  {' '}
                  Details{' '}
                </a>
                <a href="#" className="btn btn-light btn-block">
                  <i className="fa fa-heart" />
                  <span className="text">Add to wishlist</span>
                </a>
              </p>
            </div>
          </aside>
        </div>
      </article>
    </>
  )
}

export default ListItem
