import { addToCart, getCart, removeFromCart, editCartItem } from '../../services/api/customerApi'

export const _getMyCart = () => {
  return (dispatch) => {
    dispatch({
      type: 'LOAD_CART'
    })

    return getCart()
      .then((res) => {
        const { data } = res.data
        dispatch({
          type: 'SET_CART',
          payload: { data }
        })
      })
      .catch((e) => {
        const { status } = e.response
        if (status >= 500) {
          dispatch({
            type: 'CART_ERROR',
            payload: {
              error: 'Lỗi hệ thống, vui lòng thử lại sau!'
            }
          })
        } else {
          const { message } = e.response.data
          dispatch({
            type: 'CART_ERROR',
            payload: {
              error: message
            }
          })
        }
      })
  }
}

export const _addToCart = (productId, size, quantity) => {
  const payload = { product: productId, size, quantity }

  return (dispatch) => {
    dispatch({
      type: 'LOAD_CART'
    })

    return addToCart(payload)
      .then((res) => {
        dispatch(_getMyCart())
      })
      .catch((e) => {
        const { eMessage, message } = e.response.data
        dispatch({
          type: 'CART_ERROR',
          payload: {
            error: message
          }
        })

        if (eMessage.includes('not authorized as customer')) {
          dispatch({
            type: 'SHOW_LOG_FORM'
          })
        }
      })
  }
}

export const _editCartItem = (cartItemId, size, quantity) => {
  const payload = { cartItemId, size, quantity }

  return (dispatch) => {
    dispatch({
      type: 'LOAD_CART'
    })

    return editCartItem(payload)
      .then((res) => {
        dispatch(_getMyCart())
      })
      .catch((e) => {
        const { eMessage, message } = e.response.data
        dispatch({
          type: 'CART_ERROR',
          payload: {
            error: message
          }
        })
      })
  }
}

export const _deleteCartItems = (cartItemIds) => {
  return (dispatch) => {
    dispatch({
      type: 'LOAD_CART'
    })

    return removeFromCart({ cartItemIds })
      .then((res) => {
        dispatch(_getMyCart())
      })
      .catch((e) => {
        const { status } = e.response
        if (status >= 500) {
          dispatch({
            type: 'CART_ERROR',
            payload: {
              error: 'Lỗi hệ thống, vui lòng thử lại sau!'
            }
          })
        } else {
          const { message } = e.response.data
          dispatch({
            type: 'CART_ERROR',
            payload: {
              error: message
            }
          })
        }
      })
  }
}
