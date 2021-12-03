import React from 'react'

const Home = React.lazy(() => import('./index.jsx'))

const routes = [{ path: '/', exact: true, name: 'acCommerce', component: Home }]

export default routes
