<template>

    <div>
        <h1>Mostar Publicaciones eventos</h1>
        <b-button @click="NuevaCategoria()">Nueva Categoria</b-button>
        <b-table sticky-header striped hover class="text-black bg-white" :fields="encabezado" :items="categoria">

            <template v-slot:cell(insertar)="data">
                <b-button variant="danger" size="sm" @click="insertar(data.id)">Nuevo</b-button>
            </template>

            <template v-slot:cell(editar)="data">

                <b-button variant="primary" size="sm" @click="insertar(data.id)">Editar</b-button>
                
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

            ],

        }
    },
    components: {

    },
    mounted() {
        this.getcategorias()




    },

    methods: {

        getcategorias() {
            this.axios.get("http://127.0.0.1:8000/api/publicacion").then((response) => {
                this.categoria = response.data;
            })
        },

        NuevaCategoria() {
            this.$router.push('NuevaCategoria')
        }

    }
}

</script>
    
    
    
    