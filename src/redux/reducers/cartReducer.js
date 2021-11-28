const cartInitialState = localStorage.getItem('cart') || []

const cartReducer = (state = cartInitialState, action) => {
    switch (action.type) {
        case 'SET_CART': {
            return action.payload.cart || []
        }

        case 'ADD_TO_CART':
            return state

        case 'REMOVE_FROM_CART':
            return state

        case 'CLEAR_CART': {
            return cartInitialState
        }
        default:
            return state
    }
}

export default cartReducer