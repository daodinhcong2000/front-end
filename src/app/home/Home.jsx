import './assets/css/all.min.css'
import './assets/css/bootstrap.css'
import './assets/css/responsive.css'
import './assets/css/ui.css'

import Header from './components/Header'
import Footer from './components/Footer'
import ProductItem from './components/ProductItem'
import { Spin } from 'antd'

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
                const { _id: id, images, name, price } = item
                return (
                  <>
                    <ProductItem key={index} id={id} image={images[0]} name={name} price={price} />
                  </>
                )
              })}
            </div>
          </Spin>
        </div>
      </section>

      <Footer />

      {/* <footer class="section-footer border-top bg">
        <div class="container">
          <section class="footer-top  padding-y">
            <div class="row">
              <aside class="col-md col-6">
                <h6 class="title">Brands</h6>
                <ul class="list-unstyled">
                  <li> <a href="#">Adidas</a></li>
                  <li> <a href="#">Puma</a></li>
                  <li> <a href="#">Reebok</a></li>
                  <li> <a href="#">Nike</a></li>
                </ul>
              </aside>
              <aside class="col-md col-6">
                <h6 class="title">Company</h6>
                <ul class="list-unstyled">
                  <li> <a href="#">About us</a></li>
                  <li> <a href="#">Career</a></li>
                  <li> <a href="#">Find a store</a></li>
                  <li> <a href="#">Rules and terms</a></li>
                  <li> <a href="#">Sitemap</a></li>
                </ul>
              </aside>
              <aside class="col-md col-6">
                <h6 class="title">Help</h6>
                <ul class="list-unstyled">
                  <li> <a href="#">Contact us</a></li>
                  <li> <a href="#">Money refund</a></li>
                  <li> <a href="#">Order status</a></li>
                  <li> <a href="#">Shipping info</a></li>
                  <li> <a href="#">Open dispute</a></li>
                </ul>
              </aside>
              <aside class="col-md col-6">
                <h6 class="title">Account</h6>
                <ul class="list-unstyled">
                  <li> <a href="#"> User Login </a></li>
                  <li> <a href="#"> User register </a></li>
                  <li> <a href="#"> Account Setting </a></li>
                  <li> <a href="#"> My Orders </a></li>
                </ul>
              </aside>
              <aside class="col-md">
                <h6 class="title">Social</h6>
                <ul class="list-unstyled">
                  <li><a href="#"> <i class="fab fa-facebook"></i> Facebook </a></li>
                  <li><a href="#"> <i class="fab fa-twitter"></i> Twitter </a></li>
                  <li><a href="#"> <i class="fab fa-instagram"></i> Instagram </a></li>
                  <li><a href="#"> <i class="fab fa-youtube"></i> Youtube </a></li>
                </ul>
              </aside>
            </div>
          </section>

          <section class="footer-bottom row">
            <div class="col-md-2">
              <p class="text-muted">   2021 Company name </p>
            </div>
            <div class="col-md-8 text-md-center">
              <span class="px-2">info@com</span>
              <span class="px-2">+000-000-0000</span>
              <span class="px-2">Street name 123, ABC</span>
            </div>
            <div class="col-md-2 text-md-right text-muted">
              <i class="fab fa-lg fa-cc-visa"></i>
              <i class="fab fa-lg fa-cc-paypal"></i>
              <i class="fab fa-lg fa-cc-mastercard"></i>
            </div>
          </section>
        </div>
      </footer> */}
    </div>
  )
}

export default Home
