import { Spin } from 'antd'
import Header from './components/Header'
import Footer from './components/Footer'
import ProductItem from './components/ProductItem'

import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { _search } from '../../redux/actions/searchActions'

const Home = (props) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { items = [], keyword, page, limit, sort, searching } = useSelector((state) => state.search)

  useEffect(() => {
    dispatch(_search(keyword.trim(), page, limit, sort))
  }, [])

  const handleMoreClick = (e) => {
    history.push('/search/')
  }

  return (
    <div className="App">
      <Header />

      <section className="section-main bg padding-y">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <article className="banner-wrap">
                <img src="assets/images/2.jpg" className="w-100 rounded" />
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section-name padding-y-sm">
        <div className="container">
          <header className="section-heading">
            <button className="btn btn-outline-primary float-right" onClick={handleMoreClick}>
              Thêm
            </button>
            <h3 className="section-title">Sản phẩm phổ biến</h3>
          </header>

          <Spin spinning={searching} size="large">
            <div className="row">
              {items.slice(0, 12).map((item, index) => {
                return (
                  <>
                    <ProductItem key={index} {...item} />
                  </>
                )
              })}
            </div>
          </Spin>
        </div>
      </section>

      {/* <Footer /> */}

      <footer className="section-footer border-top bg">
        <div className="container">
          <section className="footer-top  padding-y">
            <div className="row">
              <aside className="col-md col-6">
                <h6 className="title">Công ty</h6>
                <ul className="list-unstyled">
                  <li>
                    {' '}
                    <a href="#">Hệ thống</a>
                  </li>
                  <li>
                    {' '}
                    <a href="#">Chăm sóc khách hàng</a>
                  </li>
                  <li>
                    {' '}
                    <a href="#">Tìm kiếm cửa hàng</a>
                  </li>
                  <li>
                    {' '}
                    <a href="#">Quy định và điều khoản</a>
                  </li>
                </ul>
              </aside>
              <aside className="col-md col-6">
                <h6 className="title">Trợ giúp</h6>
                <ul className="list-unstyled">
                  <li>
                    {' '}
                    <a href="#">Liên hệ</a>
                  </li>
                  <li>
                    {' '}
                    <a href="#">Hoàn trả</a>
                  </li>
                  <li>
                    {' '}
                    <a href="#">Theo dõi đơn</a>
                  </li>
                  <li>
                    {' '}
                    <a href="#">Vận chuyển</a>
                  </li>
                </ul>
              </aside>
              <aside className="col-md col-6">
                <h6 className="title">Tài khoản</h6>
                <ul className="list-unstyled">
                  <li>
                    {' '}
                    <a href="#"> Đăng nhập </a>
                  </li>
                  <li>
                    {' '}
                    <a href="#"> Đăng ký </a>
                  </li>
                  <li>
                    {' '}
                    <a href="#"> Cài đặt tài khoản </a>
                  </li>
                  <li>
                    {' '}
                    <a href="#"> Đơn đã mua </a>
                  </li>
                </ul>
              </aside>
              <aside className="col-md">
                <h6 className="title">Social</h6>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">
                      {' '}
                      <i className="fab fa-facebook"></i> Facebook{' '}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {' '}
                      <i className="fab fa-twitter"></i> Twitter{' '}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {' '}
                      <i className="fab fa-instagram"></i> Instagram{' '}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {' '}
                      <i className="fab fa-youtube"></i> Youtube{' '}
                    </a>
                  </li>
                </ul>
              </aside>
            </div>
          </section>

          <section className="footer-bottom row">
            <div className="col-md-2">
              <p className="text-muted"> 2021 acCommerce </p>
            </div>
            <div className="col-md-8 text-md-center">
              <span className="px-2">support@accommerce.com</span>
              <span className="px-2">+84-333-333-333</span>
              <span className="px-2">Tháp Rùa, Lê Thái Tổ, Hoàn Kiếm, Hà Nội</span>
            </div>
            <div className="col-md-2 text-md-right text-muted">
              <i className="fab fa-lg fa-cc-visa"></i>
              <i className="fab fa-lg fa-cc-paypal"></i>
              <i className="fab fa-lg fa-cc-mastercard"></i>
            </div>
          </section>
        </div>
      </footer>
    </div>
  )
}

export default Home
