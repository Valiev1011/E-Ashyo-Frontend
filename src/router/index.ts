import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "homepage",
      component: () => import("../layouts/MainLayout.vue"),
    },
    {
      path: "/syoma-top",
      name: "syoma_ads",
      component: () => import("../components/ui/AdsTop.vue"),
    },
    {
      path: "/syoma-bottom",
      name: "syoma_ads_bottom",
      component: () => import("../components/ui/AdsBottom.vue"),
    },
    {
      path: "/footer",
      name: "footer",
      component: () => import("../components/footer/TheFooter.vue"),
    },
  ],
});

export default router;
