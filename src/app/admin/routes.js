import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const ListUsersDetail = React.lazy(() => import('./views/user/listUsersDetail'))
const ListShop = React.lazy(() => import('./views/shops/ListShop'))

const routes = [
  { path: '/admin', name: 'Tổng quan', exact: true, component: Dashboard },
  { path: '/admin/manage-users', name: 'Quản lý người dùng', component: ListUsersDetail },
  { path: '/admin/list-shops', name: 'Danh sách cửa hàng', component: ListShop }
]

export default routes
