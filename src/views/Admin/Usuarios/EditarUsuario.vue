<template>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="well well-lg">
            <form class="form-horizontal" method="post">
              <fieldset>
                <h1 class="text-center">Actualizar Informacion del Usuario</h1>
                <hr />
  
                              
              
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
                      placeholder="Documento"
                      class="form-control"
                      v-model="form.identificacion"
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
                      placeholder="Apellidos"
                      class="form-control"
                      v-model="form.apellidos"
                    />
                  </div>
                </div>
               
                <br /><br /><br />
              
                <br><br>
                <div class="form-group">
                  <span class="col-md-1 col-md-offset-2 text-center"
                    ><i class="fa fa-user bigicon"></i
                  ></span>
                  <div class="col-md-11">
                    <input
                      id="frname"
                      name="name"
                      type="text"
                      placeholder="Genero"
                      class="form-control"
                      v-model="form.genero"
                    />
                  </div>
                </div>

                <br>
                <div class="form-group">
                  <span class="col-md-1 col-md-offset-2 text-center"
                    ><i class="fa fa-user bigicon"></i
                  ></span>
                  <div class="col-md-11">
                    <input
                      id="fname"
                      name="name"
                      type="date"
                      placeholder="Fecha de Nacimiento"
                      class="form-control"
                      v-model="form.fecha_nacimiento"
                    />
                  </div>
                </div>
                <br><br>  <br>
                <div class="form-group">
                  <span class="col-md-1 col-md-offset-2 text-center"
                    ><i class="fa fa-user bigicon"></i
                  ></span>
                  <div class="col-md-11">
                    <input
                      id="fname"
                      name="name"
                      type="email"
                      placeholder="Correo Electronico"
                      class="form-control"
                      v-model="form.email"
                    />
                  </div>
                
                </div>
                <br><br>
                <b-button @click="Actualizarinformacion()">REGISTRAR</b-button>
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
    name: "AgregarUsuario",
    data() {
      return {
        form: {
          identificacion: "", 
          nombre: "",
          apellidos: "",
          genero: "",
          fecha_nacimiento: "",
          email: "",
         },
      };
    },
    mounted(){
        this.mostrar()
    },
    methods: {
        mostrar(){
            this.axios
          .get("http://127.0.0.1:8000/api/usuario/"+this.$route.params.id)
          .then((data) => {
            this.form.identificacion=data.data[0].identificacion;
            this.form.nombre=data.data[0].nombre;
            this.form.apellidos.data.data[0].apellidos;
            this.form.genero.data[0].genero;
            this.form.fecha_nacimiento=data.data[0].fecha_nacimiento;
            this.form.email=data.data[0].email;
           
           });
        },


        
      Actualizarinformacion() {
        this.axios
          .put("http://127.0.0.1:8000/api/usuario/"+this.$route.params.id,this.form )
          .then((data) => {
            this.$router.push("/ListarUsuarios")
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
  