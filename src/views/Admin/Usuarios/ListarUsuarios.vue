<template>

    <div>
        <h1>Usuarios</h1>
        
        <table class="table table-striped table-bordered table-list">
        
                          
        </table>   
        <div class="panel-heading">
                <div class="row">
                  <div class="col col-xs-6">
                    <h3 class="panel-title">Panel Heading</h3>
                  </div>
                  <div class="col col-xs-6 text-right">
                    <button type="button" class="btn btn-sm btn-primary btn-create">Create New</button>
                  </div>
                </div>
              </div>
              <div class="panel-body">
                <table class="table table-striped table-bordered table-list">
                  <thead>
                    <tr>
                        <th><em class="fa fa-cog"></em></th>
                        <b-button variant="warning" @click="AgregarUsuario()">Registrar Usuario</b-button>
        <b-table :fields="encabezado" :items="usuario" :itemscope=elementosPorPagina></b-table>
                    </tr> 
                  </thead>
                  <tbody>
                          <tr>
                            <td text-aling="center">
                              <a class="btn btn-warning"><em class="fa fa-pencil">editar</em></a>
                              <a class="btn btn-danger"><em class="fa fa-trash"></em>borrar</a>
                            </td>
                           
                          </tr>
                        </tbody>
                </table>
            
              </div>
        <div class="actions">
            <tbody>

               
                              <a class="btn btn-default"><em class="fa fa-pencil"></em></a>
                         
            </tbody>
        </div>
                          
      
    </div>


    
    </template>
    
    <script>
    
    
    
    import axios from "axios"
   
       
    export default {
            name:"ListarUsuarios",
            data(){
              return {
                usuario:[],
                elementosPorPagina:10,
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
    
                this.elementosPorPagina()
                
    
            },
    
            methods:{
    
                getusuarios(){
                    this.axios.get("http://127.0.0.1:8000/api/usuario").then((response)=>
                    {
                       this.usuario=response.data;
                    })
                },
    
                AgregarUsuario(){

                    this.$router.push("/AgregarUsuario")
                    this.$router.push("/AgregarUsuario")
                },

                totalPagina(){
                    return Math.ceil(this.encabezado.length / this.elementosPorPagina)
                }
                
               
            }
        }
    
    </script>
    
    <style>
    
    </style>