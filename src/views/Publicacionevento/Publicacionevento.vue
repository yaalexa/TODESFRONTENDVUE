<template>

  <div>
    <h1 class="text-center">Mostrar Eventos & Noticias</h1>
    <hr>

    <b-table striped hover class="text-black bg-white" :fields="encabezado" :items="categoria">

      <template v-slot:cell(insertar)="row">
        <b-button variant="danger" size="sm" @click="insertar(NuevaCategoria())">Nuevo</b-button>
        <b-button variant="primary" size="sm" @click="editar(editarpublicacion(row.item.id))">Editar</b-button>
        <b-button variant="danger" size="sm" @click="EliminarPublicacion(row.item.id)">Eliminar</b-button>
        <b-button variant="danger" size="sm" @click="seleccionar(Seleccionarcategoria(row.item.id))">Seleccionar</b-button>
       
      </template>

    </b-table>

  </div>

</template>
    
<script>


import Swal from 'sweetalert2'
import axios from "axios"

//import { response } from "express";
// el axios permite  llamar  todas las  apis  que se hayan creado
export default {
  name: "MostrarPublicacioneseventos",
  data() {
    return {
      categoria: [],
      encabezado: [
        { key: "id", label: "Id" },
        { key: "nombre", label: "Nombre" },
        { key: "descripcion", label: "Descripcion" },
        { key: "fecha_y_Hora", label: 'FECHA-HORA' },
        { key: "lugar", label: 'Lugar' },
        { key: "estado", label: 'Estado' },
        { key: "urlExterna", label: 'Url' },
        { key: "responsable", label: 'Responsable' },
        { key: "fecha_caducidad", label: 'fecha_caducidad' },
        { key: "tipo", label: 'Tipo' },

        { key: "insertar", label: "Insertar" },

        { key: "editar", label: "Editar" },

        { key: "eliminar", label: "Eliminar" },

        { key: "seleccionar", label: "Seleccionar" },

      ],

    }
  },
  components: {

  },
  mounted() {
    this.getcategorias()
    this.EliminarPublicacion(id)



  },

  methods: {

    getcategorias() {
      this.axios.get("http://127.0.0.1:8000/api/publicacion").then((response) => {
        this.categoria = response.data;
      })
    },

    NuevaCategoria() {
      this.$router.push('Nuevapublicacionevento')
    },

    Seleccionarcategoria(id) {
      this.$router.push(`Detalle/${id}`)
    },
    editarpublicacion(id) {
     
      this.$router.push(`editarpublicacion/${id}`)
    },

    EliminarPublicacion(id) {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })

      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {

          this.axios.delete("http://127.0.0.1:8000/api/publicacion/" + id).then((response) => {

            this.axios.get("http://127.0.0.1:8000/api/publicacion").then((response) => {
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
    
    
    
    