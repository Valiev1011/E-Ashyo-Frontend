import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "homepage",
      component: () => import("../pages/home/homePage.vue"),
    },
    {
      path: "/product",
      name: "product",
      component: () => import("../pages/product/productPage.vue"),
    },
  ],
});

export default router;
