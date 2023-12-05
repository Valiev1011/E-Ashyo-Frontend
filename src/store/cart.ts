import { defineStore } from "pinia";
import { userApi } from "../api/user/userInfoApi";

export const cartStore = defineStore("cart", {
  state: () => ({
    items: [],
    token: "",
    loading: false,
    cart: null,
    error: null,
  }),
  actions: {
    async createCart(payload: any) {
      try {
        this.loading = true;
        const data = await userApi.createCart(payload);
        this.cart = JSON.parse(JSON.stringify(data));
        localStorage.setItem(
          "products",
          JSON.stringify(this.items.push(this.cart))
        );
      } catch (error) {
        this.error = error?.response?.data?.message
          ? error?.response?.data?.message
          : error?.message;
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
    async deleteCartItem(id: any) {
      // this.items = arr;
      try {
        this.loading = true;
        const data = await userApi.deleteItem(id);
        // this.items = JSON.parse(JSON.stringify(data));
      } catch (error) {
        this.error = error?.response?.data?.message
          ? error?.response?.data?.message
          : error?.message;
      } finally {
        this.loading = false;
      }
      // let products = JSON.parse(localStorage.getItem("products") as string);
      this.items = this.items.filter((obj: any) => {
        if (obj.id == id) {
          return false;
        } else {
          return true;
        }
      });
      localStorage.setItem("products", JSON.stringify(this.items));
      // return this.items;
    },
    async getCart() {
      // this.items = JSON.parse(localStorage.getItem("products") as string);
      try {
        this.loading = true;
        const data = await userApi.findOne();
        this.items = JSON.parse(JSON.stringify(data));
      } catch (error) {
        this.error = error?.response?.data?.message
          ? error?.response?.data?.message
          : error?.message;
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
    addItem(id: any) {
      this.items.forEach((item: any) =>
        item.id == id ? item.quantity++ : true
      );
      localStorage.setItem("products", JSON.stringify(this.items));
    },
    removeItem(id: any) {
      this.items.forEach((item: any) =>
        item.id == id ? item.quantity-- : true
      );
      localStorage.setItem("products", JSON.stringify(this.items));
    },
    getItem(id: any) {
      const item = this.items.filter((item: any) =>
        item.id == id ? true : false
      );
      return item;
    },
  },
});
