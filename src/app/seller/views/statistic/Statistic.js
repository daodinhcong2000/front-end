import React, { lazy, useState, useEffect } from 'react'

import { CButton, CButtonGroup, CCard, CCardBody, CCardFooter, CCol, CRow } from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import { cilCloudDownload } from '@coreui/icons'
import { getUserInformation } from '../../../../services/api/customerApi'
import { getRevenue, getRevenueShop } from '../../../../services/api/sellerApi'
import numberSeparator from '../../../../helpers/validating/numberSeparator'
import { CFormSelect } from '@coreui/react'
import { getShops } from '../../../../services/api/sellerApi'
import moment from 'moment'
const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))

const Statistic = () => {
  const [statistics, setStatistics] = useState([])
  const [totalAmount, setTotalAmount] = useState([])
  const [orderCount, setOrderCount] = useState([])
  const [listShop, setListShop] = useState([])
  const [shopId, setShopId] = useState('')
  useEffect(() => {
    if (shopId == '' || shopId == 1) {
      getUserInformation().then((respone) => {
        getRevenue(respone.data.data._id, { from: moment().subtract(7, 'day'), to: moment() }).then((respone) => {
          setTotalAmount(respone.data.data.totalAmount)
          setOrderCount(respone.data.data.orderCount)
          setStatistics(respone.data.data.statistics)
        })
      })
    }
  }, [shopId])
  useEffect(() => {
    getShops({}).then((response) => {
      setListShop(response.data.data)
    })
  }, [])
  useEffect(() => {
    if (shopId != '' && shopId != 1) {
      getRevenueShop(shopId, { from: moment().subtract(7, 'day'), to: moment() }).then((respone) => {
        setTotalAmount(respone.data.data.totalAmount)
        setOrderCount(respone.data.data.orderCount)
        setStatistics(respone.data.data.statistics)
      })
    }
  }, [shopId])

  return (
    <>
      <div className="mb-3" id="changeProduct">
        <CFormSelect aria-label="Default select example" onChange={(e) => setShopId(e.target.value)}>
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
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                Doanh thu bán hàng
              </h4>
              <div className="small text-medium-emphasis">Tổng doanh thu: {numberSeparator(totalAmount)} VNĐ</div>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              <CButton color="primary" className="float-end">
                <CIcon icon={cilCloudDownload} />
              </CButton>
              <CButtonGroup className="float-end me-3">
                {['Ngày', 'Tháng', 'Năm'].map((value) => (
                  <CButton color="outline-secondary" key={value} className="mx-0" active={value === 'Ngày'}>
                    {value}
                  </CButton>
                ))}
              </CButtonGroup>
            </CCol>
          </CRow>
          <CChartLine
            style={{ height: '300px', marginTop: '40px' }}
            data={{
              labels: statistics ? statistics.map((statistic) => statistic.date) : [],
              datasets: [
                {
                  label: 'Doanh thu',
                  backgroundColor: hexToRgba(getStyle('--cui-info'), 10),
                  borderColor: getStyle('--cui-info'),
                  pointHoverBackgroundColor: getStyle('--cui-info'),
                  borderWidth: 2,
                  data: statistics ? statistics.map((statistic) => statistic.totalAmount) : [],
                  fill: true
                }
              ]
            }}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false
                }
              },
              scales: {
                x: {
                  grid: {
                    drawOnChartArea: false
                  }
                },
                y: {
                  ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    stepSize: Math.ceil(250 / 5),
                    max: 250
                  }
                }
              },
              elements: {
                line: {
                  tension: 0.4
                },
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                  hoverBorderWidth: 3
                }
              }
            }}
          />
        </CCardBody>
        <CCardFooter></CCardFooter>
      </CCard>

      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                Số lượng đơn hàng
              </h4>
              <div className="small text-medium-emphasis">Tổng đơn hàng: {orderCount}</div>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              <CButton color="primary" className="float-end">
                <CIcon icon={cilCloudDownload} />
              </CButton>
              <CButtonGroup className="float-end me-3">
                {['Ngày', 'Tháng', 'Năm'].map((value) => (
                  <CButton color="outline-secondary" key={value} className="mx-0" active={value === 'Ngày'}>
                    {value}
                  </CButton>
                ))}
              </CButtonGroup>
            </CCol>
          </CRow>
          <CChartLine
            style={{ height: '300px', marginTop: '40px' }}
            data={{
              labels: statistics ? statistics.map((statistic) => statistic.date) : [],
              datasets: [
                {
                  label: 'Số đơn hàng',
                  backgroundColor: hexToRgba(getStyle('--cui-info'), 10),
                  borderColor: getStyle('--cui-info'),
                  pointHoverBackgroundColor: getStyle('--cui-info'),
                  borderWidth: 2,
                  data: statistics ? statistics.map((statistic) => statistic.orderCount) : [],
                  fill: true
                }
              ]
            }}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false
                }
              },
              scales: {
                x: {
                  grid: {
                    drawOnChartArea: false
                  }
                },
                y: {
                  ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    stepSize: Math.ceil(250 / 5),
                    max: 250
                  }
                }
              },
              elements: {
                line: {
                  tension: 0.4
                },
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                  hoverBorderWidth: 3
                }
              }
            }}
          />
        </CCardBody>
        <CCardFooter></CCardFooter>
      </CCard>

      <WidgetsDropdown />
    </>
  )
}

export default Statistic
