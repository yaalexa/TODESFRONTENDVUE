<template>
    <div>
        <h1>Nuevo Usuario</h1>
        <label for="">Documento</label>
        <b-input type="text" v-model="form.identificacion"/><br><br>

        <b-label for="">Nombre</b-label>
        <b-input type="text" v-model="form.nombre"/><br>

        <b-label for="">Apellido</b-label>
        <b-input type="text" v-model="form.apellidos"/><br>

        <b-label for="">Genero</b-label>
        <b-input type="text" v-model="form.genero"/><br>
        

        <b-label for="">Fecha de nacimiento</b-label>
        <b-input type="text" v-model="form.fecha_nacimiento"/><br>

        <b-label for="">Correo</b-label>
        <b-input type="text" v-model="form.email"/><br>

        <b-label for="">Contraseña</b-label>
        <b-input type="text" v-model="form.password"/><br>

        <b-button @click="GuardarUsuario()">GUARDAR</b-button>
    
    
        <!--el v-model es para  hacer la conecion con  el html con el script-->
    </div>
    </template>
    
    <script>
    import axios from "axios"
    import Swal from 'sweetalert2'
    export default {
        name:"AgregarUsuario",
        data(){
            return{
                form:{
                    identificacion:"",
                    nombre:"",
                    apellidos:"",
                    genero:"",
                    fecha_nacimiento:"",
                    email:"",             
                    password:"",
                }
              
            }
        },
        methods:{
          GuardarUsuario(){

             this.axios.post("http://127.0.0.1:8000/api/usuario",this.form).then((data)=>
             {console.log(data);

                
                Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Registro exitoso',
                showConfirmButton: false,
                timer: 1500
                })
            });
          },
              catch(e) {
            console.log(e.response);
               },
        }
    }
    </script>
    
    <style>
    </style>