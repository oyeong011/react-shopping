import axios from 'axios';

const API_URL = "https://fakestoreapi.com/products";

export const getProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("상품을 불러오는 데 실패했습니다:", error);
    throw error;
  }
};