<template>
  <navbar btnBackground="bg-gradient-success" />
  <div
    class="page-header align-items-start min-vh-100"
    style="
      background-image: url('https://images7.alphacoders.com/123/1232952.png');
    "
  >
    <span class="mask bg-gradient-dark opacity-6"></span>
    <div class="container my-auto">
      <div class="row">
        <div class="col-lg-4 col-md-8 col-12 mx-auto">
          <div class="card z-index-0 fadeIn3 fadeInBottom">
            <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div
                class="bg-gradient-success shadow-success border-radius-lg py-3 pe-1"
              >

              <center>
              <div class="logo"><img src="../assets/img/logoTodes.jpg" width="125" height="125"></div>
              </center>

                <h4 class="text-white font-weight-bolder text-center mt-2 mb-0">
                  Registrarse
                </h4>
                
              </div>
            </div>
            <div class="card-body">
              <form role="form" class="text-start mt-3">
                <div class="mb-3">
                  <material-input
                    id="id"
                    type="id"
                    label="Identificacion"
                    name="id"
                  />
                </div>
                <div class="mb-3">
                  <material-input
                    id="name"
                    type="name"
                    label="Nombre"
                    name="name"
                  />
                </div>
                <div class="mb-3">
                  <material-input
                    id="surnames"
                    type="surnames"
                    label="Apellidos"
                    name="surnames"
                  />
                </div>
                <div class="mb-3">
                  <material-input
                    id="password"
                    type="password"
                    label="Contraseña"
                    name="password"
                  />
                </div> 
                 <div class="mb-3">
                  <material-input
                    id="gender"
                    type="gender"
                    label="Genero"
                    name="gender"
                  />
                </div> 
                 <div class="mb-3">
                  <material-input
                    id="birth date"
                    type="birth date"
                    label="Fecha de Nacimiento"
                    name="birth date"
                  />
                </div>  
              
                
                <material-switch id="rememberMe" name="rememberMe"
                  >Recordar</material-switch
                >
                <div class="text-center">
                  <material-button
                    class="my-4 mb-2"
                    variant="gradient"
                    color="success"
                    fullWidth
                    >Registrarse</material-button
                  >
                </div>
                <p class="mt-4 text-sm text-center">
                  Ya tienes una cuenta?
                  <router-link
                    :to="{ name: 'SignIn' }"
                    class="text-success text-gradient font-weight-bold"
                    >Ingresa</router-link
                  >
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import Navbar from "@/examples/PageLayout/Navbar.vue";
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialSwitch from "@/components/MaterialSwitch.vue";
import MaterialButton from "@/components/MaterialButton.vue";
import { mapMutations } from "vuex";

export default {
  name: "sign-up",
  components: {
    Navbar,
    MaterialInput,
    MaterialSwitch,
    MaterialButton,
  },
  beforeMount() {
    this.toggleEveryDisplay();
    this.toggleHideConfig();
  },
  beforeUnmount() {
    this.toggleEveryDisplay();
    this.toggleHideConfig();
  },
  methods: {
    ...mapMutations(["toggleEveryDisplay", "toggleHideConfig"]),
  },
};
</script>
