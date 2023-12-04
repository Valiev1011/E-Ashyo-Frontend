import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "homepage",
      component: () => import("../layouts/MainLayout.vue"),
      children: [
        {
          path: "/",
          name: "home",
          component: () => import("../pages/home/homePage.vue"),
        },
        {
          path: "/comparison",
          name: "comparison",
          component: () => import("../pages/product/comparisonPage.vue"),
        },
        {
          path: "/cart",
          name: "cart",
          component: () => import("../pages/cart/cartPage.vue"),
        },
        {
          path: "/ashyo",
          name: "ashyo",
          component: () => import("../pages/product/AboutAshyoPage.vue"),
        },
        {
          path: "/product",
          name: "product",
          component: () => import("../pages/product/ProductsPage.vue"),
        },
        {
          path: "/product-brand",
          name: "product_brand",
          component: () => import("../pages/product/ProductsBrandPage.vue"),
        },
        {
          path: "/single_product",
          name: "singleProduct",
          component: () => import("../pages/product/singleProduct.vue"),
        },
      ],
    },
  ],
});

export default router;
