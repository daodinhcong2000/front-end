import React, { lazy, useState, useEffect } from 'react'

import { getRevenueSeller, getUsers } from '../../../../services/api/adminApi'
import Chart from '../../components/Chart'
import { CFormSelect } from '@coreui/react'
import moment from 'moment'
const StatisticSeller = () => {
  const [statistics, setStatistics] = useState([])
  const [totalAmount, setTotalAmount] = useState([])
  const [orderCount, setOrderCount] = useState([])
  const [listUser, setListUser] = useState([])
  const [userId, setUserId] = useState('')

  useEffect(() => {
    getUsers({ roles: 'seller' }).then((response) => {
      setListUser(response.data.data.users)
    })
  }, [])

  useEffect(() => {
    if (userId != '' && userId != 1) {
      getRevenueSeller(userId, { from: moment().subtract(7, 'day'), to: moment() }).then((respone) => {
        setTotalAmount(respone.data.data.totalAmount)
        setOrderCount(respone.data.data.orderCount)
        setStatistics(respone.data.data.statistics)
      })
    }
  }, [userId])
  return (
    <div>
      <div className="mb-3" id="changeProduct">
        <CFormSelect aria-label="Default select example" onChange={(e) => setUserId(e.target.value)}>
          <option value="1">Chọn người bán để xem</option>
          {listUser.map((user) => {
            return (
              <option value={user._id} key={user._id}>
                {user.username}
              </option>
            )
          })}
        </CFormSelect>
      </div>
      {statistics != null ? (
        <Chart statistics={statistics} totalAmount={totalAmount} orderCount={orderCount} />
      ) : (
        'Người bán hiện tại chưa có doanh thu'
      )}
    </div>
  )
}
export default StatisticSeller
