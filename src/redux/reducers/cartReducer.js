const cartInitialState = {
  loading: false,
  data: [],
  shops: [],
  items: [],
  error: ''
}

const cartReducer = (state = cartInitialState, action) => {
  switch (action.type) {
    case 'LOADING_CART': {
      return { ...state, loading: true }
    }

    case 'SET_CART': {
      const { data } = action.payload
      const items = data
        .map((shop) => {
          const { _id: shopId, name: shopName, deleteAt: shopDelete, isActive: shopActive, items } = shop
          return items.map((item) => {
            const { _id: cartItemId, quantity, size, product } = item
            const {
              _id: productId,
              name: productName,
              images: productImages,
              price,
              deletedAt: productDelete
            } = product
            const thumbnail = productImages[0]
            return {
              productId,
              productName,
              productDelete: !!productDelete,
              thumbnail,
              price,

              size,
              quantity,

              shopId,
              shopName,
              shopDelete: !!shopDelete,
              shopActive: !!shopActive
            }
          })
        })
        .flat()
      console.log(items)
      return { ...state, data, items }
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
