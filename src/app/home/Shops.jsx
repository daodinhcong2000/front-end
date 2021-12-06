import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PageHeader from './components/header/PageHeader'

const Shops = (props) => {
  const { shopId } = useParams()
  const [id, setId] = useState(shopId)
  const [shopInfo, setShopInfo] = useState({})

  useEffect(() => {}, [id])
  return (
    <>
      <PageHeader />
    </>
  )
}

export default Shops
