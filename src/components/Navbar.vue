<template>
  <div>
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
  </div>
</template>

<style>

</style>