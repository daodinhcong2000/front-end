import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilChartPie, cilContact, cilSpeedometer, cibShopify } from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Tổng quan',
    to: '/admin',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    component: CNavTitle,
    name: 'Quản lý cửa hàng'
  },
  {
    component: CNavItem,
    name: 'Danh sách cửa hàng',
    to: '/admin/list-shops',
    icon: <CIcon icon={cibShopify} customClassName="nav-icon" />
  },
  {
    component: CNavTitle,
    name: 'Người dùng'
  },
  {
    component: CNavItem,
    name: 'Quản lý người dùng',
    to: '/admin/manage-users',
    icon: <CIcon icon={cilContact} customClassName="nav-icon" />
  },
  {
    component: CNavTitle,
    name: 'Quản lý sản phẩm'
  },

  {
    component: CNavItem,
    name: 'Thống kê',
    to: '/admin',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />
  }
]

export default _nav
