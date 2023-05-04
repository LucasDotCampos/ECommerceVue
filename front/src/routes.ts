import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Products from "./views/Products.vue";
import Login from "./views/Login.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/produtos",
    name: "Products",
    component: Products,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
