import { createRouter, createWebHistory } from "vue-router";
// HEADER
import Home from "../views/Home.vue";
// FOOTER

const routes = [
  // RUTAS HEADER
  {
    path: "/",
    name: "home",
    component: Home,
  }, // FIN OTRAS RUTAS
  // RUTAS FOOTER

  // FIN RUTAS FOOTER
  // RUTA NO EXISTENTE REDIRIGE A HOME
  {
    path: "/:pathMatch(.*)*",
    name: "not_found",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
