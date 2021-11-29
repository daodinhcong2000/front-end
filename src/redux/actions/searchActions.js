import { searchProducts } from "../../services/api/userApi"

export const _pagination = (page, limit) => {
    return dispatch => {
        dispatch({
            type: 'PAGINATION',
            payload: { page, limit }
        })
    }
}

export const _search = (keyword, page, limit, sort = 'price') => {
    return dispatch => {
        dispatch({
            type: 'SEARCHING',
            payload: { keyword }
        })

        return searchProducts({ search: keyword, page, limit, sort })
            .then(res => {
                const { products } = res.data
                dispatch({
                    type: 'SEARCHED',
                    payload: { items: products }
                })
            })
            .catch(e => {
                dispatch({
                    type: 'SEARCHED',
                    payload: { items: [] }
                })
            })
    }
}