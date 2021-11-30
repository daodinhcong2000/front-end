const searchInitialState = {
    keyword: '',
    page: 1,
    limit: 20,
    sort: 'price'
}

const searchReducer = (state = searchInitialState, action) => {
    switch (action.type) {
        case 'INPUT_SEARCH':
            return action.payload.content

        case 'CLEAR_SEARCH':
            return searchInitialState

        default:
            return state
    }
}

export default searchReducer