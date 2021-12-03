import thunk from 'redux-thunk'
import { combineReducers, createStore, applyMiddleware } from 'redux'

import userReducer from './reducers/userReducer'
import logFormReducer from './reducers/logFormReducer'
// import cartReducer from './reducers/cartReducer'
import searchReducer from './reducers/searchReducer'

const reducers = combineReducers({
  user: userReducer,
  logForm: logFormReducer,
  // cart: cartReducer,
  search: searchReducer
})

const store = createStore(reducers, applyMiddleware(thunk))
// store.subscribe(() => {
//     console.log(JSON.stringify(store.getState()))
// })

export default store
