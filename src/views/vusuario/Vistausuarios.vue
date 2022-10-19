<template>
  
  
  
  <section class="vh-100" style="background-color: #6f42c1" >

  <!--DIV TODO, va a tener todos los eventos-->
  <div class="container" width="50">
    <navbar></navbar>
    <siderbar>
      <navbar></navbar>
      
    </siderbar>
   

    <!--Div por evento-->
    <div>

      <!--las dos llaves encierran una variable que trae la info desde el script-->
      <h1>{{title}}</h1>

      <div>
        <img src="../../assets/evento1.png" />
      </div>

      <div>
        <label for="Inline-rating">Fecha:</label>
        <!--el v-model llama una variable desde el script-->
        <input disabled type="text" v-model="date">
      </div>

      <div>
        <b-row class="mt-2">
          <b-col sm="2">
            <label for="textarea-default">Descripción:</label>
          </b-col>
          <b-col sm="10">
            <!--el v-model llama una variable desde el script para que llene el text area-->
            <b-form-textarea v-model="textArea" id="textarea-default" disabled></b-form-textarea>
          </b-col>
        </b-row>
      </div>

      <div>
        <b-row class="mt-2">
          <b-col sm="2">
            <label for="textarea-default">Comentarios:</label>
          </b-col>
          <b-col sm="10">
            <!--text area para que el usuario escriba un comentario-->
            <b-form-textarea placeholder="Ingrese sus comentarios" id="textarea-default"></b-form-textarea>
          </b-col>
        </b-row>
        <br>
        <b-button variant="success">Guardar Comentario</b-button>
      </div>
      <br>
      <div>
        <label for="Inline-rating">Calificacion:</label>
        <!--Calificación-->
        <b-form-rating id="rating-inline" inline value="4"></b-form-rating>
      </div>

    

    </div>

    <!--Div por evento-->
    <div>
      <h1>Segundo evento...</h1>
    </div>

  </div>
</section>
</template>

<script>
import axios from 'axios'
import siderbar from '../../components/Siderbar.vue'
    import navbar from '../../components/Navbar.vue'
export default {
    data() {
    return {
      title: "Evento 1"
      ,textArea: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum."
      , date: "16/10/2022 2:00 pm"
    }
  },
  components:{
        siderbar,
        navbar
      },
}
</script>
