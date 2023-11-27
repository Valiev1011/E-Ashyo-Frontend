import { defineStore } from "pinia";
export const cartStore = defineStore("cart", {
  state: () => ({
    items: [],
  }),
  actions: {
    deleteCartItem(id: any) {
      let products = JSON.parse(localStorage.getItem("products") as string);

      const arr = products.filter((obj: any) => {
        if (obj.id == id) {
          return false;
        } else {
          return true;
        }
      });

      localStorage.setItem("products", JSON.stringify(arr));

      this.items = arr;
      return this.items;
    },
    getCart() {
      this.items = JSON.parse(localStorage.getItem("products") as string);
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
