import { RouteRecordRaw } from "vue-router";

const Home = () => import("../views/home/index.vue");

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];
