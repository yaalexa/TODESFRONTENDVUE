<template>

    <div>
        <h1>Categorias</h1>
        <b-button @click="NuevaCategoria()">Nueva Categoria</b-button>
        <b-button @click="DetalleCategoria()">Detalle Categoria</b-button>


        <b-table :fields="encabezado" :items="categoria">

            <template v-slot:cell(eliminar)="data">
                <button @click="EliminarCategoria(id)" class="btn btn-danger"></button>
                <b-button @click="EliminarCategoria(data.item.id)">Eliminar</b-button>
            </template>
        </b-table>


    </div>
</template>

<script>



import axios from "axios"
import DetalleCategoria from "./DetalleCategoria.vue"
//import { response } from "express";
// el axios permite  llamar  todas las  apis  que se hayan creado
export default {
    name: "Mostrarcategorias",
    data() {
        return {
            categoria: [],
            encabezado: [
                { key: "id", label: "Id" },
                { key: "nombre", label: "Nombre" },
                { key: "descripcion", label: "Descripcion" },
                { key: "eliminar", label: "Eliminar" }

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
            this.$router.push('NuevaCategoria')
        },

        DetalleCategoria(id) {
            this.axios.delete("http://127.0.0.1:8000/api/DetalleCategoria/"+id, this.form).then((data) => {
                console.log(data);
            });
        }

    }
}

</script>

<style>

</style>