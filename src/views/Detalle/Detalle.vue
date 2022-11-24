<template>
<div class="p-4" id="app">
<h1>Detalle Categoria</h1>

<b-button
variant="danger"
size="sm"
@click="NuevaCategoria()"
>Asignar nueva categoria</b-button
>


<table class="table table-bordered table-dark table-striped">

<thead>
<tr>
<th>ID</th>
<th>Prioridad</th>
<!--<th>Publicacion</th>-->
<th>Categoria</th>
<th>Descripcion</th>
</tr>
</thead>
<tbody>
<tr v-for="detalle in detalles" :key="detalle.id">
<td v-text="detalle.id_detalle"></td>
<!---<td v-text="detalle.Prioridad_detallle"></td>-->
<td v-text="detalle.Prioridad_detallle"></td>
<td v-text="detalle.Nombresdecategorias"></td>
<td v-text="detalle.Descripciodecategorias"></td>

</tr>
</tbody>

>
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
  this.axios
  .get(
  "http://127.0.0.1:8000/api/detalle_categoria/" + this.$route.params.id
  )
  .then((response) => {
  
  this.$router.push("editarpublicacion");
  this.detalles = response.data;
  });
  },
  methods: {
  
 
  NuevaCategoria() {
  this.$router.push("/Categoria");
 
  },
  mostrar() {
  alert(thi.$route.params.id);
  this.axios
  .get(
  "http://127.0.0.1:8000/api/detalle_categoria/" + this.$route.params.id
  )
  .then((data) => {});
  },

  
  },
  };
  </script>