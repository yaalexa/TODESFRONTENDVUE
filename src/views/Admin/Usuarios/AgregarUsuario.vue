<template>
    <div>
        <h1>Nuevo Usuario</h1>
        <label for="">Usuario</label>
    
        <b-input type="text" v-model="form.nombre"/><br><br>
        <b-label for="">Nombre</b-label>
        <b-input type="text" v-model="form.descripcion"/><br>
    
        <b-button @click="GuardarUsuario()">REGISTRAR</b-button>
    
        <!--el v-model es para  hacer la conecion con  el html con el script-->
    </div>
    </template>
    
    <script>
    import axios from "axios"
    export default {
        name:"NuevoUsuario",
        data(){
            return{
                form:{
                    nombre:"",   // aqui se inicializa lo que  hace la conexion   de html con js
                    
                    descripcion:"",
                }
              
            }
        },
        methods:{
          GuardarCategoria(){
             this.axios.post("http://127.0.0.1:8000/api/categoria",this.form).then((data)=>
             {console.log(data);
            });
          }
        }
    }
    </script>
    
    <style>
    </style>