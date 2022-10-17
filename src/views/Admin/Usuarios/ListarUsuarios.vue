<template>

    <div>
        <h1>Usuarios</h1>
        
        <b-button @click="RegistrarUsuario()">Registrar Usuario</b-button>
        <b-table :fields="encabezado" :items="users">
        </b-table> 
          
      
    </div>
    </template>
    
    <script>
    
    
    
    import axios from "axios"
       
    export default {
            name:"ListarUsuarios",
            data(){
              return {
                users:[],
                encabezado:[
            {key:"id",label:"Id"},
            {key:"identificacion",label:"Documento"},
            {key:"nombre",label:"Nombre"},
            {key:"apellidos",label:"Apellidos"},
            {key:"genero",label:"Genero"},
            {key:"fecha_nacimiento",label:"Fecha de Nacimiento"},
            {key:"email",label:"Correo Electronico"},
            {key:"password",label:"Contraseña"}],
              
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
    
                RegistrarUsuario(){
                    this.$router.push("RegistrarUsuario")
                }
               
            }
        }
    
    </script>
    
    <style>
    
    </style>