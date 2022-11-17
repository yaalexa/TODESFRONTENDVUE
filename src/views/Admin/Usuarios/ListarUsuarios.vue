<template>

  <div>
    <thead>   
      <h1 class="text-center">Usuario</h1>
    </thead>
    <hr>
   
      <table>
           <div class="tablacontent">
              <b-table :fields="encabezado" :items="usuario" :itemscope=elementosPorPagina >
<hr>
                  <template v-slot:cell(editar)="row">
                     <b-button variant="warning" @click="AgregarUsuario(AgregarUsuario())">Registrar</b-button>
                     <b-button variant="primary" size="sm" @click="editar(EditarUsuario(row.item.id))">Editar</b-button>
                     <b-button variant="danger" size="sm" @click="EliminarUsuario(row.item.id)">Borrar</b-button>
                  </template>
             </b-table> 
         
          </div>
        
      </table>

  </div>
</template>
    
<script>


import Swal from 'sweetalert2'
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
   

    //this.elementosPorPagina()


  },

  methods: {

    getusuarios() {
      this.axios.get("http://127.0.0.1:8000/api/usuario").then((response) => {
        this.usuario = response.data;
      })
    },

    AgregarUsuario() {
      this.$router.push('/AgregarUsuario')
    },

    EditarUsuario(id){
      this.$router.push(`/EditarUsuario/${id}`)

    },

    //totalPagina() {
      //return Math.ceil(this.encabezado.length / this.elementosPorPagina)

   // },

    EliminarUsuario(id) {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })

      swalWithBootstrapButtons.fire({
        title: 'Seguro desea eliminar registro ?',
        text: "Esta accion no tiene reversa!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, eliminar registro!',
        cancelButtonText: 'No, cancelar!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {

          this.axios.delete("http://127.0.0.1:8000/api/usuario/" + id).then((response) => {

            this.axios.get("http://127.0.0.1:8000/api/usuario").then((response) => {
            this.categoria = response.data;
      })



            this.publicacion = response.data;
            console.log(data)

          });
         
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
         
        }
      })




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