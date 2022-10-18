<template>

<div>

    <navbar></navbar>
    <siderbar>
      <navbar></navbar>
      
    </siderbar>
      
  
  <section class="vh-100" style="background-color: #00ADB5">

<!--DIV TODO, va a tener todos los eventos-->
<div class="container">
 

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
      <b-button variant="success">Guardar Comentario</b-button>
    </div>
    

    <div>
      <label for="Inline-rating">Calificacion:</label>
      <!--Calificación-->
      <b-form-rating id="rating-inline" inline value="5"></b-form-rating>
    </div>
  </div>

  <!--Div por evento-->
  <div>
    <h1>Segundo evento...</h1>
  </div>

</div>
</section>
</div>
    
</template>

<script>
import axios from 'axios'
    import siderbar from '../../components/Siderbar.vue'
    import navbar from '../../components/Navbar.vue'
      export default{
      name:'Dashboard',
      data(){
      
        return{
          
        }
      },
      
      components:{
        siderbar,
        navbar
      },
      methods:{
        
      },
      computed:{},
      mounted:{}
      } 
</script>