<template>

<div>
    <h1>Mostar categorias</h1>

    
    <b-button  @click="NuevaCategoria()">Nueva Categoria</b-button>
      <b-table sticky-header striped hover class="text-black bg-white" :fields="encabezado" :items="categoria">

           
            <template v-slot:cell(editar)="data">

                <b-button variant="primary" size="sm" @click="editar(data.id)">Editar</b-button>
              
            </template>


            <template v-slot:cell(eliminar)="data">
                <b-button variant="danger" size="sm" @click="eliminar(data.id)">Eliminar</b-button>
            </template>

           
        </b-table>
  
</div>

</template>

<script>



import axios from "axios"
//import { response } from "express";
// el axios permite  llamar  todas las  apis  que se hayan creado

    export default {
        name:"Mostrarcategorias",
        data(){
          return {
            categoria:[],
            encabezado:[
        {key:"id",label:"Id"},
        {key:"nombre",label:"Categoria"},
        { key:"descripcion",label:"Descripcion"},
        { key:"Nuevo",label:"Nuevo"},
        { key: "editar", label: "Editar" },
        { key: "eliminar", label: "Eliminar" },
          ]}},
        components:{

    },
    mounted() {
        this.getcategorias()
        this.EliminarCategoria()

    },

    methods: {

        getcategorias() {
            this.axios.get("http://127.0.0.1:8000/api/categoria").then((response) => {
                this.categoria = response.data;
            })
        },

        NuevaCategoria() {
            this.$router.push('NuevaCategoria')
        },

        EliminarCategoria() {
            this.axios.delete("http://127.0.0.1:8000/api/categoria/{id}", this.form).then((data) => {
                console.log(data);
            });
        }

    }
}

</script>

<style>

</style>