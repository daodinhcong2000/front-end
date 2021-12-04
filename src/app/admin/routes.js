import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const ListUser = React.lazy(() => import('./views/user/ListUser'))
const ListUsersDetail = React.lazy(() => import('./views/user/listUsersDetail'))

const routes = [
  { path: '/admin', name: 'Tổng quan', exact: true, component: Dashboard },
  { path: '/admin/list-users', name: 'Danh sách người dùng', component: ListUser },
  { path: '/admin/manage-users', name: 'Quản lý người dùng', component: ListUsersDetail }
]

export default routes
