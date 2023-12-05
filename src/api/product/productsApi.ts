import axiosClient from "../axios/apiClient";
import type { IProduct } from "../../types/productTypes";
import type { IProductSale } from "../../types/productTypes";

export const productApi = {
  lastViewedProducts(): Promise<IProduct[]> {
    // const url = `products/all/q?page=${params?.page}&limit=${params?.limit}`;
    const url = `product/last-view`;
    return axiosClient.get(url);
  },

  productsOnSale(): Promise<IProductSale> {
    // const url = `products/all/q?page=${params?.page}&limit=${params?.limit}`;
    const url = `product/get-sale-products`;
    return axiosClient.get(url);
  },

  getPopularProduct(): Promise<IProduct[]> {
    const url = `product/get-popular`;
    return axiosClient.get(url);
  },

  findOne(id: number | undefined): Promise<IProduct[]> {
    const url = `product/get/${id}`;
    return axiosClient.get(url);
  },

  getBrands(): Promise<Array<object[]>> {
    const url = `brand/get-all`;
    return axiosClient.get(url);
  },

  findProductOnStorage(id: Array<number>) {
    const url = `product/find`;
    console.log(id);
    return axiosClient.post(url, id);
  },

  productSearch(payload: object) {
    const url = `product/search`;
    // console.log(payload);
    return axiosClient.post(url, payload);
  },

  productFilter(payload: object) {
    const url = `product/filter`;
    console.log("buyergachi", payload);
    return axiosClient.post(url, payload);
  },
};
