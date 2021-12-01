import { makeAuthRequest } from "../makeApiRequest"
const apiRequest = makeAuthRequest(true)

const url = '/seller-service/api';
const urlCommon = '/common-service/api';

export const getShops = () => {
    return apiRequest({
        url: `${url}/shops`,
        method: 'GET',
    })
}
export const getProducts = (id) => {
    return apiRequest({
        url: `${urlCommon}/shops/${id}/products`,
        method: 'GET',
    })
}
export const postProduct = (id , payload) => {
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

export const updateProduct = (idShop,idProduct, payload) => {
    return apiRequest({
        url: `${url}/shops/${idShop}/products/${idProduct}`,
        method: 'PUT',
        data: payload
    })
}

export const deleteProduct = (idShop, payload) => {
    return apiRequest({
        url: `${url}/shops/${idShop}/products`,
        method: 'DELETE',
        data: payload
    })
}