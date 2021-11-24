const userInitialState = {
    username: '',
    user: ''
}

const user = (state = userInitialState, action) => {
    switch (action.type) {
        case 'LOG_IN': {
            const { username, user } = action
            return { username, user }
        }

        case 'LOG_OUT':
            return {
                username: '',
                user: ''
            }

        default:
            return state
    }
}

export default user