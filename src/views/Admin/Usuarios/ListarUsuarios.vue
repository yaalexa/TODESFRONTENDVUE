<template>

    <div>
        <h1>Lista de Usuarios</h1>
        <b-button @click="NuevoUsuario()">Nuevo Usuario</b-button>
        <b-table :fields="encabezado" :items="categoria">
        </b-table> 
          
      
    </div>
    </template>
    
    <script>
    
    
    
    import axios from "axios"
    //import { response } from "express";
    // el axios permite  llamar  todas las  apis  que se hayan creado
        export default {
            name:"ListarUsuarios",
            data(){
              return {
                categoria:[],
                encabezado:[
            {key:"id",label:"Id"},
            {key:"nombre",label:"Nombre"},
            {key:"apellido",label:"Apellido"},
            {key:"identificacion",label:"Documento"},
            {key:"fecha_nacimiento",label:"Fecha de Nacimiento"},
            {key:"email",label:"Correo Electronico"},
           { key:"password",label:"Contraseña"}],
              
              }},
            components:{
    
            },
            mounted(){
                this.getusuarios()
    
                
                
    
            },
    
            methods:{
    
                getusuarios(){
                    this.axios.get("http://127.0.0.1:8000/api/usuario").then((response)=>
                    {
                       this.usuario=response.data;
                    })
                },
    
                AgregarUsuario(){
                    this.$router.push('AgregarUsuario')
                }
               
            }
        }
    
    </script>
    
    <style>
    
    </style>