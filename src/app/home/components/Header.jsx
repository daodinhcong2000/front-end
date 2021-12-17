import { Modal, Menu, Dropdown, Button, Spin, message as Message, Affix } from 'antd'
import {
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
  ShopFilled,
  SecurityScanOutlined,
  ShoppingCartOutlined
} from '@ant-design/icons'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import ForgotForm from './ForgotForm'

import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'

import { isAuthenticated } from '../../../services/makeApiRequest'
import { _showLogForm, _hideLogForm } from '../../../redux/actions/logFormActions'
import { _setUser, _logout } from '../../../redux/actions/userActions'
import { _getMyCart } from '../../../redux/actions/cartActions'
import { _search } from '../../../redux/actions/searchActions'

import styles from '../css_modules/css/all.module.css'
import { toBeSeller } from '../../../services/api/customerApi'

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
  const [registeringSeller, setRegisteringSeller] = useState(false)

  useEffect(() => {
    if (!username) dispatch(_setUser())
  }, [])

  const handleMenuClick = (e) => {
    const { key } = e
    switch (key) {
      case 'toBeSeller': {
        setRegisteringSeller(true)

        toBeSeller()
          .then((res) => {
            Message.success(`Chúc mừng ${username} đã trở thành người bán hàng!`)
            setTimeout(() => {
              setRegisteringSeller(false)
              window.location.href = '/seller'
            }, 1000)
          })
          .catch((e) => {
            const { status } = e.response
            setRegisteringSeller(false)

            if (status >= 500) {
              return Message.error(`Lỗi hệ thống, vui lòng thử lại sau!`)
            } else {
              const { message } = e.response.data
              return Message.error(message)
            }
          })

        break
      }

      case 'logout': {
        dispatch(_logout())
        break
      }

      default: {
        break
      }
    }
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="self" icon={<UserOutlined />}>
        <Button type="text" style={{ fontWeight: 'bold' }}>
          {fullName}
        </Button>
      </Menu.Item>

      <Menu.Item key="bought" icon={<ShoppingCartOutlined />}>
        <Link to="/order">
          <Button type="text" style={{ textAlign: 'left' }}>
            Đơn hàng
          </Button>
        </Link>
      </Menu.Item>

      {roles.includes('admin') && (
        <Menu.Item key="admin" icon={<SecurityScanOutlined />}>
          <a href="/admin" style={{ textDecoration: 'none' }}>
            <Button type="text" style={{ textAlign: 'left' }}>
              Quản trị
            </Button>
          </a>
        </Menu.Item>
      )}

      {roles.includes('seller') ? (
        <Menu.Item key="seller" icon={<ShopFilled />}>
          <a href="/seller" style={{ textDecoration: 'none' }}>
            <Button type="text" style={{ textAlign: 'left' }}>
              Kênh bán hàng
            </Button>
          </a>
        </Menu.Item>
      ) : (
        <Menu.Item key="toBeSeller" icon={<ShopFilled />}>
          <Spin spinning={registeringSeller}>
            <Button type="text" style={{ textAlign: 'left' }}>
              Đăng ký bán
            </Button>
          </Spin>
        </Menu.Item>
      )}

      <Menu.Item key="setting" icon={<SettingOutlined />}>
        <Button type="text" style={{ textAlign: 'left' }}>
          Cài đặt
        </Button>
      </Menu.Item>

      <Menu.Item key="logout" icon={<LogoutOutlined />}>
        <Button type="text" style={{ textAlign: 'left' }}>
          Đăng xuất
        </Button>
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
  const { items, loading } = useSelector((state) => state.cart)
  const { fullName } = useSelector((state) => state.user)
  useEffect(() => {
    if (isAuthenticated()) {
      dispatch(_getMyCart())
    }
  }, [fullName])

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
          <Spin spinning={loading}>{items.length}</Spin>
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

  const {} = useSelector((state) => state.cart)
  useEffect(() => {}, [])

  const handleSearchClick = (e) => {
    history.push(`/search/?keyword=${keyword.trim()}`)
    dispatch(_search(keyword.trim(), 1, 9, '-sold'))
  }

  const handlePressEnter = (e) => {
    if (e.key === 'Enter') {
      handleSearchClick(e)
    }
  }

  return (
    <Affix offsetTop={0}>
      <header className={`${styles['section-header']}`} style={{ backgroundColor: 'white' }}>
        <section className={`${styles['header-main']} ${styles['border-bottom']}`}>
          <div className={`${styles['container']}`}>
            <div className={`${styles['row']} ${styles['align-items-center']}`}>
              <div className="col-lg-2 col-4">
                <a href="/">
                  <img src="/img/acCommerce.png" style={{ height: '6rem' }} />
                </a>
              </div>

              <div className={`${styles['col-lg-7']} ${styles['col-sm-12']}`}>
                <div className={`${styles['input-group']} ${styles['w-100']}`}>
                  <input
                    type="text"
                    className={`${styles['form-control']}`}
                    placeholder="Tìm kiếm sản phẩm, loại mặt hàng, ..."
                    onChange={(e) => setKeyword(e.target.value)}
                    onKeyPress={handlePressEnter}
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

              <div className={`${styles['col-lg-3']} ${styles['col-sm-6']} ${styles['col-12']}`}>
                <div className={`${styles['widgets-wrap']} ${styles['float-md-right']}`}>
                  <Cart />
                  {!isAuthenticated() ? <LogModal /> : <UserMenu />}
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
    </Affix>
  )
}

export default Header
