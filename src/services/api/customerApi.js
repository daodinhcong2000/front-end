import { makeAuthRequest } from "../makeApiRequest"
const apiRequest = makeAuthRequest(true)

export const information = ({ query, payload }) => {
    return apiRequest({
        url: '/user-service/api/users/self',
        method: 'GET'
    })
}