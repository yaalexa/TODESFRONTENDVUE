import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Mostrarcategorias from '../views/Categoria/Mostrar.vue'
import NuevaCategoria from '../views/Categoria/NuevaCategoria.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Admin/Dashboard.vue'
import Vereventos from '../views/Admin/Eventos/Vereventos'
import Registrar from '../views/Registrar.vue'

Vue.use(VueRouter)

const routes = [
 

  {
    path: '/',
    name: 'Login',
    component: Login
  },

  {
    path: '/Registrar',
    name: 'Registrar',
    component: Registrar
  },


  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  
  {
    path: '/Vereventos',
    name: 'Vereventos',
    component: Vereventos
  },
  {
    path: '/Mostrarcategorias"',
    name: '/Mostrarcategorias"',
    component: Mostrarcategorias
  },



  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/Mostrarcategorias',
    name:'Mostrarcategorias',
    component:Mostrarcategorias
  },
  {
    path:'/NuevaCategoria',
    name:'NuevaCategoria',
    component:NuevaCategoria
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
