import styles from './css_modules/css/all.module.css'

import { Spin, message as Message, Pagination } from 'antd'
import Header from './components/Header'
import Footer from './components/Footer'
import ShopItem from './components/ShopItem'

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { getShopInfo, getShopProducts } from '../../services/api/userApi'
import timeToNow from '../../helpers/validating/timeToNow'

const Shop = (props) => {
  const { shopId } = useParams()
  const [loading, setLoading] = useState(false)
  const [shop, setShop] = useState({})
  const [pagination, setPagination] = useState({ page: 1, pageSize: 20 })
  const [products, setProducts] = useState([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setLoading(true)

    getShopInfo(shopId)
      .then((res) => {
        const { data: shopInfo } = res.data
        setShop(shopInfo)
        setLoading(false)
      })
      .catch((e) => {
        const { status, data } = e.response
        if (status >= 500) {
          Message.error('Lỗi hệ thống, vui lòng thử lại sau!')
        } else {
          const { message } = data
          Message.error(message)
        }
        setLoading(false)
      })
  }, [shopId])

  useEffect(() => {
    if (shop.name) {
      setLoading(true)

      getShopProducts(shopId, '', pagination.page, pagination.pageSize)
        .then((res) => {
          const { data } = res.data
          const { products, total } = data
          setTotal(total)
          setProducts(products)
          setLoading(false)
        })
        .catch((e) => {
          const { status, data } = e.response
          if (status >= 500) {
            Message.error('Lỗi hệ thống, vui lòng thử lại sau!')
          } else {
            const { message } = data
            Message.error(message)
          }
          setLoading(false)
        })
    }
  }, [shop.name, pagination.page, pagination.pageSize])

  return (
    <>
      <Header />

      <div className={`${styles['main_container']} ${styles['shop-only']}`}>
        <section className={`${styles['our-publication']} ${styles['pt-100 pb-70']}`}>
          <div className={`${styles['container']}`}>
            <Spin spinning={loading}>
              {Object.keys(shop).length && (
                <section class="section-pagetop bg">
                  <div class="container" style={{ textAlign: 'center' }}>
                    <h2 class="title-page" style={{ fontWeight: 'bolder' }}>
                      {shop.name}
                    </h2>

                    <div className="row">
                      <div className="col">Địa chỉ: {shop.address}</div>
                      <div className="col">Tham gia: {timeToNow(shop.createdAt)}</div>
                    </div>

                    <div className="row">
                      <div className="col">Hotline: {shop.seller.phoneNumber}</div>
                      <div className="col">Email: {shop.email}</div>
                    </div>
                  </div>
                </section>
              )}

              <div className={`${styles['row']}`}>
                {products.map((product) => {
                  const { _id: productId, name, images, price, sizes, sold, views } = product
                  const props = {
                    productId,
                    name,
                    thumbnail: images[0],
                    price,
                    sizes,
                    sold,
                    views
                  }
                  return <ShopItem {...props} />
                })}
              </div>

              <Pagination
                total={total}
                showTotal={(total, range) => `${range[0]} - ${range[1]} / ${total} sản phẩm`}
                defaultPageSize={20}
                current={pagination.page}
                showSizeChanger
                pageSizeOptions={[20, 40, 100]}
                onChange={(page, pageSize) => {
                  if (!page) {
                    setPagination({
                      page: pagination.page,
                      pageSize
                    })
                  } else {
                    setPagination({
                      page,
                      pageSize
                    })
                  }
                }}
                style={{ margin: '1em', textAlign: 'center' }}
              />
            </Spin>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}

export default Shop
