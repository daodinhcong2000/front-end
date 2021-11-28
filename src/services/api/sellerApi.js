
import axiosInstance from '../axiosInstance';

const url = '/seller-service/api';


export const getShops = async () => {
    try {
        console.log("demo");
        return  await axiosInstance.get(`${url}/shops`) 
    } catch (error) {
        console.log('error while calling login API: ', error);
    }
}

export const postProduct = async (id , data) => {
    try {
        return  await axiosInstance.post(`${url}/shops/${id}/products`, data) 
    } catch (error) {
        console.log('error while calling login API: ', error);
    }
}

