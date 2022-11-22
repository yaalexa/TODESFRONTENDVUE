<template>

    <div>
        <h1>Mostrar categorias</h1>
        <b-button @click="NuevaCategoria()">Nueva Categoria</b-button>
        <b-button @click="EliminarCategoria()">Eliminar</b-button>


        <b-table :fields="encabezado" :items="categoria">

            <template v-slot:cell(eliminar)="data">
                <button @click="EliminarCategoria(id)" class="btn btn-danger"></button>
                <b-button @click="EliminarCategoria(data.item.id)">Eliminar</b-button>
                <b-button variant="danger" size="sm" @click="seleccionar(Seleccionarcategoria(data.item.id))">Seleccionar</b-button>
     
       </template>
        </b-table>


    </div>
</template>

<script>



import axios from "axios"
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
                { key: "eliminar", label: "Eliminar" },
                { key: "seleccionar", label: "Seleccionar categoria" }

            ],

        }
    },
    components: {

    },
    mounted() {
        this.getcategorias()
        this.EliminarCategoria(id)
        this.seleccionarcategoria(id)

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

        EliminarCategoria(id) {
            this.axios.delete("http://127.0.0.1:8000/api/categoria/"+id, this.form).then((data) => {
                console.log(data);
            });
        },

        Seleccionarcategoria(id) {
            
      this.axios.post("http://127.0.0.1:8000/api/categoria").then((data)=>
         {console.log(data);
        });

        this.$router.push(`Detalle/${id}`)
    },

    }
}

</script>

<style>

</style>