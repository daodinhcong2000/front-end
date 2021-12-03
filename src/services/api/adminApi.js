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
