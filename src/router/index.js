import { createRouter, createWebHistory } from "vue-router";
import Transactions from "@/views/transactions/Index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "transactions",
      component: Transactions,
    }
  ],
});

export default router;
