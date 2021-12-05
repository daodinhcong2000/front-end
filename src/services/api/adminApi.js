import { makeAuthRequest } from '../makeApiRequest'
const apiRequest = makeAuthRequest(true)
import query2string from '../../helpers/validating/query2string'
const urlUser = '/user-service/api'
const urlAdmin = '/admin-service/api'

export const getUsers = () => {
  return apiRequest({
    url: `${urlUser}/users`,
    method: 'GET'
  })
}

export const putActiveUser = (idUser, payload) => {
  return apiRequest({
    url: `${urlUser}/users/${idUser}`,
    method: 'PUT',
    data: payload
  })
}

export const deleteUser = (idUser) => {
  return apiRequest({
    url: `${urlUser}/users/${idUser}`,
    method: 'DELETE'
  })
}

export const getShops = (...query) => {
  const queryString = query2string(query)
  return apiRequest({
    url: `${urlAdmin}/shops?${queryString}`,
    method: 'GET'
  })
}

export const putApproved = (idShop, payload) => {
  return apiRequest({
    url: `${urlAdmin}/shops/${idShop}/approval`,
    method: 'PUT',
    data: payload
  })
}
