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
          path: "/single_product",
          name: "single product",
          component: () => import("../components/ui/SingleProduct.vue"),
        },
      ],
    },
  ],
});

export default router;
