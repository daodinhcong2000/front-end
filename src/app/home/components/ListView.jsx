import styles from '../css_modules/css/all.module.css'

import { Spin, Pagination, Button } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import ListItem from './ListItem'
import { _search } from '../../../redux/actions/searchActions'

const ListView = (props) => {
  const dispatch = useDispatch()
  const { list, changeView } = props
  const { searching, keyword, total, page, limit, sort } = useSelector((state) => state.search)

  const handleSortChange = (sorter) => {
    if (!sort.includes(sorter)) {
      dispatch(_search(keyword, 1, limit, sorter))
    } else {
      if (sort.includes('-')) {
        dispatch(_search(keyword, 1, limit, sorter))
      } else {
        dispatch(_search(keyword, 1, limit, `-${sorter}`))
      }
    }
  }

  return (
    <>
      <main className={`${styles['col-md-12']}`}>
        <header className={`${styles['mb-4 pb-3']}`}>
          <div className={`${styles['form-inline']}`}>
            <span className={`${styles['mr-md-auto']}`}>
              {total} sản phẩm liên quan đến #<b>{decodeURIComponent(keyword)}</b>
            </span>

            <Button
              size="large"
              shape="round"
              style={{ marginRight: '1rem' }}
              onClick={(e) => handleSortChange('createAt')}
            >
              Mới
              {sort.includes('createAt') ? (
                sort.includes('-') ? (
                  <>
                    {' '}
                    <i className={`${styles['fa']} ${styles['fa-sort-down']}`} />
                  </>
                ) : (
                  <>
                    {' '}
                    <i className={`${styles['fa']} ${styles['fa-sort-up']}`} />
                  </>
                )
              ) : (
                <></>
              )}
            </Button>

            <Button
              size="large"
              shape="round"
              style={{ marginRight: '1rem' }}
              onClick={(e) => handleSortChange('price')}
            >
              Giá
              {sort.includes('price') ? (
                sort.includes('-') ? (
                  <>
                    {' '}
                    <i className={`${styles['fa']} ${styles['fa-sort-down']}`} />
                  </>
                ) : (
                  <>
                    {' '}
                    <i className={`${styles['fa']} ${styles['fa-sort-up']}`} />
                  </>
                )
              ) : (
                <></>
              )}
            </Button>

            <Button
              size="large"
              shape="round"
              style={{ marginRight: '1rem' }}
              onClick={(e) => handleSortChange('rating')}
            >
              Đánh giá
              {sort.includes('rating') ? (
                sort.includes('-') ? (
                  <>
                    {' '}
                    <i className={`${styles['fa']} ${styles['fa-sort-down']}`} />
                  </>
                ) : (
                  <>
                    {' '}
                    <i className={`${styles['fa']} ${styles['fa-sort-up']}`} />
                  </>
                )
              ) : (
                <></>
              )}
            </Button>

            <Button
              size="large"
              shape="round"
              style={{ marginRight: '1rem' }}
              onClick={(e) => handleSortChange('sold')}
            >
              Lượt mua
              {sort.includes('sold') ? (
                sort.includes('-') ? (
                  <>
                    {' '}
                    <i className={`${styles['fa']} ${styles['fa-sort-down']}`} />
                  </>
                ) : (
                  <>
                    {' '}
                    <i className={`${styles['fa']} ${styles['fa-sort-up']}`} />
                  </>
                )
              ) : (
                <></>
              )}
            </Button>

            <Button
              size="large"
              shape="round"
              style={{ marginRight: '1rem' }}
              onClick={(e) => handleSortChange('views')}
            >
              Lượt xem
              {sort.includes('views') ? (
                sort.includes('-') ? (
                  <>
                    {' '}
                    <i className={`${styles['fa']} ${styles['fa-sort-down']}`} />
                  </>
                ) : (
                  <>
                    {' '}
                    <i className={`${styles['fa']} ${styles['fa-sort-up']}`} />
                  </>
                )
              ) : (
                <></>
              )}
            </Button>

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
        <hr />

        <Spin spinning={searching}>
          {list.map((item, index) => {
            return (
              <>
                <ListItem key={index} {...item} />
              </>
            )
          })}
        </Spin>

        <Pagination
          total={total}
          showTotal={(total, range) => `${range[0]}-${range[1]} / ${total} sản phẩm`}
          defaultPageSize={limit}
          current={page}
          showSizeChanger
          pageSizeOptions={[20, 40, 100]}
          onChange={(page, pageSize) => {
            dispatch(_search(keyword, page, pageSize, sort))
          }}
          style={{ textAlign: 'center' }}
        />
      </main>
    </>
  )
}

export default ListView
