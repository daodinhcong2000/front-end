import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const ListUser = React.lazy(() => import('./views/user/ListUser'))

const routes = [
  { path: '/admin', name: 'Tổng quan', exact: true, component: Dashboard },
  { path: '/admin/list-users', name: 'danh sách người dùng', component: ListUser }
]

export default routes
