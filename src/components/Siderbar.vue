<template>



    <div id="content">
       
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
                 
                    <router-link to="#">Eventos</router-link>
                    
                     
                     <b-dropdown-item href="/VerEventos">Ver Eventos</b-dropdown-item>
                     <b-dropdown-item href="/Mostrarcategorias">Ver  Categorias</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                  </li>
                <li>
                     <router-link to="/MostrarReportes">Reportes</router-link>
                     <a></a>
                </li>
                <li>
                     <router-link to="/MostrarNoticias">Noticias</router-link>
                     <a></a>
                </li>
                <li>
                     
                     <a>Usuario</a>
                </li>
                <li>
                     <a>Roles</a>
                </li>
            </ul>
       </nav>
    </div>
 
 
 </template>
 <style>
 #siderbar
 {
     width: 20%;
     height: 100vh;
     background: #00ADB5;
     float: left;
 }
 </style>