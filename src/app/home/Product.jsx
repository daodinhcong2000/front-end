import styles from './css_modules/css/all.module.css'

import { Spin, Radio, InputNumber, message as Message } from 'antd'
import Footer from './components/Footer'
import Header from './components/Header'
import CommentProduct from './components/CommentProduct'
import PriceChart from './components/PriceChart'
import { ToastProvider } from '../../contexts/ToastProvider'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams, useHistory } from 'react-router-dom'

import numberSeparator from '../../helpers/validating/numberSeparator'
import { getOneProduct } from '../../services/api/userApi'
import { addToCart } from '../../services/api/customerApi'
import { _getMyCart } from '../../redux/actions/cartActions'

const Product = (props) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { productId } = useParams()
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(false)
  const [targetImage, setTargetImage] = useState('')
  const [targetSize, setTargetSize] = useState('')
  const [targetStock, setTargetStock] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const { loading: cartLoading, error: cartError } = useSelector((state) => state.cart)

  useEffect(() => {
    setLoading(true)
    getOneProduct(productId)
      .then((res) => {
        const { data } = res.data
        setProduct(data)
        setLoading(false)
      })
      .catch((e) => {
        const { status, data } = e.response
        if (status >= 500) {
          Message.error('Lỗi hệ thống, vui lòng thử lại sau!')
        } else {
          const { message } = data
          Message.error(message)
        }
        setLoading(false)
      })
  }, [productId])

  useEffect(() => {
    if (cartError) {
      Message.error(cartError)
    }
  }, [cartError])

  const handleAddToCart = async (e) => {
    setLoading(true)
    if (!targetSize) {
      Message.error('Vui lòng chọn size!')
      setLoading(false)
    } else if (!quantity) {
      Message.error('Vui lòng nhập số lượng muốn mua!')
      setLoading(false)
    } else {
      addToCart({ product: productId, size: targetSize, quantity })
        .then((res) => {
          Message.success(`Thêm ${quantity} sản phẩm vào giỏ thành công!`)
          setLoading(false)
          setQuantity(1)
          dispatch(_getMyCart())
        })
        .catch((e) => {
          const { status, data } = e.response
          if (status >= 500) {
            Message.error('Lỗi hệ thống, vui lòng thử lại sau!')
          } else {
            const { message } = data
            Message.error(message)
          }

          setLoading(false)
        })
    }
  }

  const handleBuy = (e) => {
    setLoading(true)
    if (!targetSize) {
      Message.error('Vui lòng chọn size!')
      setLoading(false)
    } else if (!quantity) {
      Message.error('Vui lòng nhập số lượng muốn mua!')
      setLoading(false)
    } else {
      addToCart({ product: productId, size: targetSize, quantity })
        .then((res) => {
          const { data } = res.data
          Message.success(`Thêm ${quantity} sản phẩm vào giỏ thành công!`)
          setLoading(false)
          setQuantity(1)
          history.push('/cart', data)
        })
        .catch((e) => {
          const { status, data } = e.response
          if (status >= 500) {
            Message.error('Lỗi hệ thống, vui lòng thử lại sau!')
          } else {
            const { message } = data
            Message.error(message)
          }

          setLoading(false)
        })
    }
  }

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
                      <article className="gallery-wrap" style={{ textAlign: 'center' }}>
                        <div className="img-big-wrap">
                          <img className="card img-wrap" src={targetImage || product.images[0]} />
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

                        {/* Name */}
                        <h3 className="title">{product.name}</h3>

                        <Link
                          to={`/shop/${product.shop._id}`}
                          className="btn-link text-warning"
                          style={{ fontSize: '120%' }}
                        >
                          <i className={`${styles['fa']} ${styles['fa-store']}`} /> {product.shop.name}
                        </Link>
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
                          <a className="btn-link text-muted mr-3">
                            {' '}
                            <i className={`${styles['fa']} ${styles['fa-book-open']}`} /> So sánh{' '}
                          </a>
                          <Link to={`/search?keyword=${product.category}`} className="text-primary btn-link">
                            #{product.category}
                          </Link>
                        </div>
                        <hr />

                        {/* Descroption */}
                        <div className="mb-3">
                          <h6 style={{ fontWeight: 'bold' }}>Mô tả</h6>
                          <>
                            {product.description.split('\n').map((paragraph, index) => {
                              return <p key={index}>{paragraph}</p>
                            })}
                          </>
                        </div>

                        {/* Sizes */}
                        <div className="form-group">
                          <label className="text-dark" style={{ fontWeight: 'bold' }}>
                            Loại hàng
                          </label>
                          <div>
                            <Radio.Group
                              onChange={(e) => {
                                const { value: sizeName, stock } = e.target
                                setTargetSize(sizeName)
                                setTargetStock(stock)
                              }}
                            >
                              {product.sizes
                                .sort((a, b) => a.name - b.name)
                                .map((size, index) => {
                                  const { name, numberInStock } = size
                                  return (
                                    <Radio.Button
                                      key={index}
                                      value={name}
                                      disabled={numberInStock === 0}
                                      style={{ margin: '3px' }}
                                      stock={numberInStock}
                                    >
                                      {name}
                                    </Radio.Button>
                                  )
                                })}
                            </Radio.Group>
                            <br />
                            <span>{targetSize && `${targetStock} sản phẩm có sẵn`}</span>
                          </div>
                        </div>

                        {/* Quantity */}
                        <div className="form-group">
                          <label className="text-dark" style={{ fontWeight: 'bold' }}>
                            Số lượng
                          </label>
                          <div>
                            <InputNumber
                              value={quantity}
                              min={1}
                              max={targetStock || 1}
                              onChange={(value) => setQuantity(value)}
                            />
                          </div>
                        </div>

                        {/* Price */}
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

              <article className="card mt-5"></article>

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
