
    <template>

        <div>
            <h1>Categoria</h1>
    
        
            <b-button  variant="warning" @click="NuevaCategoria()">Nueva Categoria</b-button>
    
    
            <b-table :fields="encabezado" :items="categoria">
    
                <template v-slot:cell(eliminar)="data">
                    
                    <b-button variant="danger" @click="EliminarCategoria(data.item.id)">Eliminar</b-button>
                </template>

                <template v-slot:cell(editar)="data">

                <b-button variant="primary" size="sm" @click="editar(data.id)">Editar</b-button>
              
            </template>
            <template v-slot:cell(asignar)="data">
                    
            <b-button @click="show-true" to="/pruebamodal" variant="secondary">asignar</b-button>
            
                </template>
            </b-table>
    
            
        </div>
    </template>
    
    <script>
    
    
    
    import axios from "axios"
    //import { response } from "express";
    // el axios permite  llamar  todas las  apis  que se hayan creado
    export default {
        name: "Mostrarcategorias",
        data() {
            return {
                categoria: [],
                encabezado: [
                    { key: "id", label: "Id" },
                    { key: "nombre", label: "Nombre" },
                    { key: "descripcion", label: "Descripcion" },
                    { key: "editar", label: "Editar" },
                    { key: "eliminar", label: "Eliminar" },
                    { key: "asignar", label: "asignar" }

    
                ],
    
            }
        },
        components: {
    
        },
        mounted() {
            this.getcategorias()
            this.EliminarCategoria(id)
    
        },
    
        methods: {
    
            getcategorias() {
                this.axios.get("http://127.0.0.1:8000/api/categoria").then((response) => {
                    this.categoria = response.data;
                })
            },
    
            NuevaCategoria(){
            this.$router.push('NuevaCategoria')
            },
    
            EliminarCategoria(id) {
                this.axios.delete("http://127.0.0.1:8000/api/categoria/"+id, this.form).then((data) => {
                    console.log(data);
                });
            },
            
           
    
        }
    }
    
    </script>
    
    <style>
    
    </style>