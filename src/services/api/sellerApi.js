import { makeAuthRequest } from '../makeApiRequest'
const apiRequest = makeAuthRequest(true)

const url = '/seller-service/api'
const urlCommon = '/common-service/api'

export const getShops = () => {
  return apiRequest({
    url: `${url}/shops`,
    method: 'GET'
  })
}
export const getProducts = (id) => {
  return apiRequest({
    url: `${urlCommon}/shops/${id}/products`,
    method: 'GET'
  })
}
export const getOrders = (idShop, ...query) => {
  //const queryString = query2string(query)
  return apiRequest({
    url: `${url}/shops/${idShop}/orders?${query}`,
    method: 'GET'
  })
}
export const postProduct = (id, payload) => {
  return apiRequest({
    url: `${url}/shops/${id}/products`,
    method: 'POST',
    data: payload
  })
}

export const postShop = (payload) => {
  return apiRequest({
    url: `${url}/shops`,
    method: 'POST',
    data: payload
  })
}

export const updateProduct = (idShop, idProduct, payload) => {
  return apiRequest({
    url: `${url}/shops/${idShop}/products/${idProduct}`,
    method: 'PUT',
    data: payload
  })
}

export const confirmOrder = (idShop, idOrder) => {
  return apiRequest({
    url: `${url}/shops/${idShop}/orders/${idOrder}/status/confirm`,
    method: 'PUT'
  })
}

export const cancelOrder = (idShop, idOrder) => {
  return apiRequest({
    url: `${url}/shops/${idShop}/orders/${idOrder}/status/cancel`,
    method: 'PUT'
  })
}

export const deleteProduct = (idShop, payload) => {
  return apiRequest({
    url: `${url}/shops/${idShop}/products`,
    method: 'DELETE',
    data: payload
  })
}
