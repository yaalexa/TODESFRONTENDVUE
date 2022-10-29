import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Tables from "../views/Tables.vue";
import Profile from "../views/Profile.vue";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";
import Eventos from "../views/Eventos/Tables.vue"
import Categoria from "../views/Categoria/Tables.vue"
import Reportes from "../views/Reportes/Tables.vue"
import Publicacion_Eventos from "../views/Publicaciones_Eventos/Tables.vue"
import Usuario from "../views/Usuario/Tables.vue"
import Roles from "../views/Roles/Tables.vue"
/**/
const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/sign-in",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/tables",
    name: "Tables",
    component: Tables,
  },
 
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: SignUp,
  },

  //ruta eventos
  {
    path: "/eventos",
    name: "Eventos",
    component: Eventos,
  },

   //ruta categoria
   {
    path: "/categoria",
    name: "Categoria",
    component: Categoria,
  },

   //ruta reportes
    {
      path: "/reportes",
      name: "Reportes",
      component: Reportes,
  },

    //ruta publicacion y eventos
    {
      path: "/publicacion_eventos",
      name: "Publicacion_Eventos",
      component: Publicacion_Eventos,
  },

    //ruta usuario
    {
      path: "/usuario",
      name: "Usuario",
      component: Usuario,
  },

      //ruta roles
      {
        path: "/roles",
        name: "Roles",
        component: Roles,
    }

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
