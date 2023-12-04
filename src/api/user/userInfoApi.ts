import axiosClient from "../axios/apiClient";
import type { IProduct } from "../../types/productTypes";
import type { IProductSale } from "../../types/productTypes";

export const userApi = {
  createCart(payload: any) {
    const url = `cart`;
    return axiosClient.post(url, payload);
  },

  findOne() {
    const url = `cart`;
    return axiosClient.get(url);
  },

  deleteItem(id: number) {
    const url = `cart/${id}`;
    return axiosClient.delete(url);
  },
};
