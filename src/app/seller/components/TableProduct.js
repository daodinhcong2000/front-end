import React, { useState, useEffect, Suspense } from 'react'
import { CSmartTable, CBadge, CButton, CCollapse, CCardBody } from '@coreui/react-pro'
import ReactStars from 'react-rating-stars-component'
import FormDetail from './FormDetail'
import FormDetailDelete from './FormDetailDelete'
import { deleteProduct } from '../../../services/api/sellerApi'
import { useToast } from '../../../contexts/toast'

const TableProduct = ({ columns, usersData, type }) => {
  const { error, warn, info, success } = useToast()
  const [details, setDetails] = useState([])
  const [idDelete, setIdDelete] = useState([])
  const idProduct = []
  const idDeleteProduct = {
    productIds: []
  }
  usersData.map((data, i) => {
    idProduct[i] = data._id
    data.idProduct = data._id
  })

  const handleDelete = () => {
    idDelete.map((id, i) => (idDeleteProduct.productIds[i] = idProduct[id]))
    if (idDeleteProduct.productIds.length == 0) {
      warn('Vui lòng chọn sản phẩm cần xóa')
    } else {
      deleteProduct(usersData[0].shop._id, idDeleteProduct)
        .then((respone) => {
          setIdDelete([])
          success(respone.data.message)
          setTimeout(window.location.reload(), 3000)
        })
        .catch((err) => {
          {
            err.response.status == 500
              ? error('Có lỗi xảy ra. Vui lòng thử lại sau!')
              : error(err.response.data.message)
          }
        })
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
  const handleCheck = (id) => {
    setIdDelete((prev) => {
      const isChecked = idDelete.includes(id)
      if (isChecked) {
        return idDelete.filter((item) => item != id)
      } else {
        return [...prev, id]
      }
    })
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
          items={usersData}
          itemsPerPageSelect
          itemsPerPage={5}
          pagination
          scopedColumns={{
            rating: (item) => (
              <td>
                <ReactStars size="30" value={item.rating} edit={false} disable />
              </td>
            ),
            show_details: (item) => {
              return (
                <td className="py-2">
                  <div>
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
                    {type === 'fix' ? (
                      ''
                    ) : (
                      <input
                        className="form-check-input"
                        type="checkbox"
                        idDelete={idDelete.includes(item._id)}
                        onChange={() => handleCheck(item._id)}
                        id="checkProduct"
                      ></input>
                    )}
                  </div>
                </td>
              )
            },
            details: (item) => {
              return (
                <CCollapse visible={details.includes(item._id)}>
                  <CCardBody>
                    {type === 'fix' ? <FormDetail data={item} /> : <FormDetailDelete data={item} />}
                  </CCardBody>
                </CCollapse>
              )
            }
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
        {type === 'fix' ? (
          ''
        ) : (
          <CButton onClick={handleDelete} color="danger">
            {' '}
            Xóa{' '}
          </CButton>
        )}
      </Suspense>
    </div>
  )
}

export default TableProduct
