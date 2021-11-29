import { makeAuthRequest } from "../makeApiRequest"
import * as prefix from './prefix'
import query2string from "../../helpers/validating/query2string"
const apiRequest = makeAuthRequest(false)
const { USER_SERVICE_API, COMMON_SERVICE_API } = prefix

export const register = payload => {
    return apiRequest({
        url: `${USER_SERVICE_API}/users/`,
        method: 'POST',
        data: payload
    })
}

export const login = payload => {
    return apiRequest({
        url: `${USER_SERVICE_API}/users/jwt`,
        method: 'POST',
        data: payload
    })
}

export const getOneProduct = id => {
    return apiRequest({
        url: `${COMMON_SERVICE_API}/shops/${id}`,
        method: 'GET'
    })
}

export const searchProducts = query => {
    const queryString = query2string(query)
    return apiRequest({
        url: `${COMMON_SERVICE_API}/products/?${queryString}}`,
        method: 'GET'
    })
}

export const searchStoreProducts = (store, query) => {
    const queryString = query2string(query)
    return apiRequest({
        url: `${COMMON_SERVICE_API}/shops/${queryString}`
    })
}