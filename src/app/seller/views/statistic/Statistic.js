import React, { lazy, useState, useEffect } from 'react'
import { CButton, CButtonGroup, CCard, CCardBody, CCardFooter, CCol, CRow } from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import { cilCloudDownload } from '@coreui/icons'
import { getUserInformation } from '../../../../services/api/customerApi'
import { getRevenue, getRevenueShop } from '../../../../services/api/sellerApi'
import { CFormSelect } from '@coreui/react'
import { getShops } from '../../../../services/api/sellerApi'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

import numberSeparator from '../../../../helpers/validating/numberSeparator'
import moment from 'moment'
import CIcon from '@coreui/icons-react'

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))

const Statistic = () => {
  const [statistics, setStatistics] = useState([])
  const [totalAmount, setTotalAmount] = useState([])
  const [orderCount, setOrderCount] = useState([])
  const [listShop, setListShop] = useState([])
  const [shopId, setShopId] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getRevenueShop(shopId, { from: moment().subtract(30, 'day'), to: moment() }).then((respone) => {
      setTotalAmount(respone.data.data.totalAmount)
      setOrderCount(respone.data.data.orderCount)
      setStatistics(respone.data.data.statistics)
      setLoading(false)
    })
  }, [shopId])
  useEffect(() => {
    getShops({}).then((response) => {
      setListShop(response.data.data)
    })
    if (shopId == '' || shopId == 1) {
      getUserInformation().then((respone) => {
        getRevenue(respone.data.data._id, { from: moment().subtract(7, 'day'), to: moment() }).then((respone) => {
          setTotalAmount(respone.data.data.totalAmount)
          setOrderCount(respone.data.data.orderCount)
          setStatistics(respone.data.data.statistics)
          setLoading(false)
        })
      })
    }
  }, [])

  return (
    <>
      <div className="mb-3" id="changeProduct">
        <CFormSelect
          aria-label="Default select example"
          onChange={(e) => {
            setLoading(true)
            setShopId(e.target.value)
          }}
        >
          <option value="1">Ch???n shop ????? xem</option>
          {listShop.map((shop) => {
            return (
              <option value={shop._id} key={shop._id}>
                {shop.name}
              </option>
            )
          })}
        </CFormSelect>
      </div>
      <Spin indicator={antIcon} spinning={loading}>
        <CCard className="mb-4">
          <CCardBody>
            <CRow>
              <CCol sm={5}>
                <h4 id="traffic" className="card-title mb-0">
                  Doanh thu b??n h??ng
                </h4>
                <div className="small text-medium-emphasis">T???ng doanh thu: {numberSeparator(totalAmount)} VN??</div>
              </CCol>
              <CCol sm={7} className="d-none d-md-block">
                <CButton color="primary" className="float-end">
                  <CIcon icon={cilCloudDownload} />
                </CButton>
                <CButtonGroup className="float-end me-3">
                  {['Ng??y', 'Th??ng', 'N??m'].map((value) => (
                    <CButton color="outline-secondary" key={value} className="mx-0" active={value === 'Ng??y'}>
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
                  S??? l?????ng ????n h??ng
                </h4>
                <div className="small text-medium-emphasis">T???ng ????n h??ng: {orderCount}</div>
              </CCol>
              <CCol sm={7} className="d-none d-md-block">
                <CButton color="primary" className="float-end">
                  <CIcon icon={cilCloudDownload} />
                </CButton>
                <CButtonGroup className="float-end me-3">
                  {['Ng??y', 'Th??ng', 'N??m'].map((value) => (
                    <CButton color="outline-secondary" key={value} className="mx-0" active={value === 'Ng??y'}>
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
                    label: 'S??? ????n h??ng',
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
      </Spin>
    </>
  )
}

export default Statistic
