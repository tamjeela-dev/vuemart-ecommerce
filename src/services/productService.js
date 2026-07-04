import axios from "axios";

const API = "https://dummyjson.com/products";

export const getProducts = () => axios.get(API);

export const getProductById = (id) => axios.get(`${API}/${id}`);