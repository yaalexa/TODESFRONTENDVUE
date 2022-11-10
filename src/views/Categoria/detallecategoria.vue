<template>

    <div>
        <h1>Detalle Categoria</h1>


        <b-button variant="warning" @click="Publicacionevento()">Publicaciones</b-button>
        <b-button variant="warning" @click="Categoria()">Categoria</b-button>

        <div class="mt-3">
            <div v-if="submittedNames.length === 0"></div>
            <ul v-else class="mb-0 pl-3">
                <li v-for="name in submittedNames">{{ name }}</li>
            </ul>
        </div>

        <b-table :fields="encabezado" :items="DetalleCategoria">

            <template v-slot:cell(eliminar)="data">

                <b-button variant="danger" @click="EliminarDetalleCategoria(data.item.id)">Eliminar</b-button>
            </template>

            <template v-slot:cell(editar)="data">

                <b-button variant="primary" size="sm" @click="editarDetallaCategoria(data.id)">Editar</b-button>

            </template>
        </b-table>


    </div>
</template>
    
<script>



import axios from "axios"
//import { response } from "express";
// el axios permite  llamar  todas las  apis  que se hayan creado
export default {
    name: "DetalleCategoria",
    data() {
        return {
            cate:{
                nombre:"",   // aqui se inicializa lo que  hace la conexion   de html con js
                descripcion:"",
                
            },
            DetalleCategoria: [],
            encabezado: [
                { key: "id", label: "Id" },
                { key: "prioridad", label: "Prioridad" },
                { key: "id_publicacion", label: "Publicacion" },
                { key: "id_categoria", label: "Categoria" },
                { key: "editar", label: "Editar" },
                { key: "eliminar", label: "Eliminar" },
                { key: "asignar", label: "asignar" }


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
        this.getconsultamuchos()
        this.Eliminarconsultamuchos(id)

    },

    methods: {

        getconsultamuchos() {
            this.axios.get("http://127.0.0.1:8000/api/consultamuchos").then((response) => {
                this.categoria = response.data;
            })
        },
        Guardarconsultamuchos(){
         this.axios.post("http://127.0.0.1:8000/api/consultamuchos",this.cate).then((data)=>
         {console.log(data);
            
            this.$router.push('/consultamuchos');
        });
      },
    

      Publicacionevento() {
            this.$router.push('/Publicacionevento')
        },
        Categoria() {
            this.$router.push('Categoria')
        },

        EliminarCategoria(id) {
            this.axios.delete("http://127.0.0.1:8000/api/consultamuchos"+id, this.form).then((data) => {
                console.log(data);
            });
        }

    }
}

</script>

<style>

</style>