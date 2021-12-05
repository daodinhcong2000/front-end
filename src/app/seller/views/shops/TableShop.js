import React, { useState, useEffect, Suspense } from 'react'
import { getShops } from '../../../../services/api/sellerApi'
import { CSmartTable, CBadge } from '@coreui/react-pro'

const TableShop = () => {
  const columns = [
    {
      label: 'Tên cửa hàng',
      key: 'name',
      _style: { width: '40%' },
      _props: { className: 'fw-semibold' }
    },
    {
      label: 'Email',
      key: 'email'
    },
    {
      label: 'Địa chỉ',
      key: 'address',
      filter: true,
      sorter: false,
      _style: { width: '20%' }
    },
    { label: 'Trạng thái', key: 'approvalStatus', _style: { width: '20%' } }
  ]
  const [listShop, setListShop] = useState([])
  useEffect(() => {
    getShops().then((response) => {
      setListShop(response.data.data)
    })
  }, [])

  const getBadge = (approvalStatus) => {
    switch (approvalStatus) {
      case 'approved':
        return 'success'
      case 'pending':
        return 'warning'
      case 'rejected':
        return 'danger'
      default:
        return 'primary'
    }
  }

  return (
    <div>
      <Suspense fallback={<h1>Loading posts...</h1>}>
        <CSmartTable
          activePage={3}
          cleaner
          clickableRows
          columns={columns}
          columnFilter
          columnSorter
          items={listShop}
          itemsPerPageSelect
          itemsPerPage={5}
          pagination
          scopedColumns={{
            approvalStatus: (item) => (
              <td>
                <CBadge color={getBadge(item.approvalStatus)}>{item.approvalStatus}</CBadge>
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
      </Suspense>
    </div>
  )
}

export default TableShop
