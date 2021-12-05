import React, { useState, useEffect } from 'react'
import { getUsers } from '../../../../services/api/adminApi'
import { CSmartTable, CBadge } from '@coreui/react-pro'

const ListUsersDetail = () => {
  const columns = [
    {
      label: 'Tên sản Phẩm',
      key: 'username',
      _style: { width: '40%' },
      _props: { className: 'fw-semibold' }
    },
    {
      label: 'Email',
      key: 'email'
    },
    {
      label: 'Số điện thoại',
      key: 'phoneNumber',
      filter: true,
      sorter: false,
      _style: { width: '20%' }
    },
    { label: 'Vai trò', key: 'roles', _style: { width: '20%' } }
  ]
  const [listUsers, setListUsers] = useState([])
  useEffect(() => {
    getUsers().then((response) => {
      setListUsers(response.data.data.users)
    })
  }, [])

  console.log('user', listUsers)
  const getBadge = (role) => {
    switch (role) {
      case 'customer':
        return 'success'
      case 'seller':
        return 'warning'
      case 'admin':
        return 'danger'
      default:
        return 'primary'
    }
  }

  return (
    <div>
      <CSmartTable
        activePage={3}
        cleaner
        clickableRows
        columns={columns}
        columnFilter
        columnSorter
        items={listUsers}
        itemsPerPageSelect
        itemsPerPage={5}
        pagination
        scopedColumns={{
          email: (item) => <td>{item.email != '' ? item.email : ''}</td>,
          roles: (item) => (
            <td>
              <CBadge color={getBadge(item.roles[item.roles.length - 1])}>{item.roles[item.roles.length - 1]}</CBadge>
            </td>
          )
        }}
        sorterValue={{ column: 'name', state: 'asc' }}
        tableFilter
        tableProps={{
          striped: true,
          hover: true
        }}
      />
    </div>
  )
}

export default ListUsersDetail
