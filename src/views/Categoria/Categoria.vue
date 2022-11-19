<template>

    <div>
        <h1 class="text-center">Categoria</h1>

        
        <b-button variant="warning" size="sm" @click="insertar(NuevaCategoria())">Nueva Categoria</b-button>

        <b-table striped hover class="text-black bg-white" :fields="encabezado" :items="categoria">

            <template v-slot:cell(acciones)="row">

                <b-button variant="primary" size="sm" @click="editar(EditarCategoria(row.item.id))">Editar</b-button>
                <b-button variant="danger" size="sm" @click="EliminarCategoria(row.item.id)">Eliminar</b-button>

            </template>
        </b-table>


    </div>
</template>
<script>

import axios from "axios"
import EditarCategoria from "./EditarCategoria.vue"
//import { response } from "express";
// el axios permite  llamar  todas las  apis  que se hayan creado
export default {
    name: "Mostrarcategorias",
    data() {
        return {
            cate:{
                nombre:"",   // aqui se inicializa lo que  hace la conexion   de html con js
                descripcion:"",
                modalShow: false
                
            },

            categoria: [],
            encabezado: [
                { key: "id", label: "Id" },
                { key: "nombre", label: "Nombre" },
                { key: "descripcion", label: "Descripcion" },

                { key: "acciones", label: "Acciones" },


            ],

        }
    },
    components: {

    },
    mounted() {
        this.getcategorias()
        this.EliminarCategoria(id)

    },

    methods: {

        getcategorias() {
            this.axios.get("http://127.0.0.1:8000/api/categoria").then((response) => {
                this.categoria = response.data;
            })
        },

        NuevaCategoria() {

            this.$router.push(`NuevaCategoria`)
        },

        EditarCategoria(id) {

            this.$router.push(`EditarCategoria/${id}`)
        },

        GuardarCategoria() {
            this.axios.post("http://127.0.0.1:8000/api/categoria", this.cate).then((data) => {
                console.log(data);

                this.$router.push('/Categoria');
            });
        },

        EliminarCategoria(id) {
            this.axios.delete("http://127.0.0.1:8000/api/categoria/" + id, this.form).then((data) => {
                console.log(data);
                
            });

        },


    }
}

</script>
    
<style>

</style>