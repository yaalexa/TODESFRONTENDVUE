<template>
 <div class="p-4" id="app">
    <h1>Categoria Asignada</h1>
    <table class="table table-bordered table-dark table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Prioridad</th>
          <!--<th>Publicacion</th>-->
          <th>Categoria</th>
          <th>Descripcion de la Categoria</th>
          <th>Nueva Categoria</th>
        </tr>
      </thead>

      <tbody>
        <tr  v-for="detalle in detalles" :key="detalle.id">
            <td v-text="detalle.id_detalle"></td>
          <!---<td v-text="detalle.Prioridad_detallle"></td>-->
          <td v-text="detalle.nombre_publicacion"></td>
          <td v-text="detalle.Nombresdecategorias"></td>
          <td v-text="detalle.Descripciodecategorias"></td>
          <td ><b-button variant="danger" size="sm" @click="insertar(NuevaCategoria())">Nuevo</b-button>
      </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
    name: "Inicio",
  data() {
    return {
      detalles: null,
    };
  },
  mounted() {
    this.axios.get("http://127.0.0.1:8000/api/detalle_categoria").then((response) => {
        this.detalles = response.data;
      });
  },
  methods: {
    NuevaCategoria() {
      this.$router.push('Mostrarcategorias')
      
    },

    mostrar(){
            this.axios
          .get("http://127.0.0.1:8000/api/publicacion/"+this.$route.params.id)
          .then((data) => {
            this.form.nombre=data.data[0].nombre;
            this.form.descripcion=data.data[0].descripcion;
            this.form.fecha_y_Hora=data.data[0].fecha_y_Hora;
            this.form.lugar=data.data[0].lugar;
            this.form.estado=data.data[0].estado;
            this.form.urlExterna=data.data[0].urlExterna;
            this.form.responsable=data.data[0].responsable;
            this.form.fecha_caducidad=data.data[0].fecha_caducidad;
            this.form.tipo=data.data[0].tipo;

          });
        },
  },
};
</script>