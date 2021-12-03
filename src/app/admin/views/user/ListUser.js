import React, { useState, useEffect } from 'react'
import { getUsers } from '../../../../services/api/adminApi'
import { CSmartTable, CBadge } from '@coreui/react-pro'

const ListUser = () => {
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
    { label: 'Trạng thái', key: 'isActive', _style: { width: '20%' } }
  ]
  const [listUsers, setListUsers] = useState([])
  useEffect(() => {
    getUsers().then((response) => {
      setListUsers(response.data.data.users)
      console.log(response.data.data)
    })
  }, [])

  const getBadge = (approvalStatus) => {
    switch (approvalStatus) {
      case 'approved':
        return 'success'
      case 'pending':
        return 'warning'
      case 'Banned':
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
        copedColumns={{
          approvalStatus: (item) => (
            <td>
              {/* <CBadge color={getBadge(item.approvalstatus)}>{item.approvalstatus}</CBadge> */}
              <p>test</p>
            </td>
          )
        }}
        sorterValue={{ column: 'name', state: 'asc' }}
        tableFilter
        tableHeadProps={{
          color: 'none'
        }}
        tableProps={{
          striped: true,
          hover: true
        }}
      />
    </div>
  )
}

export default ListUser
