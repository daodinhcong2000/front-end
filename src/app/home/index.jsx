import './styles/index.css'

import { Layout } from 'antd'
import PageHeader from './components/PageHeader'
import CarouselHeader from './components/CarouselHeader'
import PageContent from './components/PageContent'

const Home = props => {

    return (
        <Layout>
            <PageHeader />
            <CarouselHeader />
            <PageContent />
        </Layout>
    )
}

export default Home