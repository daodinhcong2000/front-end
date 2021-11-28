import axios from 'axios';
import axiosInstance from '../axiosInstance';

const url = 'https://accommerce.cuongdm.tech/seller-service/api';


export const getShops = async () => {
    try {
        // axiosInstance(url);
        return  await axios.get(`${url}/shops`) 
    } catch (error) {
        console.log('error while calling login API: ', error);
    }
}

export const postProduct = async (id , data) => {
    try {
        return  await axiosInstance(url).post(`/shops/${id}/products`, data) 
    } catch (error) {
        console.log('error while calling login API: ', error);
    }
}

