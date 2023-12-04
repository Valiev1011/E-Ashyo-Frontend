import axiosClient from "../axios/apiClient";
// import type { ICategory } from "../../types/categoryTypes";
// import type { ICategorySale } from "../../types/categoryTypes";

export const categoryApi = {
  getCategories() {
    // const url = `categorys/all/q?page=${params?.page}&limit=${params?.limit}`;
    const url = `category/get-all`;
    return axiosClient.get(url);
  },
};
