<template>
    <h1>Categorias</h1>
</template>

<script>

import axios from "axios"
import DetalleC from "./DetalleC.vue"

export default {
    name: "Mostrarcategorias",
    data() {
        return {
            cate:{
                nombre:"",   // aqui se inicializa lo que  hace la conexion   de html con js
                descripcion:"",
                
            },
            categoria: [],
            encabezado: [
                { key: "id", label: "Id Publicacion" },
                { key: "nombre", label: "Id Categoria" },
                

                { key: "editar", label: "EDITAR" },
                { key: "eliminar", label: "ELIMINAR" },
                { key: "asignar", label: "CREAR" }


            ],
            name: '',
            cat:'',
            nameState: null,
            submittedNames: [],

        }

    }
}

</script>