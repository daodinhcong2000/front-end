const searchInitialState = ''
const search = (state = searchInitialState, action) => {
    switch (action.type) {
        case 'INPUT_SEARCH':
            return action.payload.content

        case 'CLEAR_SEARCH':
            return ''

        default:
            return state
    }
}

export default search