const userInitialState = {
  loading: false,
  status: '',
  userId: '',
  username: '',
  firstName: '',
  lastName: '',
  fullName: '',
  address: '',
  email: '',
  roles: ['customer'],
  error: ''
}

const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case 'LOADING_USER': {
      return { ...state, loading: true }
    }

    case 'LOG_IN': {
      const { userId, username, firstName, lastName, phoneNumber, email, roles, address } = action.payload
      return {
        loading: false,
        userId,
        username,
        fullName: `${firstName} ${lastName}`,
        roles,
        address,
        error: '',
        phoneNumber,
        email
      }
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
