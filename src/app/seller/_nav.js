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
    to: '/seller',
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
    to: '/shops',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />
  },
  {
    component: CNavItem,
    name: 'Thêm cửa hàng',
    to: '/register-shop',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />
  },
  {
    component: CNavItem,
    name: 'Thống kê',
    to: '/seller-a',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />
  },
  {
    component: CNavTitle,
    name: 'Quản lý sản phẩm'
  },
  {
    component: CNavGroup,
    name: 'Sản phẩm',
    to: '/seller/add-product',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Thêm sản phẩm',
        to: '/add-product'
      },
      {
        component: CNavItem,
        name: 'Sửa sản phẩm',
        to: '/change-product'
      },
      {
        component: CNavItem,
        name: 'Xóa sản phẩm',
        to: '/delete-product'
      }
    ]
  },
  {
    component: CNavGroup,
    name: 'Sản phẩm còn trong kho',
    to: '/seller-a',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Buttons',
        to: '/seller-a'
      },
      {
        component: CNavItem,
        name: 'Buttons groups',
        to: '/seller-a'
      },
      {
        component: CNavItem,
        name: 'Dropdowns',
        to: '/seller-a'
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
        to: '/seller-a'
      }
    ]
  },
  {
    component: CNavItem,
    name: 'Thống kê',
    to: '/seller',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />
  },
  {
    component: CNavGroup,
    name: 'Icons',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'CoreUI Free',
        to: '/seller-a',
        badge: {
          color: 'success',
          text: 'NEW'
        }
      },
      {
        component: CNavItem,
        name: 'CoreUI Flags',
        to: '/icons/flags'
      },
      {
        component: CNavItem,
        name: 'CoreUI Brands',
        to: '/icons/brands'
      }
    ]
  },
  {
    component: CNavGroup,
    name: 'Thông báo',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Alerts',
        to: '/notifications/alerts'
      },
      {
        component: CNavItem,
        name: 'Badges',
        to: '/notifications/badges'
      },
      {
        component: CNavItem,
        name: 'Modal',
        to: '/notifications/modals'
      },
      {
        component: CNavItem,
        name: 'Toasts',
        to: '/notifications/toasts'
      }
    ]
  },
  {
    component: CNavItem,
    name: 'Widgets',
    to: '/widgets',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    component: CNavTitle,
    name: 'Extras'
  },
  {
    component: CNavGroup,
    name: 'Đánh giá',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/login'
      },
      {
        component: CNavItem,
        name: 'Register',
        to: '/register'
      },
      {
        component: CNavItem,
        name: 'Error 404',
        to: '/404'
      },
      {
        component: CNavItem,
        name: 'Error 500',
        to: '/500'
      }
    ]
  }
]

export default _nav
