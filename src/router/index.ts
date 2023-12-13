import { createWebHistory, createRouter } from "vue-router";
import Name from "../views/Name.vue";
import Random from "../views/Random.vue";
import TicTacToe from "../views/TicTacToe.vue";

const routes = [
  { path: "/", component: Name },
  { path: "/about", component: Random },
  { path: "/settings", component: TicTacToe },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;