import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar
} from '@coreui/icons'
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
    to: '/admin',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />
  },
  {
    component: CNavItem,
    name: 'Thêm cửa hàng',
    to: '/admin',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />
  },
  {
    component: CNavItem,
    name: 'Thống kê',
    to: '/admin',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />
  },
  {
    component: CNavTitle,
    name: 'Quản lý sản phẩm'
  },
  {
    component: CNavGroup,
    name: 'Sản phẩm',
    to: '/admin/add-product',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Thêm sản phẩm',
        to: '/admin'
      },
      {
        component: CNavItem,
        name: 'Sửa sản phẩm',
        to: '/admin'
      },
      {
        component: CNavItem,
        name: 'Xóa sản phẩm',
        to: '/admin'
      }
    ]
  },
  {
    component: CNavGroup,
    name: 'Sản phẩm còn trong kho',
    to: '/admin-a',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Buttons',
        to: '/admin-a'
      },
      {
        component: CNavItem,
        name: 'Buttons groups',
        to: '/admin-a'
      },
      {
        component: CNavItem,
        name: 'Dropdowns',
        to: '/admin-a'
      }
    ]
  },
  {
    component: CNavGroup,
    name: 'Sản phẩm đã bán',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Form Control',
        to: '/admin-a'
      }
    ]
  },
  {
    component: CNavItem,
    name: 'Thống kê',
    to: '/admin',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />
  }
]

export default _nav
