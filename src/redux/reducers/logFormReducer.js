const logFormInitialState = {
    visible: false,
    logged: false,
    mode: 'login'
}

const logFormReducer = (state = logFormInitialState, action) => {
    switch (action.type) {
        case 'SHOW_LOG_FORM': {
            return { ...state, visible: true }
        }

        case 'HIDE_LOG_FORM': {
            return { ...state, visible: false, mode: 'login' }
        }

        case 'LOG_IN_FORM': {
            return { ...state, logged: true }
        }

        case 'LOG_OUT': {
            return logFormInitialState
        }

        case 'CHANGE_FORM': {
            const { mode } = action.payload
            return { ...state, mode }
        }

        default:
            return state
    }
}

export default logFormReducer