import { login } from "../../services/api/userApi"
import { getUserInformation } from "../../services/api/customerApi"
import { isAuthenticated, setToken } from "../../services/makeApiRequest"
import hasPassword from '../../helpers/validating/hashPassword'

export const _login = payload => {
    const { username, password } = payload
    return dispatch => login({
        username: username.toLowerCase(),
        password: hasPassword(password)
    })
        .then(response => {
            const { token } = response.data
            setToken(token)

            dispatch({
                type: 'LOG_IN'
            })
        })
        .catch(e => {
            const { message } = e.response.data
            dispatch({
                type: 'LOG_ERROR',
                payload: { error: message }
            })
        })
}

export const _setUser = async () => {
    if (!isAuthenticated()) { return }

    const response = await getUserInformation().then(res => res.data).catch(e => e.response.data)
    const { success, message, data } = response
    if (!success) return dispatch => {
        dispatch({
            type: 'LOG_ERROR',
            payload: { error: message }
        })
    }

    const { username, firstName, lastName, roles } = data
    return dispatch => {
        dispatch({
            type: 'SET_USER',
            payload: { username, fullName: `${firstName} ${lastName}`, roles }
        })
    }
}