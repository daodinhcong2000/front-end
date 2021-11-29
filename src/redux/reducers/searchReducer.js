const searchInitialState = {
    searching: false,
    keyword: '',
    page: 1,
    limit: 20,
    sort: '-views',
    total: 1,
    items: []
}

const searchReducer = (state = searchInitialState, action) => {
    switch (action.type) {
        case 'SEARCHING': {
            const { keyword } = action.payload
            return { ...state, searching: true, keyword }
        }

        case 'SEARCHED': {
            const { items } = action.payload
            return { ...state, searching: false, items }
        }

        case 'PAGINATION': {
            const { page, limit } = action.payload
            return { ...state, page, keyword }
        }

        default:
            return state
    }
}

export default searchReducer