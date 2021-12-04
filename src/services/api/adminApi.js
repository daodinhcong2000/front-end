import { makeAuthRequest } from '../makeApiRequest'
const apiRequest = makeAuthRequest(true)

const urlUser = '/user-service/api'
const urlCommon = '/common-service/api'

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
