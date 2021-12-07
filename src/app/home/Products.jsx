import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { message as Message, Image, Spin } from 'antd'
import { getOneProduct } from '../../services/api/userApi'

import PageHeader from './components/header/PageHeader'
import ProductDetail from './components/products/ProductDetail'

const Products = (props) => {
  const { productId } = useParams()
  const [loading, setLoading] = useState(false)
  const [item, setItem] = useState({})
  const [error, setError] = useState('')

  useEffect(() => {
    setLoading(true)
    getOneProduct(productId)
      .then((res) => {
        setLoading(false)
        const { data } = res.data
        setItem(data)
      })
      .catch((e) => {
        setLoading(false)
        const { message } = e.response.data
        setError(message)
      })
  }, [])

  return (
    <>
      <PageHeader />
      <div style={{ background: 'whitesmoke' }}>
        {loading && (
          <div style={{ width: '100%' }}>
            <Spin size="large" />
          </div>
        )}
        {!loading && error && (
          <div>
            {Message.error(error)}
            <div style={{ width: '100%', textAlign: 'center' }}>
              <Image src="/img/empty.png" preview={false} />
            </div>
          </div>
        )}
        {item.images && <ProductDetail detail={item} />}
      </div>
    </>
  )
}

export default Products
