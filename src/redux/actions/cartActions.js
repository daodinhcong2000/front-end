import { addToCart } from '../../services/api/customerApi'

export const _addToCart = (productId, size, quantity) => {
  const payload = { product: productId, size, quantity }

  return (dispatch) => {
    dispatch({
      type: 'LOADING_CART'
    })

    return addToCart(payload)
      .then((res) => {
        dispatch({
          type: 'ADD_TO_CART',
          payload: {
            cartItem: payload
          }
        })
      })
      .catch((e) => {
        const { eMessage, message } = e.response.data
        dispatch({
          type: 'ADD_CART_FAIL',
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
