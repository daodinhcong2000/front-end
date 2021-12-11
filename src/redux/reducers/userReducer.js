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
    case 'LOAD_USER': {
      const { loading } = action.payload
      return { ...state, loading }
    }

    case 'LOG_IN': {
      const { userId, username, fullName, roles } = action.payload
      return { userId, username, fullName, roles, error: '' }
    }

    case 'LOG_OUT': {
      return userInitialState
    }

    case 'LOG_STATUS': {
      const { status, error } = action.payload
      return { ...state, status, error }
    }

    default:
      return state
  }
}

export default userReducer
