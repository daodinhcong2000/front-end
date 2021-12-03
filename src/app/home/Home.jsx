import './styles/index.css'

import { Layout } from 'antd'
import PageHeader from './components/header/PageHeader'
import PageContent from './components/homePage/PageContent'

const Home = (props) => {
  return (
    <Layout>
      <PageHeader />
      <PageContent />
    </Layout>
  )
}

export default Home
