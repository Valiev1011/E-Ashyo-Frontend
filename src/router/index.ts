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
<<<<<<<<< Temporary merge branch 1
          path: "/comparison",
          name: "comparison",
          component: () => import("../pages/product/comparisonPage.vue"),
=========
          path: "/cart",
          name: "cart",
          component: () => import("../pages/cart/cartPage.vue"),
        },
        {
          path: "/single_product",
          name: "single product",
          component: () => import("../components/ui/SingleProduct.vue"),
>>>>>>>>> Temporary merge branch 2
        },
      ],
    },
  ],
});

export default router;
