<template>

    <div>
        <h1>Categoria</h1>
    
        
        <b-button  variant="warning" @click="NuevaCategoria()">Nueva Categoria</b-button>
          <b-table sticky-header striped hover class="text-black bg-white" :fields="encabezado" :items="categoria">
    
               
                <template v-slot:cell(editar)="data">
    
                    <b-button variant="primary" size="sm" @click="editar(data.id)">Editar</b-button>
                  
                </template>
    
    
                <template v-slot:cell(guardar)="data">
                    <b-button size="sm" @click="guardar(data.id)">Guardar</b-button>
                </template>

    
            </b-table>
      
    </div>
    </template>
    
    <script>
    
    import axios from "axios"
    //import { response } from "express";
    // el axios permite  llamar  todas las  apis  que se hayan creado
        export default {
            name:"Mostrarcategorias",
            data(){
              return {
                categoria:[],
                encabezado:[
            {key:"id",label:"Id"},
            {key:"nombre",label:"Categoria"},
            { key:"descripcion",label:"Descripcion"},
            { key: "editar", label: "Editar" },
            { key: "guardar", label: "Guardar" },
              ]}},
            components:{
    
            },
            mounted(){
                this.getcategorias()
    
                
                
    
            },
    
            methods:{
    
                getcategorias(){
                    this.axios.get("http://127.0.0.1:8000/api/categoria").then((response)=>
                    {
                       this.categoria=response.data;
                    })
                },
    
                 NuevaCategoria(){
                    this.$router.push('NuevaCategoria')
                }
                
               
            }
        }
    </script>