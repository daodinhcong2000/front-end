import { Spin } from 'antd'
import { useSelector } from 'react-redux'
import ListItem from './ListItem'

const ListView = (props) => {
  const { list, changeView } = props
  const { searching } = useSelector((state) => state.search)

  return (
    <>
      <main className="col-md-9">
        <header className="border-bottom mb-4 pb-3">
          <div className="form-inline">
            <span className="mr-md-auto">{list.length} sản phẩm</span>
            {/* <select className="mr-2 form-control">
              <option>Latest items</option>
              <option>Trending</option>
              <option>Most Popular</option>
              <option>Cheapest</option>
            </select> */}
            <div className="btn-group">
              <button className="btn btn-outline-secondary active" data-toggle="tooltip" title="List view">
                <i className="fa fa-bars" />
              </button>
              <button
                className="btn  btn-outline-secondary"
                data-toggle="tooltip"
                title="Grid view"
                onClick={changeView}
              >
                <i className="fa fa-th" />
              </button>
            </div>
          </div>
        </header>

        <Spin spinning={searching}>
          {list.map((item, index) => {
            return (
              <>
                <ListItem key={index} {...item} />
              </>
            )
          })}
        </Spin>

        <nav className="mt-4" aria-label="Page navigation sample">
          <ul className="pagination">
            <li className="page-item disabled">
              <a className="page-link" href="#">
                Previous
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </main>
    </>
  )
}

export default ListView
