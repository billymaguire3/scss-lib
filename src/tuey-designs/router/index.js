import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Typography from "../views/Typography.vue";
import Buttons from "../views/Buttons.vue";
import Cards from "../views/Cards.vue";
import Colors from "../views/Colors.vue";
import GridSystem from "../views/GridSystem.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/typography",
    name: "Typography",
    component: Typography,
  },
  {
    path: "/buttons",
    name: "Buttons",
    component: Buttons,
  },
  {
    path: "/cards",
    name: "Cards",
    component: Cards,
  },
  {
    path: "/colors",
    name: "Colors",
    component: Colors,
  },
  {
    path: "/grid",
    name: "GridSystem",
    component: GridSystem,
  },
];

const router = createRouter({
  history: createWebHistory("/src/tuey-designs/"),
  routes,
});

export default router;
