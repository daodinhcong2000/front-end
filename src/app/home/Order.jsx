import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
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
  const history = useHistory()
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [status, setStatus] = useState(history.location.state || '')
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
        setLoading(false)
      })
      .catch((err) => {
        message.error(err.response.data.message)
        setLoading(false)
      })
  }

  const delOrder = (orderId) => {
    cancelOrder(orderId)
      .then((respone) => {
        message.success(respone.data.message)
        setLoading(false)
      })
      .catch((err) => {
        message.error(err.response.data.message)
        setLoading(false)
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
      title: 'B???n ch???c ch???n mu???n h???y ????n h??ng n??y?',
      icon: <ExclamationCircleOutlined />,
      okText: '?????ng ??',
      okType: 'danger',
      cancelText: 'Quay l???i',
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
            <Title level={2}>Tr???ng th??i ????n h??ng</Title>
          </div>
        </section>
        <div className="container">
          <Tabs defaultActiveKey={history.location.state || ''} onChange={callback}>
            <TabPane tab="T???t c???" key=""></TabPane>
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
                      <div key={i}>
                        <OrderItem shopName={order.shop.name} itemData={order.items} />
                        <div className="mb-3">
                          <CRow>
                            <CCol xs={8}>
                              <CBadge color={getBadge(order.status)}>{ORDER_STATUSES_MAPPING[order.status]}</CBadge>
                            </CCol>
                            <CCol xs={2}>
                              <p>T???ng s??? ti???n: ??? {numberSeparator(order.totalPrice + order.shippingCost)} </p>
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
                                  H???y ????n h??ng
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
                                  loading={true}
                                  onClick={() => {
                                    setLoading(true)
                                    confirmOd(order._id)
                                  }}
                                >
                                  ???? nh???n h??ng
                                </CButton>
                              </CCol>
                            ) : (
                              ''
                            )}
                          </CRow>
                        </div>
                      </div>
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
