import React, { useState, useEffect } from 'react'
import { getUsers, deleteUser, putActiveUser } from '../../../../services/api/adminApi'
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
      label: 'Tên tài khoản',
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
    { label: 'Vai trò', filter: false, key: 'roles', _style: { width: '20%' } },
    {
      key: 'show_details',
      label: '',
      _style: { width: '1%' },
      filter: false,
      sorter: false,
      _props: { color: 'primary', className: 'fw-semibold' }
    }
  ]
  const [listUsers, setListUsers] = useState([])
  useEffect(() => {
    getUsers({}).then((response) => {
      response.data.data.users.map((data, i) => {
        data.idUser = data._id
      })
      setListUsers(response.data.data.users)
      setLoading(false)
    })
  }, [loading])

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

  const handleDelete = (idUser) => {
    deleteUser(idUser)
      .then((respone) => {
        success(respone.data.message)
        setLoading(false)
      })
      .catch((err) => {
        error(err.response.data.message)
        setLoading(false)
      })
  }
  const changeStatus = (user) => {
    const status = {
      isActive: !user.isActive
    }
    putActiveUser(user.idUser, status)
      .then((respone) => {
        success(respone.data.message)
        setLoading(false)
      })
      .catch((err) => {
        error(err.response.data.message)
        setLoading(false)
      })
  }

  const showDeleteConfirm = (idUser) => {
    confirm({
      title: 'Bạn chắc chắn muốn xóa người dùng này?',
      icon: <ExclamationCircleOutlined />,
      style: { top: 200 },
      okText: 'Đồng ý',
      okType: 'danger',
      cancelText: 'Quay lại',
      onOk() {
        handleDelete(idUser)
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
        noItemsLabel="Không có người dùng nào"
        columnSorter
        loading={loading}
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
                        <CFormLabel htmlFor="exampleFormControlInput1">Họ</CFormLabel>
                        <CFormInput
                          aria-label="Amount (to the nearest dollar)"
                          name="price"
                          disabled
                          value={item.firstName}
                        />
                      </CCol>
                      <CCol xs>
                        <CFormLabel htmlFor="exampleFormControlInput1">Tên</CFormLabel>
                        <CFormInput
                          aria-label="Amount (to the nearest dollar)"
                          name="originalPrice"
                          disabled
                          value={item.lastName}
                        />
                      </CCol>
                    </CRow>
                  </div>
                  <div className="mb-3">
                    <CRow>
                      <CCol xs>
                        <CFormLabel htmlFor="exampleFormControlInput1">Trạng thái:</CFormLabel>
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
                        {item.roles[item.roles.length - 1] != 'admin' ? (
                          <CButton
                            color="info"
                            variant="outline"
                            onClick={() => {
                              setLoading(true)
                              changeStatus(item)
                            }}
                          >
                            Đổi trạng thái
                          </CButton>
                        ) : (
                          ''
                        )}
                      </CCol>
                    </CRow>
                  </div>
                  <div className="mb-3">
                    {item.roles[item.roles.length - 1] != 'admin' ? (
                      <CButton
                        color="danger"
                        shape="rounded-pill"
                        onClick={() => {
                          showDeleteConfirm(item.idUser)
                        }}
                      >
                        Xóa
                      </CButton>
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
