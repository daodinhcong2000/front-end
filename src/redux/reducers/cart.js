const cartInitialState = localStorage.getItem('cart') || []

const cart = (state = cartInitialState, action) => {
    switch (action.type) {
        case 'SET_CART': {
            return action.payload.cart || []
        }

        case 'ADD_TO_CART':
            return state

        case 'REMOVE_FROM_CART':
            return state

        default:
            return state
    }
}

export default cart