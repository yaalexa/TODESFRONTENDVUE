<template>
    <div class="edwin">
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-img class="icon" :src="require('@/assets/lgtb.png' )" fluid></b-img>
        
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
  
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="Listaeventos">Eventos</b-nav-item>
            <b-nav-item href="Noticias">Noticias</b-nav-item>
            <b-nav-item href="Denuncias">Denuncias</b-nav-item>
            <b-nav-item href="Perfil">Perfil</b-nav-item>
          </b-navbar-nav>
          
        </b-collapse>
      
  
  
  
  
  
      </b-navbar>
      <h1>Lista de eventos</h1>
      <h2>
          cargue lo que retorna la API de Eventos (ARRAY [])
      </h2>
      <div>
          <div class="card">
              <img src="" alt="">
              <h2>titulo del evento</h2>
              <p>
                  descripcion 
              </p>
          </div>   
      </div>
    </div>



  </template>
  
  <style>
  
  </style>
