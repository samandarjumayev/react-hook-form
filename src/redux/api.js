import axios from "axios";

const BaseURL = 'https://dummyjson.com/products';
export const ProductsAPI = axios.create({
    baseURL: BaseURL,
    timeout: 8000,
})