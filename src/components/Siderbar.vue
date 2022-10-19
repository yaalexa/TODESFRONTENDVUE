<template>

<div id="content">
     <div class="main-menu menu-fixed menu-accordion menu-shadow expanded menu-light">
       <nav id="siderbar">
         <div class="siderbar-header">
          <b-img class="icon" :src="require('@/assets/lgtb.png')" fluid></b-img>
           
         
        </div>

           <ul>
               <li>
                    <router-link to="/MostrarIncidencias">Incidencias</router-link>
                   <a></a>         
               </li>
               <li>
                    <router-link to="/MostrarEventos">Eventos</router-link>
                    <a></a>
               </li>
               <li>
                    <router-link to="/MostrarReportes">Reportes</router-link>
                    <a></a>
               </li>
               <li>
                    <router-link to="/MostrarNoticias">Noticias</router-link>
                    <a></a>
               </li>
               <li class="nav-item has-sub open">
                    <a href="#" target="_self" class="d-flex align-items-center">
                         <svg class="edit-noticias">
                              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                              <circle cx="12" cy="7" r="4">
                                  </circle>
                         </svg> 
                         <span class="menu-title text-truncate">User</span> 
                         <!---->
                         
                    </a> 
                    <ul class="menu-content collapse show">
                         <li class="nav-item">
                              <a href="" class="d-flex align-items-center">
                                   <svg width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-circle">
                                        <circle cx="12" cy="12" r="10"></circle>
                                   </svg> 
                              <span class="menu-title text-truncate">List-Noticias</span>
                               <!---->
                              </a>
                         </li>
                     </ul>
               </li>  
               <li>
               <b-dropdown-item href="/VerEventos">Ver Eventos</b-dropdown-item>
                     <b-dropdown-item href="/Mostrarcategorias">Ver  Categorias</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                  </li>
               <li>
                    
                    <a>Usuario</a>
               </li>
               <li>
                    <a>Roles</a>
               </li>
           </ul>
           <div class="ps__rail-y" style="top: 586px; height: 247px; right: 0px;"><div class="ps__thumb-y" tabindex="0" style="top: 83px; height: 35px;"></div></div>
      </nav>
     
     </div>
   </div>


 
 </template>
 <style>
 #content{
    
    margin: 0;
    padding: 0;

 }
 #siderbar
 {
     width: 20%;
     height: 100vh;
     background-color: #283046;
     float: left;
 }
 .navigation li {
    position: relative;
    white-space: nowrap;
}
li {
    display: list-item;
    text-align: -webkit-match-parent;
}
.main-menu ul {
    list-style: none;
}
.navigation {
    font-size: 1.1rem;
    font-family: Montserrat,Helvetica,Arial,serif;
    font-weight: 400;
    overflow-y: hidden;
}
 .dark-layout .main-menu {
    background-color: #283046;
}
.edit-noticias
{
     width:"14px" ;
     height:"14px" ;
     fill:"none" ;
     stroke:"currentColor" ;
     stroke-width:"2" 
     ;stroke-linecap:"round"; 
     stroke-linejoin:"round" 
}
.main-menu ul.navigation-main {
    padding-bottom: 0.75rem;
}
 </style>