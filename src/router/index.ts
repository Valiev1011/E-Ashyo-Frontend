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
      ],
    },
  ],
});

export default router;
