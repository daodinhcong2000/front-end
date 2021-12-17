import React, { useState, useEffect } from 'react'
import { getOrder, confirmOrder, cancelOrder } from '../../services/api/customerApi'
import { CBadge, CRow, CCol, CButton } from '@coreui/react-pro'
import { ORDER_STATUSES_MAPPING } from 'accommerce-helpers'
import { message, Tabs, Spin, Typography, Modal } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'

import OrderItem from './components/OrderItem'
import Footer from './components/Footer'
import Header from './components/Header'
import numberSeparator from '../../helpers/validating/numberSeparator'

const { confirm } = Modal
const { TabPane } = Tabs
const { Title } = Typography
const Order = (props) => {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [status, setStatus] = useState('')
  useEffect(() => {
    getOrder({ status: status }).then((response) => {
      setOrders(response.data.data)
      setLoading(false)
    })
  }, [loading])

  const confirmOd = (orderId) => {
    confirmOrder(orderId)
      .then((respone) => {
        message.success(respone.data.message)
        setLoading(true)
      })
      .catch((err) => {
        message.error(err.response.data.message)
        setLoading(true)
      })
  }

  const delOrder = (orderId) => {
    cancelOrder(orderId)
      .then((respone) => {
        message.success(respone.data.message)
        setLoading(true)
      })
      .catch((err) => {
        message.error(err.response.data.message)
        setLoading(true)
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
  function callback(key) {
    setStatus(key)
    setLoading(true)
  }

  const showDeleteConfirm = (orderId) => {
    confirm({
      title: 'Bạn chắc chắn muốn hủy đơn hàng này?',
      icon: <ExclamationCircleOutlined />,
      okText: 'Đồng ý',
      okType: 'danger',
      cancelText: 'Quay lại',
      onOk() {
        setLoading(true)
        delOrder(orderId)
      },
      onCancel() {}
    })
  }

  return (
    <>
      <Header />
      <div>
        <section className="section-pagetop bg">
          <div className="container">
            <Title level={2}>Trạng thái đơn hàng</Title>
          </div>
        </section>
        <div className="container">
          <Tabs defaultActiveKey="" onChange={callback}>
            <TabPane tab="Tất cả" key=""></TabPane>
            <TabPane
              tab={ORDER_STATUSES_MAPPING['Waiting for seller confirm']}
              key="Waiting for seller confirm"
            ></TabPane>
            <TabPane tab={ORDER_STATUSES_MAPPING['In transit']} key="In transit"></TabPane>
            <TabPane tab={ORDER_STATUSES_MAPPING['Delivered']} key="Delivered"></TabPane>
            <TabPane tab={ORDER_STATUSES_MAPPING['Cancelled by customer']} key="Cancelled by customer"></TabPane>
            <TabPane tab={ORDER_STATUSES_MAPPING['Cancelled by seller']} key="Cancelled by seller"></TabPane>
          </Tabs>
        </div>
        <Spin spinning={loading} delay={500}>
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
                            <CCol xs={8}>
                              <CBadge color={getBadge(order.status)}>{ORDER_STATUSES_MAPPING[order.status]}</CBadge>
                            </CCol>
                            <CCol xs={2}>
                              <p>Tổng số tiền: ₫ {numberSeparator(order.totalPrice + order.shippingCost)} </p>
                            </CCol>
                            {order.status == 'Waiting for seller confirm' ? (
                              <CCol xs={2}>
                                <CButton
                                  color="danger"
                                  shape="rounded-pill"
                                  onClick={() => {
                                    showDeleteConfirm(order._id)
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
                                    confirmOd(order._id)
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
        </Spin>
      </div>

      <Footer />
    </>
  )
}

export default Order
