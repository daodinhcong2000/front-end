import '../../scss/style.scss'
import React from 'react'
import { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { getRoles } from '../../services/getRoles'

import { AppFooter, AppSidebar, AppHeader, AppContent } from './components/index'
import { ToastProvider } from '../../contexts/ToastProvider'
const Admin = () => {
  const [roles, setRoles] = useState(['admin'])

  useEffect(() => {
    const _setRoles = async () => {
      const vRoles = await getRoles()
      setRoles(vRoles)
    }

    _setRoles()
  }, [])

  const render = roles.includes('admin') ? (
    <ToastProvider>
      <div id="ADMIN_SELLER">
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

export default Admin
