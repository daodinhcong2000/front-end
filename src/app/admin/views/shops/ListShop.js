import React, { useState, useEffect } from 'react'
import { getShops, putApproved, putActiveShop, deleteShop } from '../../../../services/api/adminApi'
import { CSmartTable, CBadge, CButton, CCollapse, CCardBody } from '@coreui/react-pro'
import { CCol, CFormInput, CFormLabel, CRow } from '@coreui/react'
import { useToast } from '../../../../contexts/toast'
import { Modal } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'

const { confirm } = Modal
const ListUsersDetail = () => {
  const { error, warn, info, success } = useToast()
  const [details, setDetails] = useState([])
  const [loading, setLoading] = useState(true)
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
    { label: 'Trạng thái phê duyệt', filter: true, key: 'approvalStatus', _style: { width: '20%' } },
    {
      key: 'show_details',
      label: '',
      _style: { width: '1%' },
      filter: false,
      sorter: false,
      _props: { color: 'primary', className: 'fw-semibold' }
    }
  ]
  const [listShops, setListShops] = useState([])
  useEffect(() => {
    getShops().then((response) => {
      response.data.data.map((data, i) => {
        data.idShop = data._id
      })
      setListShops(response.data.data)
      setLoading(false)
    })
  }, [loading])

  const getBadge = (role) => {
    switch (role) {
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

  const toggleDetails = (index) => {
    event.preventDefault()
    const position = details.indexOf(index)
    let newDetails = details.slice()
    if (position !== -1) {
      newDetails.splice(position, 1)
    } else {
      newDetails = [...details, index]
    }
    setDetails(newDetails)
  }

  const handleApproved = (idShop, status) => {
    const approvalStatus = {
      approvalStatus: status
    }
    putApproved(idShop, approvalStatus)
      .then((respone) => {
        success(respone.data.message)
        setLoading(false)
      })
      .catch((err) => {
        error(err.response.data.message)
        setLoading(false)
      })
  }

  const changeStatus = (shop) => {
    const status = {
      isActive: !shop.isActive
    }
    putActiveShop(shop.idShop, status)
      .then((respone) => {
        success(respone.data.message)
        setLoading(false)
      })
      .catch((err) => {
        error(err.response.data.message)
        setLoading(false)
      })
  }

  const handleDelete = (idShop) => {
    deleteShop(idShop)
      .then((respone) => {
        success(respone.data.message)
        setLoading(false)
      })
      .catch((err) => {
        error(err.response.data.message)
        setLoading(false)
      })
  }

  const showDeleteConfirm = (idShop) => {
    confirm({
      title: 'Bạn chắc chắn muốn xóa cửa hàng này?',
      icon: <ExclamationCircleOutlined />,
      style: { top: 200 },
      okText: 'Đồng ý',
      okType: 'danger',
      cancelText: 'Quay lại',
      onOk() {
        handleDelete(idShop)
        setLoading(true)
      },
      onCancel() {
        setLoading(false)
      }
    })
  }

  const showRejectConfirm = (idShop) => {
    confirm({
      title: 'Bạn chắc chắn muốn từ chối cửa hàng này?',
      icon: <ExclamationCircleOutlined />,
      style: { top: 200 },
      okText: 'Đồng ý',
      okType: 'danger',
      cancelText: 'Quay lại',
      onOk() {
        handleApproved(idShop, 'rejected')
        setLoading(true)
      },
      onCancel() {
        setLoading(false)
      }
    })
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
        loading={loading}
        noItemsLabel="Chưa có cửa hàng nào"
        items={listShops}
        itemsPerPageSelect
        itemsPerPage={5}
        pagination
        scopedColumns={{
          email: (item) => <td>{item.email != '' ? item.email : ''}</td>,
          approvalStatus: (item) => (
            <td>
              <CBadge color={getBadge(item.approvalStatus)}>{item.approvalStatus}</CBadge>
            </td>
          ),
          show_details: (item) => {
            return (
              <td className="py-2">
                <CButton
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
                  <div className="mb-3">
                    <CRow>
                      <CCol xs>
                        <CFormLabel htmlFor="exampleFormControlInput1">Người quản lý</CFormLabel>
                        <CFormInput
                          aria-label="Amount (to the nearest dollar)"
                          name="price"
                          disabled
                          value={item.seller.username}
                        />
                      </CCol>
                      <CCol xs></CCol>
                    </CRow>
                  </div>
                  <div className="mb-3">
                    <CRow>
                      <CCol xs>
                        <CFormLabel htmlFor="exampleFormControlInput1">Trạng thái hoạt động:</CFormLabel>
                        {item.isActive ? (
                          <CButton color="success" variant="outline" disabled>
                            Đã kích hoạt
                          </CButton>
                        ) : (
                          <CButton disabled color="danger" variant="outline">
                            Chưa kích hoạt
                          </CButton>
                        )}
                      </CCol>
                      <CCol xs>
                        <CButton
                          color="info"
                          variant="outline"
                          disabled={loading}
                          onClick={() => {
                            setLoading(true)
                            changeStatus(item)
                          }}
                        >
                          Đổi trạng thái
                        </CButton>
                      </CCol>
                    </CRow>
                  </div>
                  <div className="mb-3">
                    {item.approvalStatus == 'pending' ? (
                      <CRow>
                        <CCol xs>
                          <CButton
                            color="success"
                            disabled={loading}
                            shape="rounded-pill"
                            onClick={() => {
                              setLoading(true)
                              handleApproved(item.idShop, 'approved')
                            }}
                          >
                            Phê duyệt
                          </CButton>
                        </CCol>
                        <CCol xs>
                          <CButton
                            disabled={loading}
                            color="danger"
                            shape="rounded-pill"
                            onClick={() => {
                              showRejectConfirm(item.idShop)
                            }}
                          >
                            Từ chối
                          </CButton>
                        </CCol>
                      </CRow>
                    ) : (
                      ''
                    )}
                  </div>
                  <div className="mb-3">
                    {item.approvalStatus == 'approved' ? (
                      <CCol xs>
                        <CButton
                          disabled={loading}
                          color="danger"
                          shape="rounded-pill"
                          onClick={() => showDeleteConfirm(item.idShop)}
                        >
                          Xóa cửa hàng
                        </CButton>
                      </CCol>
                    ) : (
                      ''
                    )}
                  </div>
                </CCardBody>
              </CCollapse>
            )
          }
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
