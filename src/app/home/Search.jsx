import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Sider from './components/Sider'
import ListView from './components/ListView'
import GridView from './components/GridView'

import { _search } from '../../redux/actions/searchActions'

const Search = (props) => {
  const [view, setView] = useState('list')
  const { keyword: searchKeyword = '' } = useParams()

  const dispatch = useDispatch()
  const { items = [], page, limit, sort, searching } = useSelector((state) => state.search)

  useEffect(() => {
    // dispatch(_search(searchKeyword.trim(), page, limit, sort))
  }, [])

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
              <ListView list={items} changeView={(e) => setView('grid')} />
            ) : (
              <GridView list={items} changeView={(e) => setView('list')} />
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Search
