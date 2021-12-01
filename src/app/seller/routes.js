import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

const AddProduct = React.lazy(() => import('./views/products/AddProduct'))
const ChangeProduct = React.lazy(() => import('./views/products/ChangeProduct'))
const DeleteProduct = React.lazy(() => import('./views/products/DeleteProduct'))

const TableShop = React.lazy(() => import('./views/shops/TableShop'))
const AddShop = React.lazy(() => import('./views/shops/AddShop'))

const routes = [
  { path: '/seller', name: 'Tổng quan', component: Dashboard  },
  { path: '/add-product', name: 'Thêm sản phẩm', component: AddProduct },
  { path: '/change-product', name: 'Sửa sản phẩm', component: ChangeProduct },
  { path: '/delete-product', name: 'Xóa sản phẩm', component: DeleteProduct },
  { path: '/shops', name: 'Các cửa hàng', component: TableShop },
  { path: '/register-shop', name: 'Thêm của hàng', component: AddShop },
]

export default routes
