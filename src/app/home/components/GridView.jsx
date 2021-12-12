import styles from '../css_modules/css/all.module.css'

import { Spin } from 'antd'
import { useSelector } from 'react-redux'
import GridItem from './GridItem'

const GridView = (props) => {
  const { list, changeView } = props
  const { searching } = useSelector((state) => state.search)

  return (
    <>
      <main className={`${styles['col-md-9']}`}>
        <header className={`${styles['border-bottom']} ${styles['mb-4']} ${['pb-3']}`}>
          <div className={`${['form-inline']}`}>
            <span className={`${styles['mr-md-auto']}`}>{list.length} sản phẩm </span>
            {/* <select className="mr-2 form-control">
              <option>Latest items</option>
              <option>Trending</option>
              <option>Most Popular</option>
              <option>Cheapest</option>
            </select> */}
            <div className={`${styles['btn-group']}`}>
              <button
                href="#"
                className={`${styles['btn']} ${styles['btn-outline-secondary']}`}
                data-toggle="tooltip"
                title="List view"
                onClick={changeView}
              >
                <i className={`${styles['fa']} ${styles['fa-bars']}`} />
              </button>
              <button
                href="#"
                className={`${styles['btn']} ${styles['btn-outline-secondary']} ${styles['active']}`}
                data-toggle="tooltip"
                title="Grid view"
              >
                <i className="fa fa-th" />
              </button>
            </div>
          </div>
        </header>

        <Spin spinning={searching}>
          <div className={`${styles['row']}`}>
            {list.map((item, index) => {
              return (
                <>
                  <GridItem key={index} {...item} />
                </>
              )
            })}
          </div>
        </Spin>
      </main>
    </>
  )
}

export default GridView
