import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'

import { Modal } from 'antd'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import ForgotForm from './ForgotForm'

import { _showLogForm, _hideLogForm } from '../../../redux/actions/logFormActions'

const LogModal = (props) => {
  const { visible, mode } = useSelector((state) => state.logForm)
  const dispatch = useDispatch()

  const showModal = (e) => {
    dispatch(_showLogForm())
  }
  const closeModal = (e) => {
    dispatch(_hideLogForm())
  }

  return (
    <>
      <div className="widget-header icontext">
        <button className="icon icon-sm rounded-circle border" onClick={showModal}>
          <i className="fa fa-user" />
        </button>

        <div className="text">
          <span className="text-muted">Welcome!</span>
        </div>
      </div>

      <Modal
        visible={visible}
        title={mode === 'forgot' ? 'Lấy lại mật khẩu' : mode === 'login' ? 'Đăng nhập' : 'Đăng ký'}
        onCancel={closeModal}
        closeable={true}
        footer={null}
      >
        {mode === 'forgot' ? <ForgotForm /> : mode === 'login' ? <LoginForm /> : <RegisterForm />}
      </Modal>
    </>
  )
}

const Header = (props) => {
  const [keyword, setKeyword] = useState('')

  return (
    <header className="section-header">
      <section className="header-main border-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-2 col-4">
              <a href="/">
                <img src="/img/acCommerce.png" style={{ height: '6rem' }} />
              </a>
            </div>

            <div className="col-lg-6 col-sm-12">
              <div className="input-group w-100">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tìm kiếm sản phẩm, loại mặt hàng, ..."
                  onChange={(e) => setKeyword(e.target.value)}
                />
                <div className="input-group-append">
                  {keyword ? (
                    <Link to={`/search/${keyword}`}>
                      <button className="btn btn-primary">
                        <i className="fa fa-search" />
                      </button>
                    </Link>
                  ) : (
                    <a href="/">
                      <button className="btn btn-primary">
                        <i className="fa fa-search" />
                      </button>
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-12">
              <div className="widgets-wrap float-md-right">
                <div className="widget-header  mr-3">
                  <Link to="/cart">
                    <button href="#" className="icon icon-sm rounded-circle border">
                      <i className="fa fa-shopping-cart" />
                    </button>
                    <span className="badge badge-pill badge-danger notify">1</span>
                  </Link>
                </div>

                <LogModal />
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  )
}

export default Header
