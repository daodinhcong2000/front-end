import { makeAuthRequest } from '../makeApiRequest'
import * as prefix from './prefix'
const apiRequest = makeAuthRequest(true)
const { USER_SERVICE_API } = prefix

export const getUserInformation = () => {
  return apiRequest({
    url: `${USER_SERVICE_API}/users/self`,
    method: 'GET'
  })
}
