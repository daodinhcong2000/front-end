import Header from './components/Header'
import Footer from './components/Footer'

const Home = (props) => {
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
            <a href="#" className="btn btn-outline-primary float-right">
              See all
            </a>
            <h3 className="section-title">Popular products</h3>
          </header>
          <div className="row">
            <div className="col-md-3">
              <div href="#" className="card card-product-grid">
                <a href="#" className="img-wrap">
                  {' '}
                  <img src="assets/images/items/1.jpg" />{' '}
                </a>
                <figcaption className="info-wrap">
                  <a href="#" className="title">
                    Just another product name
                  </a>
                  <div className="price mt-1">$179.00</div>
                </figcaption>
              </div>
            </div>
            <div className="col-md-3">
              <div href="#" className="card card-product-grid">
                <a href="#" className="img-wrap">
                  {' '}
                  <img src="assets/images/items/2.jpg" />{' '}
                </a>
                <figcaption className="info-wrap">
                  <a href="#" className="title">
                    Some item name here
                  </a>
                  <div className="price mt-1">$280.00</div>
                </figcaption>
              </div>
            </div>
            <div className="col-md-3">
              <div href="#" className="card card-product-grid">
                <a href="#" className="img-wrap">
                  {' '}
                  <img src="assets/images/items/3.jpg" />{' '}
                </a>
                <figcaption className="info-wrap">
                  <a href="#" className="title">
                    Great product name here
                  </a>
                  <div className="price mt-1">$56.00</div>
                </figcaption>
              </div>
            </div>
            <div className="col-md-3">
              <div href="#" className="card card-product-grid">
                <a href="#" className="img-wrap">
                  {' '}
                  <img src="assets/images/items/4.jpg" />{' '}
                </a>
                <figcaption className="info-wrap">
                  <a href="#" className="title">
                    Just another product name
                  </a>
                  <div className="price mt-1">$179.00</div>
                </figcaption>
              </div>
            </div>
            <div className="col-md-3">
              <div href="#" className="card card-product-grid">
                <a href="#" className="img-wrap">
                  {' '}
                  <img src="assets/images/items/5.jpg" />{' '}
                </a>
                <figcaption className="info-wrap">
                  <a href="#" className="title">
                    Just another product name
                  </a>
                  <div className="price mt-1">$179.00</div>
                </figcaption>
              </div>
            </div>
            <div className="col-md-3">
              <div href="#" className="card card-product-grid">
                <a href="#" className="img-wrap">
                  {' '}
                  <img src="assets/images/items/6.jpg" />{' '}
                </a>
                <figcaption className="info-wrap">
                  <a href="#" className="title">
                    Some item name here
                  </a>
                  <div className="price mt-1">$280.00</div>
                </figcaption>
              </div>
            </div>
            <div className="col-md-3">
              <div href="#" className="card card-product-grid">
                <a href="#" className="img-wrap">
                  {' '}
                  <img src="assets/images/items/7.jpg" />{' '}
                </a>
                <figcaption className="info-wrap">
                  <a href="#" className="title">
                    Great product name here
                  </a>
                  <div className="price mt-1">$56.00</div>
                </figcaption>
              </div>
            </div>
            <div className="col-md-3">
              <div href="#" className="card card-product-grid">
                <a href="#" className="img-wrap">
                  {' '}
                  <img src="assets/images/items/9.jpg" />{' '}
                </a>
                <figcaption className="info-wrap">
                  <a href="#" className="title">
                    Just another product name
                  </a>
                  <div className="price mt-1">$179.00</div>
                </figcaption>
              </div>
            </div>
          </div>
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
