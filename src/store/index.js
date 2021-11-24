import { combineReducers, createStore } from 'redux'

import user from './reducers/user'
import logForm from './reducers/logForm'

const reducers = combineReducers({
    user,
    logForm
})

const store = createStore(reducers)
// store.subscribe(() => {
//     console.log(JSON.stringify(store.getState()))
// })

export default store