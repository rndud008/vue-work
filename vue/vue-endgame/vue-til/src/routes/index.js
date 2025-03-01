import { createRouter, createWebHistory } from "vue-router";
import { store } from "../store";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    component: () => import("@/views/LoginPage.vue"),
  },
  {
    path: "/signup",
    component: () => import("@/views/SignupPage.vue"),
  },
  {
    path: "/main",
    component: () => import("@/views/MainPage.vue"),
    meta: {
      auth: true,
    },
  },
  {
    path: "/add",
    component: () => import("@/views/PostAddPage.vue"),
    meta: {
      auth: true,
    },
  },
  {
    path: "/post/:id",
    component: () => import("@/views/PostEditPage.vue"),
    meta: {
      auth: true,
    },
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("@/views/NotFoundPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.getters.isLogin) {
    console.log("인증이 필요합니다");
    next("/login");
    return;
  }

  console.log(to);
  // 진입 시점

  next();
  // 다음페이지로 이동.
});

export default router;
