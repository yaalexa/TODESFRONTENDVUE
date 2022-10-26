import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Mostrarcategorias from '../views/Categoria/Mostrar.vue'
import NuevaCategoria from '../views/Categoria/NuevaCategoria.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Admin/Dashboard.vue'
import Vereventos from '../views/Admin/Eventos/Vereventos'
import Registro from '../views/Registro.vue'
import Categoria from '../views/Categoria/Categoria.vue'

import Publicacionevento from '../views/Publicacionevento/Publicacionevento.vue'
import Nuevapublicacionevento from '../views/Publicacionevento/Nuevapublicacionevento'

import ListarUsuarios from '../views/Admin/Usuarios/ListarUsuarios'
import AgregarUsuario from '../views/Admin/Usuarios/AgregarUsuario.vue'
import CrearUsuario from '../views/Admin/Usuarios/CrearUsuario.vue'


Vue.use(VueRouter)

const routes = [



  {
    path: '/Publicacionevento',
    name: 'Publicacionevento',
    component: Publicacionevento
  },

  {
    path: '/Nuevapublicacionevento',
    name: 'Nuevapublicacionevento',
    component: Nuevapublicacionevento
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
    path: '/Mostrarcategorias',
    name: '/Mostrarcategorias',
    component: Mostrarcategorias
  },
  {
    path: '/Categoria',
    name: '/Categoria',
    component: Categoria
   
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
  },

    {
        path: '/',
        name: 'Login',
        component: Login
    },

    {
        path: '/Registro',
        name: 'Registro',
        component: Registro
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
        path: '/AgregarUsuario"',
        name: '/AgregarUsuario"',
        component: AgregarUsuario
    },

    {
        path: '/ListarUsuarios',
        name: 'ListarUsuarios',
        component: ListarUsuarios
    },

    {
        path: '/CrearUsuario',
        name: 'CrearUsuario',
        component: CrearUsuario
    },


    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: '/Mostrarcategorias',
        name: 'Mostrarcategorias',
        component: Mostrarcategorias
    },
    {
        path: '/NuevaCategoria',
        name: 'NuevaCategoria',
        component: NuevaCategoria
    },

    {
        path: '/ListarUsuarios',
        name: 'ListarUsuarios',
        component: ListarUsuarios
    },    
    {
        path: '/AgregarUsuario"',
        name: '/AgregarUsuario"',
        component: AgregarUsuario
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router