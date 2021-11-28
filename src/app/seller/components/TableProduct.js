import React, { useState }  from 'react'
import { CSmartTable, CBadge, CButton, CCollapse, CCardBody } from '@coreui/react-pro'
import Card from './Card'

const TableProduct = ({columns,usersData}) => {
    const [details, setDetails] = useState([])

    const getBadge = (status) => {
        switch (status) {
          case 'Active':
            return 'success'
          case 'Inactive':
            return 'secondary'
          case 'Pending':
            return 'warning'
          case 'Banned':
            return 'danger'
          default:
            return 'primary'
        }
      }
      const toggleDetails = (index) => {
        const position = details.indexOf(index)
        let newDetails = details.slice()
        if (position !== -1) {
          newDetails.splice(position, 1)
        } else {
          newDetails = [...details, index]
        }
        setDetails(newDetails)
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
          items={usersData}
          itemsPerPageSelect
          itemsPerPage={5}
          pagination
          scopedColumns={{
            status: (item) => (
              <td>
                <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
              </td>
            ),
            show_details: (item) => {
              return (
                <td className="py-2">
                  <CButton
                    color="primary"
                    variant="outline"
                    shape="square"
                    size="sm"
                    onClick={() => {
                      toggleDetails(item._id)
                    }}
                  >
                    {details.includes(item._id) ? 'Hide' : 'Show'}
                  </CButton>
                </td>
              )
            },
            details: (item) => {
              return (
                <CCollapse visible={details.includes(item._id)}>
                  <CCardBody>
                    <Card url = "https://res.cloudinary.com/accomerce/image/upload/v1638079096/spnftcg7vvjc0zvwxit6.png"/>
                    <CButton size="sm" color="info">
                      Sửa
                    </CButton>
                    <CButton size="sm" color="danger" className="ml-1">
                      Hủy
                    </CButton>
                  </CCardBody>
                </CCollapse>
              )
            },
          }}
          selectable
          sorterValue={{ column: 'name', state: 'asc' }}
          tableFilter
          tableHeadProps={{
            color: 'none',
          }}
          tableProps={{
            striped: true,
            hover: true,
          }}
        /></div>
      )
}

export default TableProduct;