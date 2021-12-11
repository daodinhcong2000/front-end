const userInitialState = {
  loading: false,
  status: '',
  userId: '',
  username: '',
  fullName: '',
  roles: ['customer'],
  error: ''
}

const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case 'LOADING_USER': {
      return { ...state, loading: true }
    }

    case 'LOG_IN': {
      const { userId, username, fullName, roles } = action.payload
      return { loading: false, userId, username, fullName, roles, error: '' }
    }

    case 'LOG_OUT': {
      return userInitialState
    }

    case 'LOG_STATUS': {
      const { status, error } = action.payload
      return { ...state, loading: false, status, error }
    }

    default:
      return state
  }
}

export default userReducer
