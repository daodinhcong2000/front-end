import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Spin, Radio } from 'antd'
import Footer from './components/Footer'
import Header from './components/Header'
import CommentProduct from './components/CommentProduct'
import PriceChart from './components/PriceChart'
import classnames from 'classnames'
import { ToastProvider } from '../../contexts/ToastProvider'
import numberSeparator from '../../helpers/validating/numberSeparator'
import { getOneProduct } from '../../services/api/userApi'

const Product = (props) => {
  const { productId } = useParams()
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(false)
  const [targetImage, setTargetImage] = useState('')
  const [targetSize, setTargetSize] = useState('')
  useEffect(() => {
    setLoading(true)
    getOneProduct(productId)
      .then((res) => {
        const { data } = res.data
        setProduct(data)
        setTargetImage(product.images[0])
      })
      .catch((e) => {
        console.log(e.response)
      })

    setLoading(false)
  }, [productId])

  const handleAddToCart = (e) => {}

  const handleBuy = (e) => {}

  return (
    <>
      <Header />

      <Spin spinning={loading} size="large">
        {Object.keys(product).length && (
          <section className="section-content padding-y bg">
            <div className="container">
              <article className="card">
                <div className="card-body">
                  <div className="row">
                    {/* Images */}
                    <aside className="col-md-6">
                      <article className="gallery-wrap">
                        <div className="card img-big-wrap">
                          <img className="card img-big-wrap" src={targetImage} />
                        </div>

                        <div className="thumbs-wrap">
                          {product.images.map((image, index) => {
                            return (
                              <>
                                <img
                                  key={index}
                                  className="item-thumb"
                                  src={image}
                                  onClick={(e) => setTargetImage(e.target.src)}
                                />
                              </>
                            )
                          })}
                        </div>
                      </article>
                    </aside>

                    <main className="col-md-6">
                      <article>
                        {/* Category */}
                        <a href="#" className="text-primary btn-link">
                          {product.category}
                        </a>

                        {/* Name */}
                        <h3 className="title">{product.name}</h3>

                        {/* Rating */}
                        <div>
                          <ul className="rating-stars">
                            <li className="stars-active">
                              {product.rating >= 0.5 && <i className="fa fa-star" />}
                              {product.rating >= 1.5 && <i className="fa fa-star" />}
                              {product.rating >= 2.5 && <i className="fa fa-star" />}
                              {product.rating >= 3.5 && <i className="fa fa-star" />}
                              {product.rating >= 4.5 && <i className="fa fa-star" />}
                            </li>
                            <li>
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </li>
                          </ul>
                          <span className="label-rating mr-3 text-muted">{product.rating}/5</span>
                          <a className="btn-link  mr-3 text-muted">
                            {' '}
                            <i className="fa fa-heart" /> Thích{' '}
                          </a>
                          <a className="btn-link text-muted">
                            {' '}
                            <i className="fa fa-book-open" /> So sánh{' '}
                          </a>
                        </div>
                        <hr />

                        {/* Descroption */}
                        <div className="mb-3">
                          <h6>Mô tả</h6>
                          <text>{product.description}</text>
                        </div>

                        {/* Sizes */}
                        <div className="form-group">
                          <label className="text-muted">Size</label>
                          <div>
                            <Radio.Group>
                              {product.sizes.map((size, index) => {
                                const { name, numberInStock } = size
                                return (
                                  <Radio.Button
                                    value={name}
                                    className="rounded"
                                    disabled={numberInStock === 0}
                                    onClick={(e) => {
                                      setTargetSize(name)
                                    }}
                                    style={{ margin: '3px' }}
                                  >
                                    {name}
                                  </Radio.Button>
                                )
                              })}
                            </Radio.Group>
                          </div>
                        </div>
                        <div className="mb-3">
                          <var className="price h4" style={{ color: 'red' }}>
                            ₫ {numberSeparator(product.price)}
                          </var>{' '}
                          <br />
                          {product.originalPrice !== product.price && (
                            <del className="price-old h5">₫ {numberSeparator(product.originalPrice)}</del>
                          )}
                        </div>
                        <div className="mb-4">
                          <button className="btn btn-primary mr-1" onClick={handleBuy}>
                            Mua ngay
                          </button>
                          <button className="btn btn-light" onClick={handleAddToCart}>
                            Thêm vào giỏ
                          </button>
                        </div>
                      </article>
                    </main>
                  </div>
                </div>
              </article>

              <article className="card mt-5">
                <div className="card-body">
                  <div className="row">
                    <aside className="col-md-6">
                      <h5>Parameters</h5>
                      <dl className="row">
                        <dt className="col-sm-3">Display</dt>
                        <dd className="col-sm-9">13.3-inch LED-backlit display with IPS</dd>
                        <dt className="col-sm-3">Processor</dt>
                        <dd className="col-sm-9">2.3GHz dual-core Intel Core i5</dd>
                        <dt className="col-sm-3">Camera</dt>
                        <dd className="col-sm-9">720p FaceTime HD camera</dd>
                        <dt className="col-sm-3">Memory</dt>
                        <dd className="col-sm-9">8 GB RAM or 16 GB RAM</dd>
                        <dt className="col-sm-3">Graphics</dt>
                        <dd className="col-sm-9">Intel Iris Plus Graphics 640</dd>
                      </dl>
                    </aside>
                    <aside className="col-md-6">
                      <h5>Features</h5>
                      <ul className="list-check">
                        <li>Best performance of battery</li>
                        <li>5 years warranty for this product</li>
                        <li>Amazing features and high quality</li>
                        <li>Best performance of battery</li>
                        <li>5 years warranty for this product</li>
                      </ul>
                    </aside>
                  </div>
                  <hr />
                </div>
              </article>

              <div className="card-body">
                <ToastProvider>
                  <PriceChart productId={productId} />
                </ToastProvider>
              </div>
              <article className="card mt-5">
                <div className="card-body">
                  <h5>Bình luận</h5>
                  <ToastProvider>
                    <CommentProduct productId={productId} />
                  </ToastProvider>
                </div>
              </article>
            </div>
          </section>
        )}
      </Spin>

      <Footer />
    </>
  )
}

export default Product
