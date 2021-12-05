import { searchProducts } from '../../services/api/userApi'

export const _pagination = (page, limit, sort) => {
  return (dispatch) => {
    dispatch({
      type: 'PAGINATION',
      payload: { page, limit, sort }
    })
  }
}

export const _search = (keyword, page = null, limit = null, sort = 'price') => {
  return (dispatch) => {
    dispatch({
      type: 'SEARCHING'
    })

    return searchProducts({ search: keyword, page, limit, sort })
      .then((res) => {
        dispatch({
          type: 'SET_KEYWORD',
          payload: { keyword }
        })

        dispatch({
          type: 'PAGINATION',
          payload: { page, limit, sort }
        })

        const { products, total } = res.data.data
        dispatch({
          type: 'SEARCHED',
          payload: { items: products, total }
        })
      })
      .catch((e) => {
        dispatch({
          type: 'SEARCHED',
          payload: { items: [] }
        })
      })
  }
}
