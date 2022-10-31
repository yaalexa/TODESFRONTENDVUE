<template>
  <div>
    <h1 class="text-center">Mostar Publicaciones eventos</h1>
    <hr />

    <b-table
      striped
      hover
      class="text-black bg-white"
      :fields="encabezado"
      :items="categoria"
    >
      <template v-slot:cell(insertar)="insertar">
        <b-button variant="danger" size="sm" @click="insertar(NuevaCategoria())"
          >Nuevo</b-button
        >
      </template>

      <template v-slot:cell(editar)="data">
        <b-button variant="primary" size="sm" @click="editarpublicacion(data.item.id)"
          >Editar</b-button
        >
      </template>

      <template v-slot:cell(eliminar)="data">
        <b-button
          variant="danger"
          size="sm"
          @click="EliminarPublicacion(data.item.id)"
          >Eliminar</b-button
        >
      </template>
    </b-table>
  </div>
</template>
    
<script>
import axios from "axios";
import Swal from "sweetalert2";
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
        { key: "fecha_y_Hora", label: "FECHA-HORA" },
        { key: "lugar", label: "Lugar" },
        { key: "estado", label: "Estado" },
        { key: "urlExterna", label: "Url" },
        { key: "responsable", label: "Responsable" },
        { key: "fecha_caducidad", label: "fecha_caducidad" },
        { key: "tipo", label: "Tipo" },

        { key: "insertar", label: "Insertar" },

        { key: "editar", label: "Editar" },

        { key: "eliminar", label: "Eliminar" },
      ],
    };
  },
  components: {},
  mounted() {
    this.getcategorias();
    this.EliminarPublicacion(id);
    this. editarpublicacion(id);
  },

  methods: {
    getcategorias() {
      this.axios
        .get("http://127.0.0.1:8000/api/publicacion")
        .then((response) => {
          this.categoria = response.data;
        });
    },

    NuevaCategoria() {
      this.$router.push("Nuevapublicacionevento");
    },

    EliminarPublicacion(id) {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: false,
      });

      swalWithBootstrapButtons
        .fire({
          title: "¿Está seguro?",
          text: "¡No podrás revertir esto!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Si Borrarlo!",
          cancelButtonText: "No, cancelar!",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
              "¡Eliminado!",
              "Su archivo ha sido eliminado.",
              "success"
            );
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire(
              "Cancelado",
              "Tu archivo  está a salvo :) :)",
              "error"
            );
          }
        });
      this.axios
        .delete("http://127.0.0.1:8000/api/publicacion/" + id)
        .then((response) => {
          this.publicacion = response.data;
          console.log(data);
          window.location.href = "/Publicacionevento";
        });
    },

    editarpublicacion(id)
    {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: false,
      });
      this.axios
        .put("http://127.0.0.1:8000/api/publicacion/"+id)
        .then((response) => {
          this.publicacion = response.data;
          console.log(data);
          window.location.href = "/Publicacionevento";
        });

    }
  },
};
</script>
    
    
    
    