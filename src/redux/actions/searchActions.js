import { searchProducts } from '../../services/api/userApi'

export const _pagination = (page, limit) => {
  return (dispatch) => {
    dispatch({
      type: 'PAGINATION',
      payload: { page, limit }
    })
  }
}

export const _setKeyword = (keyword) => {
  return (dispatch) => {
    dispatch({
      type: 'SET_KEYWORD',
      payload: { keyword }
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
        console.log(res)
        const { products } = res.data.data
        dispatch({
          type: 'SEARCHED',
          payload: { items: products }
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
