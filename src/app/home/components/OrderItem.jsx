import { CSmartTable } from '@coreui/react-pro'
import { CImage, CRow, CCol } from '@coreui/react-pro'
import numberSeparator from '../../../helpers/validating/numberSeparator'

const OrderItem = (props) => {
  const { shopName, itemData } = props
  const columns = [
    {
      label: 'Cửa hàng: ' + shopName,
      key: 'image',
      _style: { width: '60%' },
      _props: { className: 'NameShopInOrder' }
    },
    {
      key: 'price',
      label: '',
      _style: { width: '20%' },
      _props: { className: 'fw-semibold' }
    }
  ]

  return (
    <>
      <CSmartTable
        activePage={3}
        columns={columns}
        items={itemData}
        scopedColumns={{
          price: (item) => <td>₫ {numberSeparator(item.price)}</td>,
          image: (item) => (
            <td>
              <CRow>
                <CCol sm={2}>
                  <CImage rounded thumbnail src={item.product.images[0]} width={100} height={100} />
                </CCol>
                <CCol sm={10}>
                  <h4 id="traffic" className="card-title mb-0">
                    {item.product.name}
                  </h4>
                  <div className="small text-medium-emphasis">Phân loại hàng: {item.size}</div>
                  <div className=" text-medium">x{item.quantity}</div>
                </CCol>
              </CRow>
            </td>
          )
        }}
        tableFilter
        tableProps={{
          striped: true,
          hover: true
        }}
      />
    </>
  )
}

export default OrderItem
