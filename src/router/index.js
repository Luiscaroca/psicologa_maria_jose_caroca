import { createRouter, createWebHashHistory } from "vue-router";
//HEADER
import Inicio from "../views/Inicio.vue";
import AgendarHora from "../views/AgendarHora.vue";
import Blog from "../views/Blog";
import Contacto from "../views/Contacto.vue";
import IniciarSesion from "../views/IniciarSesion.vue";
//FOOTER

//VISTAS

const routes = [
  //RUTAS HEADER
  {
    path: "/",
    name: "inicio",
    component: Inicio,
  },
  {
    path: "/agendar_hora",
    name: "agendarhora",
    component: AgendarHora,
  },
  {
    path: "/blog",
    name: "blog",
    component: Blog,
  },
  {
    path: "/contacto",
    name: "contacto",
    component: Contacto,
  },
  {
    path: "/iniciar_sesion",
    name: "iniciarsesion",
    component: IniciarSesion,
  },
  //FIN RUTAS HEADER
  //RUTAS FOOTER

  //FIN RUTAS FOOTER
  //RUTA NO EXISTENTE REDIRIGE A INICIO
  {
    path: "/:pathMatch(.*)*",
    name: "not_found",
    component: Inicio,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
