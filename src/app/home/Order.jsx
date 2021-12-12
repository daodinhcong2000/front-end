import React, { useState, useEffect } from 'react'
import { getOrder, confirmOrder, cancelOrder } from '../../services/api/customerApi'
import OrderItem from './components/OrderItem'
import Footer from './components/Footer'
import Header from './components/Header'
import { CBadge, CRow, CCol, CButton } from '@coreui/react-pro'
import { ORDER_STATUSES_MAPPING } from 'accommerce-helpers'

const Context = React.createContext()

const Order = (props) => {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getOrder({}).then((response) => {
      setOrders(response.data.data)
      setLoading(false)
    })
  }, [loading])

  const confirm = (orderId) => {
    confirmOrder(orderId)
      .then((respone) => {
        alert(respone.data.message)
        setLoading(true)
      })
      .catch((err) => {
        alert(err.response.data.message)
      })
  }

  const delOrder = (orderId) => {
    cancelOrder(orderId)
      .then((respone) => {
        alert(respone.data.message)
        setLoading(true)
      })
      .catch((err) => {
        alert(err.response.data.message)
      })
  }
  const getBadge = (status) => {
    switch (status) {
      case 'Delivered':
        return 'success'
      case 'Waiting for seller confirm':
        return 'warning'
      case 'In transit':
        return 'info'
      case 'Cancelled by customer':
        return 'danger'
      case 'Cancelled by seller':
        return 'danger'
      default:
        return 'primary'
    }
  }
  return (
    <>
      <Header />
      <div>
        <section className="section-pagetop bg">
          <div className="container">
            <h2 className="title-page">Trạng thái đơn hàng</h2>
          </div>
        </section>

        <section className="section-content padding-y">
          <div className="container">
            <div className="row">
              <main className="col-md-12">
                {orders.map((order, i) => {
                  return (
                    <>
                      <OrderItem key={i} shopName={order.shop.name} itemData={order.items} />
                      <div className="mb-3">
                        <CRow>
                          <CCol xs={10}>
                            <CBadge color={getBadge(order.status)}>{ORDER_STATUSES_MAPPING[order.status]}</CBadge>
                          </CCol>
                          {order.status == 'Waiting for seller confirm' ? (
                            <CCol xs={2}>
                              <CButton
                                color="danger"
                                shape="rounded-pill"
                                onClick={() => {
                                  delOrder(order._id)
                                }}
                              >
                                Hủy đơn hàng
                              </CButton>
                            </CCol>
                          ) : (
                            ''
                          )}
                          {order.status == 'In transit' ? (
                            <CCol xs={2}>
                              <CButton
                                color="success"
                                shape="rounded-pill"
                                onClick={() => {
                                  confirm(order._id)
                                }}
                              >
                                Đã nhận hàng
                              </CButton>
                            </CCol>
                          ) : (
                            ''
                          )}
                        </CRow>
                      </div>
                    </>
                  )
                })}
              </main>
            </div>
          </div>
        </section>
        <section className="section-name bg padding-y"></section>
      </div>

      <Footer />
    </>
  )
}

export default Order
