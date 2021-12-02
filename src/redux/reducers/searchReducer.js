const searchInitialState = {
    searching: false,
    keyword: '',
    page: 1,
    limit: 20,
    sort: '-sold',
    total: 0,
    items: []
}

const searchReducer = (state = searchInitialState, action) => {
    switch (action.type) {
        case 'SET_KEYWORD': {
            const { keyword } = action.payload
            return { ...state, keyword }
        }

        case 'SEARCHING': {
            return { ...state, searching: true }
        }

        case 'SEARCHED': {
            const { items } = action.payload
            return { ...state, searching: false, items, total: items.length }
        }

        case 'PAGINATION': {
            const { page, limit } = action.payload
            return { ...state, page, limit }
        }

        default:
            return state
    }
}

export default searchReducer