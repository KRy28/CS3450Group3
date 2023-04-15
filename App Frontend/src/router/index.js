import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/aboutContact",
      name: "aboutContact",
      component: () => import("../views/AboutContactView.vue"),
    },
    {
      path: "/search",
      name: "search",
      component: () => import("../views/SearchView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/details/:id",
      name: "details",  
      component: () => import("../views/DetailView.vue"),
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("../views/CartView.vue"),
    },
    {
      path: "/calendar",
      name: "calendar",
      component: () => import("../views/CalendarView.vue"),
    },
    {
      path: "/list/:make/:model/:minPrice/:maxPrice",
      name: "list",
      component: () => import("../views/CarListView.vue")
    },
    {
      path: "/account",
      name: "account",
      component: () => import("../views/AccountView.vue")
    },
  ]
});

export default router;
