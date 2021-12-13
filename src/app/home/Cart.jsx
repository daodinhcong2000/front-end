import { Affix, Spin } from 'antd'
import { Redirect, Link } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import CartItem from './components/CartItem'

import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { isAuthenticated } from '../../services/makeApiRequest'
import { _getMyCart } from '../../redux/actions/cartActions'

const Cart = (props) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(_getMyCart())
  }, [])
  const { items, loading } = useSelector((state) => state.cart)

  return (
    <>
      {!isAuthenticated() && <Redirect to="/" />}
      <Header />
      <div>
        <section className="section-pagetop bg">
          <div className="container">
            <h2 className="title-page">Giỏ hàng</h2>
          </div>
        </section>

        <section className="section-content padding-y">
          <div className="container">
            <div className="row">
              <main className="col-md-9">
                <div className="card">
                  <Spin spinning={loading} size="large">
                    <table className="table table-borderless table-shopping-cart">
                      <thead className="text-muted">
                        <tr className="small text-uppercase">
                          <th scope="col">Sản phẩm</th>
                          <th scope="col" width={120}>
                            Size
                          </th>
                          <th scope="col" width={120}>
                            Số lượng
                          </th>
                          <th scope="col" width={160}>
                            Thành tiền
                          </th>
                          <th scope="col" className="text-right" width={100}></th>
                          <th scope="col" width={20}></th>
                        </tr>
                      </thead>
                      <tbody>
                        {items.map((item, index) => {
                          return (
                            <>
                              <CartItem key={index} index={index} {...item} />
                            </>
                          )
                        })}
                      </tbody>
                    </table>
                  </Spin>

                  <div
                    className="card-body border-top"
                    style={{ backgroundColor: !(items.length % 2) && 'whitesmoke' }}
                  >
                    <a href="#" className="btn btn-primary float-md-right">
                      Thanh toán <i className="fa fa-chevron-right" />
                    </a>
                    <Link to={`/search/?keyword=`} className="btn btn-light">
                      <i className="fa fa-chevron-left" /> Mua thêm
                    </Link>
                  </div>
                </div>
                <div className="alert alert-success mt-3">
                  <p className="icontext">
                    <i className="icon text-success fa fa-truck" /> Giao hàng miễn phí trong 5 ngày
                  </p>
                </div>
              </main>

              <aside className="col-md-3">
                <Affix offsetTop={131}>
                  <div className="card mb-3">
                    <div className="card-body">
                      <form>
                        <div className="form-group">
                          <div className="input-group">
                            <input type="text" className="form-control" name placeholder="Mã giảm giá" />
                            <span className="input-group-append">
                              <button className="btn btn-primary">Kích hoạt</button>
                            </span>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-body">
                      <dl className="dlist-align">
                        <dt>Tổng số tiền</dt>
                        <dd className="text-right">₫ 568</dd>
                      </dl>
                      <dl className="dlist-align">
                        <dt>Giảm</dt>
                        <dd className="text-right">₫ 0</dd>
                      </dl>
                      <dl className="dlist-align">
                        <dt>Thành tiền</dt>
                        <dd className="text-right  h5">
                          <strong>₫ 1,650</strong>
                        </dd>
                      </dl>
                      <hr />
                      <p className="text-center mb-3">
                        <img src="assets/images/misc/payments.png" height={26} />
                      </p>
                    </div>
                  </div>
                </Affix>
              </aside>
            </div>
          </div>
        </section>
        <section className="section-name bg padding-y">
          <div className="container">
            <h6>Payment and refund policy</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Cart
