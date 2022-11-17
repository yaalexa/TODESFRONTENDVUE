<template>
    <div>
    
    <h1 class="text-center">Mostar Detalles categoria</h1>
    <hr>
    
    <b-table striped hover class="text-black bg-white" :fields="encabezado" :items="categoria">
    
    <template v-slot:cell(insertar)="row">
    <b-button variant="danger" size="sm" @click="insertar(NuevaCategoria())">Nuevo</b-button>
    <b-button variant="primary" size="sm" @click="editar(editarpublicacion(row.item.id))">Editar</b-button>
    <b-button variant="danger" size="sm" @click="EliminarPublicacion(row.item.id)">Eliminar</b-button>
    </template>
    
    </b-table>
    
    </div>
    </template>
    
    <script>
    
    import Swal from 'sweetalert2'
    import axios from "axios"
    
    //import { response } from "express";
    // el axios permite llamar todas las apis que se hayan creado
    export default {
    name: "MostrarPublicacioneseventos",
    data() {
    return {
    categoria: [],
    encabezado: [
    { key: "id", label: "Id" },
    { key: "prioridad", label: "Prioridad" },
    { key: "id_publicacion", label: "Publicaciones" },
    { key: "id_categoria", label: 'Categorias' },
    
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
    this.EliminarPublicacion(id)
    
    
    },
    
    methods: {
    
    getcategorias() {
    this.axios.get("http://127.0.0.1:8000/api/detalle").then((response) => {
    this.categoria = response.data;
    })
    },
    /*
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
    
    
    
    */
    
    NuevaCategoria() {
    this.$router.push('Nuevapublicacionevento')
    },
    
    editarpublicacion(id) {
    this.$router.push(`editarpublicacion/${id}`)
    },
    
    EliminarPublicacion(id) {
    const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, cancel!',
    reverseButtons: true
    }).then((result) => {
    if (result.isConfirmed) {
    
    this.axios.delete("http://127.0.0.1:8000/api/publicacion/" + id).then((response) => {
    
    this.axios.get("http://127.0.0.1:8000/api/publicacion").then((response) => {
    this.categoria = response.data;
    })
    
    
    this.publicacion = response.data;
    console.log(data)
    
    });
    } else if (
    /* Read more about handling dismissals below */
    result.dismiss === Swal.DismissReason.cancel
    ) {
    }
    })
    
    
    
    }
    
    }
    
    }
    
    </script>
    