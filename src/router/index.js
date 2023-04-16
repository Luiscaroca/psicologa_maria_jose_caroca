import { createRouter, createWebHashHistory } from "vue-router";
// HEADER
import Inicio from "../views/Inicio.vue";
import AgendarHora from "../views/AgendarHora.vue";
import Blog from "../views/Blog";
import Contacto from "../views/Contacto.vue";
// OTROS
import Post from "../components/Post.vue";
import NuevoPost from "../views/NuevoPost.vue";
import IniciarSesion from "../views/IniciarSesion.vue";
// FOOTER

const routes = [
  // RUTAS HEADER
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
  // FIN RUTAS HEADER
  // OTRAS RUTAS
  {
    path: "/post/:id",
    name: "post",
    component: Post,
  },
  {
    path: "/post",
    name: "nuevopost",
    component: NuevoPost,
  },
  {
    path: "/iniciar_sesion",
    name: "iniciarsesion",
    component: IniciarSesion,
  },
  // FIN OTRAS RUTAS
  // RUTAS FOOTER

  // FIN RUTAS FOOTER
  // RUTA NO EXISTENTE REDIRIGE A INICIO
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
