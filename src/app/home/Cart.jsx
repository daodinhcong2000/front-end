import styles from './css_modules/css/all.module.css'

import { Table } from 'antd'
import { Redirect } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import CartItemProduct from './components/CartTable/CartItemProduct'
import CartItemEditor from './components/CartTable/CartItemEditor'
import CartFooter from './components/CartTable/CartFooter'

import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { isAuthenticated } from '../../services/makeApiRequest'
import { _getMyCart, _selectItems } from '../../redux/actions/cartActions'

const Cart = (props) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(_getMyCart())
  }, [])

  let selectedItems = []
  const [discount, setDiscount] = useState(0)

  const { items, loading } = useSelector((state) => state.cart)
  const tableData = items.map((item) => {
    const {
      productId,
      productName,
      productDelete,
      thumbnail,
      sizes,
      price,
      size,
      quantity,
      cartItemId,
      shopId,
      shopName,
      shopDelete,
      shopActive
    } = item

    const shopDisabled = shopDelete || !shopActive
    const productDisabled = shopDisabled || productDelete

    return {
      key: { cartItemId, shopId, quantity, price },
      cartItemId,
      thumbnail,
      productId,
      productName,
      productDisabled,
      shopId,
      shopName,
      shopDisabled,
      size,
      sizes,
      quantity,
      price
    }
  })

  return (
    <>
      {!isAuthenticated() && <Redirect to="/" />}
      <Header />
      <div>
        <section className={`${styles['section-content']} ${styles['padding-y']}`}>
          <div className="container">
            <div className="row">
              <main className="col-md-12">
                <div className="card">
                  <Table
                    dataSource={tableData}
                    rowSelection={{
                      type: 'checkbox',
                      getCheckboxProps: (record) => {
                        const { productDisabled, shopDisabled, quantity } = record
                        return { disabled: shopDisabled || productDisabled || !quantity }
                      },
                      onChange: (items) => {
                        selectedItems = items
                      }
                    }}
                    expandable={{
                      rowExpandable: (record) => !(record.shopDisabled || record.productDisabled || !record.quantity),
                      expandedRowRender: (record) => <CartItemEditor {...record} />,
                      expandRowByClick: true
                    }}
                    loading={loading}
                    pagination={{ position: ['bottomCenter'] }}
                    footer={() => <CartFooter selectedItems={selectedItems} discount={discount} />}
                  >
                    <Table.Column title="SẢN PHẨM" render={(record) => <CartItemProduct {...record} />} />
                  </Table>
                </div>
              </main>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Cart
