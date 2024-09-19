import axiosInstance from './axiosInstance';

export const fetchProducts = async () => {
  const response = await axiosInstance.get('/products');
  return response.data;
};

export const fetchProductById = async (id) => {
  const response = await axiosInstance.get(`/products/${id}`);
  return response.data;
};

// Add more functions as needed
