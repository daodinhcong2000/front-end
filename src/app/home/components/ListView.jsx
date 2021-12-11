import styles from '../css_modules/css/all.module.css'

import { Spin } from 'antd'
import { useSelector } from 'react-redux'
import ListItem from './ListItem'

const ListView = (props) => {
  const { list, changeView } = props
  const { searching } = useSelector((state) => state.search)

  return (
    <>
      <main className={`${styles['col-md-9']}`}>
        <header className={`${styles['border-bottom']} ${styles['mb-4 pb-3']}`}>
          <div className={`${styles['form-inline']}`}>
            <span className={`${styles['mr-md-auto']}`}>{list.length} sản phẩm</span>
            {/* <select className="mr-2 form-control">
              <option>Latest items</option>
              <option>Trending</option>
              <option>Most Popular</option>
              <option>Cheapest</option>
            </select> */}
            <div className={[`${styles['btn-group']}`]}>
              <button
                className={`${styles['btn']} ${styles['btn-outline-secondary']} ${styles['active']}`}
                data-toggle="tooltip"
                title="List view"
              >
                <i className={`${styles['fa']} ${styles['fa-bars']}`} />
              </button>
              <button
                className={`${styles['btn']} ${styles['btn-outline-secondary']}`}
                data-toggle="tooltip"
                title="Grid view"
                onClick={changeView}
              >
                <i className={`${styles['fa']} ${styles['fa-th']}`} />
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
      </main>
    </>
  )
}

export default ListView
