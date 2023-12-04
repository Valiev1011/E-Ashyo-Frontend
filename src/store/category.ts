import { defineStore } from "pinia";
import { categoryApi } from "../api/category/categoryApi";
// import type { ICategory } from "../types/categoryTypes";
export const useCategoryStore = defineStore("category-category", {
  state: () => ({
    lastCategorys: null,
    loading: false,
    error: "",
    status: null,
    saleCategorys: null,
    popularCategorys: null,
  }),
  actions: {
    async getCategories() {
      try {
        this.loading = true;
        const res = await categoryApi.getCategories();
        // this.lastCategorys = res.data;
        return res;
      } catch (error) {
        this.error = error?.response?.data;
        console.log(error);
        return false;
      } finally {
        this.loading = false;
      }
    },
  },
});
