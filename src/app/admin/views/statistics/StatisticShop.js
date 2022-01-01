import React, { useState, useEffect } from 'react'
import { getRevenueShop, getShops } from '../../../../services/api/adminApi'
import { CFormSelect } from '@coreui/react'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

import Chart from '../../components/Chart'
import moment from 'moment'

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

const StatisticShop = () => {
  const [listShop, setListShops] = useState([])
  const [shopId, setShopId] = useState('')
  const [statistics, setStatistics] = useState([])
  const [totalAmount, setTotalAmount] = useState([])
  const [orderCount, setOrderCount] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getShops().then((response) => {
      setListShops(response.data.data)
      setLoading(false)
    })
  }, [])

  useEffect(() => {
    if (shopId != '' && shopId != 1) {
      getRevenueShop(shopId, { from: moment().subtract(30, 'day'), to: moment() }).then((respone) => {
        setTotalAmount(respone.data.data.totalAmount)
        setOrderCount(respone.data.data.orderCount)
        setStatistics(respone.data.data.statistics)
        setLoading(false)
      })
    }
  }, [shopId, loading])
  return (
    <div>
      <div className="mb-3" id="changeProduct">
        <CFormSelect
          aria-label="Default select example"
          onChange={(e) => {
            setLoading(true)
            setShopId(e.target.value)
          }}
        >
          <option value="1">Chọn shop để xem</option>
          {listShop.map((shop) => {
            return (
              <option value={shop._id} key={shop._id}>
                {shop.name}
              </option>
            )
          })}
        </CFormSelect>
      </div>
      <Spin spinning={loading} indicator={antIcon}>
        {statistics != null ? (
          <Chart statistics={statistics} totalAmount={totalAmount} orderCount={orderCount} />
        ) : (
          'Cửa hàng hiện tại chưa có doanh thu'
        )}
      </Spin>
    </div>
  )
}
export default StatisticShop
