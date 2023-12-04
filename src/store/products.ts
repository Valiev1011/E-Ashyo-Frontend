import { defineStore } from "pinia";
import { productApi } from "../api/product/productsApi";
import type { IProduct } from "../types/productTypes";
export const useAdminProductStore = defineStore("admin-product", {
  state: () => ({
    lastProducts: null,
    loading: false,
    error: "",
    status: null,
    press: false,
    saleProducts: null,
    popularProducts: null,
    liked: [],
    products: [] as IProduct[],
  }),
  actions: {
    async lastViewedProducts() {
      try {
        this.loading = true;
        const res = await productApi.lastViewedProducts();
        // this.lastProducts = res.data;
        return res;
      } catch (error) {
        this.error = error?.response?.data;
        console.log(error);
        return false;
      } finally {
        this.loading = false;
      }
    },
    async productsOnSale() {
      try {
        this.loading = true;
        const res = await productApi.productsOnSale();
        // this.saleProducts = res.data;
        return res;
      } catch (error) {
        this.error = error?.response?.data;
        console.log(error);
        return false;
      } finally {
        this.loading = false;
      }
    },
    async getPopularProduct() {
      try {
        this.loading = true;
        const res = await productApi.getPopularProduct();
        // this.popularProducts = res.;
        console.log(res);
        return res.filter((val) => val != null);
      } catch (error) {
        this.error = error?.response?.data;
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
    async findOne(id: number | undefined) {
      try {
        this.loading = true;
        const res = await productApi.findOne(id);
        // this.popularProducts = res.;
        console.log(res);
        return res;
      } catch (error) {
        this.error = error?.response?.data;
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
    addToLikedProducts(id: number | undefined) {
      this.liked.push({ id: id, like: true });
      console.log("add ishladi");
      localStorage.setItem("likedProducts", JSON.stringify(this.liked));
    },

    removeFromLikedProducts(id: number | undefined) {
      this.liked = this.liked.filter((productId) => productId.id !== id);
      this.products = this.products.filter((product) => product.id !== id);
      console.log("remove ishladi");
      localStorage.setItem("likedProducts", JSON.stringify(this.liked));
    },

    async findProductOnStorage(id: Array<number>) {
      try {
        this.loading = true;
        const products = (await productApi.findProductOnStorage(id)) as
          | IProduct[]
          | any;
        this.products = products;
        return products;
      } catch (error) {
        this.error = error?.response?.data;
      } finally {
        this.loading = false;
      }
    },
  },
});
