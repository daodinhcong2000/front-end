import React, { useState, useEffect } from 'react'

import { getRevenueCustomer, getUsers } from '../../../../services/api/adminApi'
import Chart from '../../components/Chart'
import { CFormSelect } from '@coreui/react'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

import moment from 'moment'

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

const StatisticCustomer = () => {
  const [statistics, setStatistics] = useState([])
  const [totalAmount, setTotalAmount] = useState([])
  const [orderCount, setOrderCount] = useState([])
  const [listUser, setListUser] = useState([])
  const [userId, setUserId] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getUsers({ roles: 'customer' }).then((response) => {
      setListUser(response.data.data.users)
      setLoading(false)
    })
  }, [])

  useEffect(() => {
    if (userId != '' && userId != 1) {
      getRevenueCustomer(userId, { from: moment().subtract(30, 'day'), to: moment() }).then((respone) => {
        setTotalAmount(respone.data.data.totalAmount)
        setOrderCount(respone.data.data.orderCount)
        setStatistics(respone.data.data.statistics)
        setLoading(false)
      })
    }
  }, [userId, loading])
  return (
    <div>
      <div className="mb-3" id="changeProduct">
        <CFormSelect
          aria-label="Default select example"
          onChange={(e) => {
            setLoading(true)
            setUserId(e.target.value)
          }}
        >
          <option value="1">Chọn khách hàng để xem</option>
          {listUser.map((user) => {
            return (
              <option value={user._id} key={user._id}>
                {user.username}
              </option>
            )
          })}
        </CFormSelect>
      </div>
      <Spin spinning={loading} indicator={antIcon}>
        {statistics != null ? (
          <Chart
            statistics={statistics}
            totalAmount={totalAmount}
            orderCount={orderCount}
            title={['Số lượng chi tiêu', 'Tổng chi tiêu', 'Chi tiêu']}
          />
        ) : (
          'Khách hàng chưa chi tiêu cho sản phẩm nào'
        )}
      </Spin>
    </div>
  )
}
export default StatisticCustomer
