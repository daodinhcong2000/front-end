import React, { lazy } from 'react'

import { CButton, CButtonGroup, CCard, CCardBody, CCardFooter, CCol, CRow } from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import { cilCloudDownload } from '@coreui/icons'
import { Typography } from 'antd'

import CIcon from '@coreui/icons-react'
import numberSeparator from '../../../helpers/validating/numberSeparator'
const WidgetsDropdown = lazy(() => import('../views/widgets/WidgetsDropdown'))
const { Title } = Typography

const Chart = ({ statistics, totalAmount, orderCount, title }) => {
  return (
    <>
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <Title level={3}> {title ? title[0] : 'Doanh thu bán hàng'}</Title>
              <div className="small text-medium-emphasis">
                {title ? title[1] : 'Tổng doanh thu:'} {numberSeparator(totalAmount)} VNĐ
              </div>
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
              labels: statistics ? statistics.map((statistic) => statistic.date) : '',
              datasets: [
                {
                  label: title ? title[2] : 'Doanh thu',
                  backgroundColor: hexToRgba(getStyle('--cui-info'), 10),
                  borderColor: getStyle('--cui-info'),
                  pointHoverBackgroundColor: getStyle('--cui-info'),
                  borderWidth: 2,
                  data: statistics ? statistics.map((statistic) => statistic.totalAmount) : '',
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
              <Title level={3}>Số lượng đơn hàng</Title>
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
              labels: statistics.map((statistic) => statistic.date),
              datasets: [
                {
                  label: 'Số đơn hàng',
                  backgroundColor: hexToRgba(getStyle('--cui-info'), 10),
                  borderColor: getStyle('--cui-info'),
                  pointHoverBackgroundColor: getStyle('--cui-info'),
                  borderWidth: 2,
                  data: statistics.map((statistic) => statistic.orderCount),
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
    </>
  )
}

export default Chart
