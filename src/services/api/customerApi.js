import { makeAuthRequest } from '../makeApiRequest'
import * as prefix from './prefix'
const apiRequest = makeAuthRequest(true)
const { USER_SERVICE_API, CUSTOMER_SERVICE_API } = prefix

export const getUserInformation = () => {
  return apiRequest({
    url: `${USER_SERVICE_API}/users/self`,
    method: 'GET'
  })
}

export const addToCart = (payload) => {
  return apiRequest({
    url: `${CUSTOMER_SERVICE_API}/cart-items`,
    method: 'POST',
    data: payload
  })
}

export const getCart = () => {
  return apiRequest({
    url: `${CUSTOMER_SERVICE_API}/cart-items`,
    method: 'GET'
  })
}
