const logInitialState = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    username: '',
    password: '',
    rePassword: '',
    address: '',
    email: ''
}

const logForm = (state = logInitialState, action) => {
    switch (action.type) {
        case 'CHANGE_FORM': {
            const { firstName, lastName, phoneNumber, username, password, rePassword, address, email } = action.payload
            return Object.assign(
                state,
                firstName ? { firstName } : {},
                lastName ? { lastName } : {},
                phoneNumber ? { phoneNumber } : {},
                username ? { username } : {},
                password ? { password } : {},
                rePassword ? { rePassword } : {},
                address ? { address } : {},
                email ? { email } : {},
            )
        }

        case 'CLEAR_FORM': {
            return {
                firstName: '',
                lastName: '',
                phoneNumber: '',
                username: '',
                password: '',
                rePassword: '',
                address: '',
                email: ''
            }
        }

        default:
            return state
    }
}

export default logForm