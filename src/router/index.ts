import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: "/:pathMatch(.*)",
  //   name: "VIEW:PAGE_NOT_FOUND",
  //   component: () => import("@/views/ViewError404.vue"),
  // },
  {
    path: "/",
    redirect: "/home",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  next(); // Continue with the navigation
});

export default router;
