const userInitialState = {
    logged: false,
    username: '',
    user: '',
    roles: ['customer']
}

const user = (state = userInitialState, action) => {
    switch (action.type) {
        case 'LOG_IN': {
            const { token, username, user, roles } = action.payload
            localStorage.setItem('token', token)
            return { logged: true, username, user, roles }
        }

        case 'LOG_OUT':
            localStorage.removeItem('token')
            return {
                logged: false,
                username: '',
                user: '',
                roles: ['customer']
            }

        default:
            return state
    }
}

export default user