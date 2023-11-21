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
      path: "/masonry",
      name: "masonry",
      component: () => import("../components/ui/MasonryBrand.vue"),
    },
    {
      path: "/masonry2",
      name: "masonry2",
      component: () => import("../components/ui/MasonryCategory.vue"),
    },
    {
      path: "/single_product",
      name: "single_product",
      component: () => import("../components/ui/SingleProduct.vue"),
    },
  ],
});

export default router;
