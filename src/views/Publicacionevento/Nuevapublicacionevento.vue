<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <div class="well well-lg">
          <form class="form-horizontal" method="post">
            <fieldset>
              <h1 class="text-center">Registro de Nueva Publicacion</h1>
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
              <div class="form-group">
                <span class="col-md-1 col-md-offset-2 text-center"
                  ><i class="fa fa-user bigicon"></i
                ></span>
                <div class="col-md-11">
                  <input
                    id="fname"
                    name="name"
                    type="datetime-local"
                    placeholder="Descripcion"
                    class="form-control"
                    v-model="form.fecha_y_Hora"
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
                    placeholder="Lugar"
                    class="form-control"
                    v-model="form.lugar"
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
                    placeholder="Estado"
                    class="form-control"
                    v-model="form.estado"
                  />
                </div>
              </div>

              <!--<div class="form-group"> < State Button -->
              <!-- <label for="state_id" class="control-label" >State</label>
        <select class="form-control" id="state_id" v-model="form.estado" >
            <option value="AL">activo</option>
            <option value="AK">inactivo</option>
            
        </select>                    
    </div>-->
              <br /><br /><br />
              <div class="form-group">
                <span class="col-md-1 col-md-offset-2 text-center"
                  ><i class="fa fa-user bigicon"></i
                ></span>

                <div class="col-md-11">
                  <form
                    action="Nuevapublicacionevento"
                    method="POST"
                    enctype="multipart/form-data"
                  >
                    <input
                      id="archivo"
                      name="archivo"
                      type="file"
                      accept="jpg, .jpeg, .png"
                      required
                      placeholder="url"
                      class="form-control"
                    />
                    <br>
                    <input name="subir" type="submit" value="Subir" />
                  </form>
                  <br>
                  <input
                    id="fname"
                    name="name"
                    type="text"
                    placeholder="url"
                    class="form-control"
                    v-model="form.urlExterna"
                  />
                  <br />
                </div>
              </div>
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
                    placeholder="Responsable"
                    class="form-control"
                    v-model="form.responsable"
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
                    placeholder="Responsable"
                    class="form-control"
                    v-model="form.fecha_caducidad"
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
                    type="text"
                    placeholder="Tipo"
                    class="form-control"
                    v-model="form.tipo"
                  />
                </div>
              
              </div>
              <br><br>
              <b-button @click="GuardarPublicacion()">REGISTRAR</b-button>
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
  name: "Nuevapublicacionevento",
  data() {
    return {
      form: {
        nombre: "", // aqui se inicializa lo que  hace la conexion   de html con js
        descripcion: "",
        fecha_y_Hora: "",
        lugar: "",
        estado: "",
        urlExterna: "",
        responsable: "",
        fecha_caducidad: "",
        tipo: "",
      },
    };
  },
  methods: {
    GuardarPublicacion() {
      this.axios
        .post("http://127.0.0.1:8000/api/publicacion", this.form)
        .then((data) => {
          console.log(data);
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

