import { Modal, Menu, Dropdown, Button, Spin } from 'antd'
import { UserOutlined, SettingOutlined, LogoutOutlined, ShopFilled } from '@ant-design/icons'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import ForgotForm from './ForgotForm'

import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'

import { isAuthenticated } from '../../../services/makeApiRequest'
import { _showLogForm, _hideLogForm } from '../../../redux/actions/logFormActions'
import { _setUser, _logout } from '../../../redux/actions/userActions'
import { _getMyCart } from '../../../redux/actions/cartActions'
import { _search } from '../../../redux/actions/searchActions'

import styles from '../css_modules/css/all.module.css'

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
      <div className={`${styles['widget-header']} ${styles['icontext']}`}>
        <button
          className={`${styles['icon']} ${styles['icon-sm']} ${styles['rounded-circle']} ${styles['border']}`}
          onClick={showModal}
        >
          <i className={`${['fa']} ${styles['fa-user']}`} />
        </button>
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

const UserMenu = (props) => {
  const dispatch = useDispatch()
  const { loading, username, fullName, roles } = useSelector((state) => state.user)

  useEffect(() => {
    if (!username) dispatch(_setUser())
  }, [])

  const handleMenuClick = (e) => {
    const { key } = e
    switch (key) {
      case 'self': {
        break
      }

      case 'seller': {
        break
      }

      case 'setting': {
        break
      }

      case 'logout': {
        dispatch(_logout())
      }

      default: {
        break
      }
    }
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="self" icon={<UserOutlined />}>
        {fullName}
      </Menu.Item>

      <Menu.Item key="seller" icon={<ShopFilled />}>
        {roles.includes('seller') ? (
          <a href="/seller" style={{ textDecoration: 'none' }}>
            Kênh bán hàng
          </a>
        ) : (
          <Link to="/" style={{ textDecoration: 'none' }}>
            Đăng ký bán
          </Link>
        )}
      </Menu.Item>

      <Menu.Item key="setting" icon={<SettingOutlined />}>
        Cài đặt
      </Menu.Item>

      <Menu.Item key="logout" icon={<LogoutOutlined />}>
        Đăng xuất
      </Menu.Item>
    </Menu>
  )

  return (
    <Dropdown overlay={menu}>
      <Button className={`${styles['border']}`} size="large" shape="round" style={{ height: '48px' }}>
        <Spin spinning={loading} size="small">
          <i className={`${styles['fa']} ${styles['fa-user']}`}>{` ${username}`}</i>
        </Spin>
      </Button>
    </Dropdown>
  )
}

const Cart = (props) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { loading, items } = useSelector((state) => state.cart)
  const { username } = useSelector((state) => state.user)
  useEffect(() => {
    if (isAuthenticated()) {
      dispatch(_getMyCart())
    }
  }, [loading, username])

  const handleCartClick = (e) => {
    if (!isAuthenticated()) {
      dispatch(_showLogForm())
    } else {
      history.push('/cart')
    }
  }

  return (
    <>
      <div className={`${styles['widget-header']} ${styles['mr-3']}`}>
        <button
          className={`${styles['icon']} ${styles['icon-sm']} ${styles['rounded-circle']} ${styles['border']}`}
          onClick={handleCartClick}
        >
          <i className={`${styles['fa']} ${styles['fa-shopping-cart']}`} />
        </button>
        <span className={`${styles['badge']} ${styles['badge-pill']} ${styles['badge-danger']} ${styles['notify']}`}>
          <Spin spinning={false}>{items.length}</Spin>
        </span>
      </div>
    </>
  )
}

const Header = (props) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [keyword, setKeyword] = useState('')

  const { username } = useSelector((state) => state.user)
  useEffect(() => {
    if (isAuthenticated() && !username) {
      dispatch(_setUser())
    }
  }, [username])

  const handleSearchClick = (e) => {
    history.push(`/search/${keyword.trim()}`)
    dispatch(_search(keyword.trim(), 1, 9, '-sold'))
  }

  return (
    <header className={`${styles['section-header']}`}>
      <section className={`${styles['header-main']} ${styles['border-bottom']}`}>
        <div className={`${styles['container']}`}>
          <div className={`${styles['row']} ${styles['align-items-center']}`}>
            <div className="col-lg-2 col-4">
              <a href="/">
                <img src="/img/acCommerce.png" style={{ height: '6rem' }} />
              </a>
            </div>

            <div className={`${styles['col-lg-6']} ${styles['col-sm-12']}`}>
              <div className={`${styles['input-group']} ${styles['w-100']}`}>
                <input
                  type="text"
                  className={`${styles['form-control']}`}
                  placeholder="Tìm kiếm sản phẩm, loại mặt hàng, ..."
                  onChange={(e) => setKeyword(e.target.value)}
                />
                <div className={`${styles['input-group-append']}`}>
                  {keyword ? (
                    <button className={`${styles['btn']} ${styles['btn-primary']}`} onClick={handleSearchClick}>
                      <i className={`${styles['fa']} ${styles['fa-search']}`} />
                    </button>
                  ) : (
                    <a href="/">
                      <button className={`${styles['btn']} ${styles['btn-primary']}`}>
                        <i className={`${styles['fa']} ${styles['fa-search']}`} />
                      </button>
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className={`${styles['col-lg-4']} ${styles['col-sm-6']} ${styles['col-12']}`}>
              <div className={`${styles['widgets-wrap']} ${styles['float-md-right']}`}>
                <Cart />
                {!isAuthenticated() ? <LogModal /> : <UserMenu />}
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  )
}

export default Header
