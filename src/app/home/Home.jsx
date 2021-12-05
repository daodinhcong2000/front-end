import './styles/index.css'

import { useSelector } from 'react-redux'
import { Layout } from 'antd'

import PageHeader from './components/header/PageHeader'
import PageContent from './components/home/HomeContent'
import SearchedContent from './components/home/SearchedContent'

const Home = (props) => {
  const { keyword } = useSelector((state) => state.search)
  return (
    <Layout>
      <PageHeader />
      {!keyword ? <PageContent /> : <SearchedContent />}
    </Layout>
  )
}

export default Home
