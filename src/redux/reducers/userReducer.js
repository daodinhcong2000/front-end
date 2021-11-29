const userInitialState = {
    loading: false,
    status: '',
    username: '',
    fullName: '',
    roles: ['customer'],
    error: ''
}

const userReducer = (state = userInitialState, action) => {
    switch (action.type) {
        case 'LOG_IN': {
            const { username, fullName, roles } = action.payload
            return { username, fullName, roles, error: ''}
        }

        case 'LOG_OUT': {
            return userInitialState
        }

        case 'LOG_STATUS': {
            const { status, error } = action.payload
            return { ...state, status, error }
        }

        case 'LOAD_USER': {
            const { loading } = action.payload
            return { ...state, loading }
        }

        default:
            return state
    }
}

export default userReducer