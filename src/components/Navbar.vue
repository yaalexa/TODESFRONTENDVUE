<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info" >
      <b-img  width="70 px" :src="require('@/assets/logoTodes.png')"></b-img>
      <b-navbar-brand href="#">TODES</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="mx-5">
          <b-nav-item href="#">Eventos</b-nav-item>
          <b-nav-item href="#">Noticias</b-nav-item>
          <b-nav-item href="#">contacto</b-nav-item>
          <b-nav-item href="#">ayuda</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="mr-5">
          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    





    </b-navbar>
  </div>
</template>
<script>
 const QRious = require("../../node_modules/qrious/dist/qrious");
</script>

<style>

</style>