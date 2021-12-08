import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Sider from './components/Sider'
import ListView from './components/ListView'
import GridView from './components/GridView'

const Search = (props) => {
  const [view, setView] = useState('list')

  return (
    <div className="App">
      <Header />

      {/* <section className="section-pagetop bg">
        <div className="container">
          <h2 className="title-page">Category products</h2>
          <nav>
            <ol className="breadcrumb text-white">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item"><a href="#">Best category</a></li>
              <li className="breadcrumb-item active" aria-current="page">Great articles</li>
            </ol>
          </nav>
        </div>
      </section> */}

      <section className="section-content padding-y">
        <div className="container">
          <div className="row">
            <Sider />
            {view === 'list' ? (
              <ListView changeView={(e) => setView('grid')} />
            ) : (
              <GridView changeView={(e) => setView('list')} />
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Search
