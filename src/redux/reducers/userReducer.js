import { isAuthenticated } from "../../services/makeApiRequest"

const userInitialState = {
    auth: isAuthenticated(),
    username: '',
    fullName: '',
    roles: ['customer'],

    error: ''
}

const userReducer = (state = userInitialState, action) => {
    switch (action.type) {
        case 'LOG_IN': {
            return { ...state, auth: true, error: '' }
        }

        case 'SET_USER': {
            const { username, fullName, roles } = action.payload
            return { auth: true, username, fullName, roles, error: '' }
        }

        case 'LOG_OUT': {
            return { auth: false, username: '', fullName: '', roles: ['customer'], error: '' }
        }

        case 'LOG_ERROR': {
            console.log(action)
            const { error } = action.payload
            return { ...state, error }
        }

        default:
            return state
    }
}

export default userReducer