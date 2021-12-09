import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const ListUsersDetail = React.lazy(() => import('./views/user/listUsersDetail'))
const ListShop = React.lazy(() => import('./views/shops/ListShop'))
const StatisticCustomer = React.lazy(() => import('./views/statistics/StatisticCustomer'))
const StatisticSeller = React.lazy(() => import('./views/statistics/StatisticSeller'))
const StatisticShop = React.lazy(() => import('./views/statistics/StatisticShop'))

const routes = [
  { path: '/admin', name: 'Tổng quan', exact: true, component: Dashboard },
  { path: '/admin/manage-users', name: 'Quản lý người dùng', component: ListUsersDetail },
  { path: '/admin/list-shops', name: 'Danh sách cửa hàng', component: ListShop },
  { path: '/admin/statistic-customer', name: 'Chi tiêu khách hàng', component: StatisticCustomer },
  { path: '/admin/statistic-seller', name: 'Doanh thu người bán hàng', component: StatisticSeller },
  { path: '/admin/statistic-shop', name: 'Doanh thu cửa hàng', component: StatisticShop }
]

export default routes
