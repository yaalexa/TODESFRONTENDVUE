<template>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="well well-lg">
            <form class="form-horizontal" method="post">
              <fieldset>
                <h1 class="text-center">Editar Categoria</h1>
                <hr />
  
                <div class="form-group">
                  <span class="col-md-1 col-md-offset-2 text-center"
                    ><i class="fa fa-user bigicon"></i
                  ></span>
                  <div class="col-md-11">
                    <input
                      id="fname"
                      name="name"
                      type="text"
                      placeholder="Nombre"
                      class="form-control"
                      v-model="form.nombre"
                    />
                  </div>
                </div>
                <br /><br /><br />
                <div class="form-group">
                  <span class="col-md-1 col-md-offset-2 text-center"
                    ><i class="fa fa-user bigicon"></i
                  ></span>
                  <div class="col-md-11">
                    <input
                      id="fname"
                      name="name"
                      type="text"
                      placeholder="Descripcion"
                      class="form-control"
                      v-model="form.descripcion"
                    />
                  </div>
                </div>
                <br /><br /><br />

                <b-button @click="ActualizarCategoria()">Actualizar</b-button>
                 
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  import axios from "axios";
   export default {
     name: "NuevaCategoria",
     data() {
       return {
         form: {
           nombre: null, // aqui se inicializa lo que  hace la conexion   de html con js
           descripcion: null,
         },
       };
     },
     mounted(){
         this.mostrar()
     },
     methods: {
         mostrar(){
             this.axios
           .get("http://127.0.0.1:8000/api/categoria/"+this.$route.params.id)
           .then((data) => {
             this.form.nombre=data.data[0].nombre;
             this.form.descripcion=data.data[0].descripcion;
 
           });
         },
 
         
ActualizarCategoria() {
         this.axios
           .put("http://127.0.0.1:8000/api/categoria/"+this.$route.params.id,this.form )
           .then((data) => {
             this.$router.push("/Categoria")
           });
       },
 
       
   
       catch(e) {
         console.log(e.response);
       },
     },
   };
   </script>
   
   <style>
   #fname {
     padding: 1em;
     float: right;
   }
   
   .form-horizontal {
     padding-left: 60%;
   }
   
   .container {
   }
   #freponsable {
     padding: auto;
   }
   </style>
 

