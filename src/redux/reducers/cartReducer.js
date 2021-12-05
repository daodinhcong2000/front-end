const cartInitialState = {
  loading: false,
  items: []
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

    case 'REMOVE_FROM_CART':
      return state

    case 'CLEAR_CART': {
      return cartInitialState
    }

    case 'EDIT_CART': {
      return state
    }

    default:
      return state
  }
}

export default cartReducer
