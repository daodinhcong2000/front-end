import { makeAuthRequest } from '../makeApiRequest'
import * as prefix from './prefix'
import query2string from '../../helpers/validating/query2string'
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

export const postComment = (payload) => {
  return apiRequest({
    url: `${CUSTOMER_SERVICE_API}/comments`,
    method: 'POST',
    data: payload
  })
}

export const deleteComment = (idComment) => {
  return apiRequest({
    url: `${CUSTOMER_SERVICE_API}/comments/${idComment}`,
    method: 'DELETE'
  })
}

export const getOrder = (query) => {
  const queryString = query2string(query)
  return apiRequest({
    url: `${CUSTOMER_SERVICE_API}/orders?${queryString}`,
    method: 'GET'
  })
}

export const cancelOrder = (idOrder) => {
  return apiRequest({
    url: `${CUSTOMER_SERVICE_API}/orders/${idOrder}/status/cancel`,
    method: 'PUT'
  })
}

export const confirmOrder = (idOrder) => {
  return apiRequest({
    url: `${CUSTOMER_SERVICE_API}/orders/${idOrder}/status/confirm-received`,
    method: 'PUT'
  })
}
