import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/Main/Main.vue";
import DetailPage from "../components/CoinDetail/CoinDetail.vue";
import NotFound from "../components/404/404.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/coin/:id",
      name: "detail",
      component: DetailPage,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
    },
  ],
});

export default router;
