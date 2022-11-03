<template>

  <div>
    <thead>   
          <h1>USUARIOS</h1>
    </thead>
    <div>
            <b-button variant="warning" @click="AgregarUsuario()">Registrar Usuario</b-button>
    </div>
      <table>
        <tbody>
          <div class="tablacontent">
            <tr>      
                <b-table :fields="encabezado" :items="usuario" :itemscope=elementosPorPagina >

                  <template v-slot:cell(editar)="data">

                    <b-button variant="primary" size="sm" @click="editar(data.id)">Editar</b-button>

                  </template>

                  <template v-slot:cell(eliminar)="data">
                    <b-button variant="danger" size="sm" @click="EliminarPublicacion(data.id)">Eliminar</b-button>
                  </template>
                </b-table>
              
            </tr>
          </div>
        </tbody>

      </table>

   


  </div>



</template>
    
<script>
import axios from "axios"
export default {
  name: "ListarUsuarios",
  data() {
    return {
      usuario: [],
      elementosPorPagina: 10,
      encabezado: [
        { key: "id", label: "Id" },
        { key: "identificacion", label: "Documento" },
        { key: "nombre", label: "Nombre" },
        { key: "apellidos", label: "Apellidos" },
        { key: "genero", label: "Genero" },
        { key: "fecha_nacimiento", label: "Fecha de Nacimiento" },
        { key: "email", label: "Correo Electronico" },
        { key: "password", label: "Contraseña" },
        { key: "editar", label: "Editar" },
        { key: "eliminar", label: "Eliminar" }
      ],
    }
  },
  components: {
  },
  mounted() {
    this.getusuarios()
    this.elementosPorPagina()
  },
  methods: {
    getusuarios() {
      this.axios.get("http://127.0.0.1:8000/api/usuario").then((response) => {
        this.usuario = response.data;
      })
    },
    AgregarUsuario() {
      this.$router.push("/AgregarUsuario")
    },
    totalPagina() {
      return Math.ceil(this.encabezado.length / this.elementosPorPagina)
    }
  }
}
</script>
    
<style>
.tablacontent{
  margin: auto;
  margin-left: 180px;
}
</style>