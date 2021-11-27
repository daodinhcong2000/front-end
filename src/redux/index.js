import { combineReducers, createStore } from 'redux'

import user from './reducers/user'
import logForm from './reducers/logForm'
import search from './reducers/search'
import cart from './reducers/cart'

const reducers = combineReducers({
    user,
    logForm,
    cart
})

const store = createStore(reducers)
store.subscribe(() => {
    console.log(JSON.stringify(store.getState()))
})

export default store