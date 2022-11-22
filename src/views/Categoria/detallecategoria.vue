<template>

    <div>
        <h1>Detalle Categoria</h1>

        <b-button variant="warning" @click="Publicacionevento()">Publicaciones</b-button>
        <b-button variant="primary" @click="Categoria()">Categorias</b-button>

        
        <b-table :fields="encabezado" :items="categoria">

            <template v-slot:cell(editar)="data">

                <b-button variant="primary" size="sm" @click="editar(data.id)">Editar</b-button>

            </template>
            
        </b-table>


    </div>
</template>
<script>



import axios from "axios"
//import { response } from "express";
// el axios permite  llamar  todas las  apis  que se hayan creado
export default {
    name: "detallecategoria",
    data() {
        return {
            cate:{
                prioridad:"",   // aqui se inicializa lo que  hace la conexion   de html con js
                id_publicacion:"",
                id_categoria:"",

                
            },
            detallecategoria: [],
            encabezado: [
                { key: "id", label: "Id" },
                { key: "prioridad", label: "Prioridad" },
                { key: "id_publicacion", label: "Publicacion" },
                { key: "id_categoria", label: "Categorias" },
                { key: "editar", label: "Editar" },


            ],
            name: '',
            cat:'',
            nameState: null,
            submittedNames: [],

        }
    },
    components: {

    },
    mounted() {
        this.getcategoria()
        this.getpublicacionevento()
        this.getdetallecategoria()

    },

    methods: {

        getcategorias() {
            this.axios.get("http://127.0.0.1:8000/api/consultamuchos").then((response) => {
                this.categorias = response.data;
            })
        },
      Publicacionevento() {
            this.$router.push('Publicacionevento')
        },
        Categoria() {
            this.$router.push('Categoria')
        }},}

</script>
    
<style>

</style>
        

