<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info" >
      <img class="icono" :src="require('@/assets/lgtb.png' )" fluid ></b-img>
      
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          
          <b-nav-item href="Listaeventos">Lista eventos</b-nav-item>
          <b-nav-item href="Noticias">Noticias</b-nav-item>
          <b-nav-item href="Denuncias">Denuncias</b-nav-item>
          <b-nav-item href="Perfil">Perfil</b-nav-item>
          
        </b-navbar-nav>
        
      </b-collapse>
    
    </b-navbar>
  </div>
</template>

<style>
.icono{
  width: 5%;
  height: 10%;
}
</style>