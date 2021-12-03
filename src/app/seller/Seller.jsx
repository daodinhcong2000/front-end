import React from 'react'
import { useState, useEffect } from 'react'
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import { getRoles } from '../../services/getRoles'

import { AppFooter, AppSidebar, AppHeader, AppContent } from './components/index'
import { ToastProvider } from '../../contexts/ToastProvider'
const Seller = () => {
  const [roles, setRoles] = useState(['seller'])

  useEffect(() => {
    const _setRoles = async () => {
      const vRoles = await getRoles()
      setRoles(vRoles)
    }

    _setRoles()
  }, [])

  const render = roles.includes('seller') ? (
    <ToastProvider>
      <div>
        <AppSidebar />
        <div className="wrapper d-flex flex-column min-vh-100 bg-light">
          <AppHeader />
          <div className="body flex-grow-1 px-3 ">
            <AppContent />
          </div>
          <AppFooter />
        </div>
      </div>
    </ToastProvider>
  ) : (
    <Redirect to="/" />
  )

  return render
}

export default Seller
