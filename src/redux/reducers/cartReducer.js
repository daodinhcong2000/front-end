const cartInitialState = {
  loading: false,
  items: [],
  error: ''
}

const cartReducer = (state = cartInitialState, action) => {
  switch (action.type) {
    case 'LOADING_CART': {
      return { ...state, loading: true }
    }

    case 'ADD_TO_CART': {
      const { cartItem } = action.payload
      const newItems = state.items
      newItems.push(cartItem)

      return { ...state, items: newItems, loading: false }
    }

    case 'ADD_CART_FAIL': {
      const { error } = action.payload
      return { ...state, error }
    }

    default:
      return state
  }
}

export default cartReducer
