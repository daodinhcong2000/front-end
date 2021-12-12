const cartInitialState = {
  edit: 0,
  loading: false,
  data: [],
  shops: [],
  items: [],
  error: ''
}

const cartReducer = (state = cartInitialState, action) => {
  switch (action.type) {
    case 'LOAD_CART': {
      return { ...state, loading: true, error: '' }
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
              deletedAt: productDelete,
              sizes
            } = product

            const thumbnail = productImages[0]
            return {
              productId,
              productName,
              productDelete: !!productDelete,
              thumbnail,
              sizes,
              price,

              size,
              quantity,
              cartItemId,

              shopId,
              shopName,
              shopDelete: !!shopDelete,
              shopActive: !!shopActive
            }
          })
        })
        .flat()
      return { ...state, data, items, loading: false }
    }

    case 'ADD_TO_CART': {
      const { cartItem } = action.payload
      const newItems = state.items
      newItems.push(cartItem)

      return { ...state, items: newItems, loading: false }
    }

    case 'CART_ERROR': {
      const { error } = action.payload
      return { ...state, error, loading: false }
    }

    default:
      return state
  }
}

export default cartReducer
