import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RentalConfirmation from '../components/RentalConfirmation.vue';
import PurchaseComplete from "@/views/PurchaseComplete.vue";
import DateRangePicker from "../components/DateRangePicker.vue";

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
      path: "/signup",
      name: "signup",
      component: () => import("../views/SignupView.vue"),
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
    // {
    //   path: "/calendar",
    //   name: "calendar",
    //   component: () => import("../views/CalendarView.vue"),
    // },
    {
      path: "/calendar/:carId",
      name: "calendar",
      component: DateRangePicker,
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
    {
      path: "/manager",
      name: "manager",
      component: () => import("../views/ManagerAccountView.vue")
    },
    {
      path: "/employee",
      name: "employee",
      component: () => import("../views/EmployeeAccountView.vue")
    },
    {
      path: "/rental-confirmation/:carId/:startDate/:endDate",
      name: "RentalConfirmation",
      component: RentalConfirmation,
    },
    {
      path: "/purchase-complete",
      name: "PurchaseComplete",
      component: PurchaseComplete,
    },
  ]
});

export default router;
