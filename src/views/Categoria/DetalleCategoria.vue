<template>

    <div>
        <h1>Detalle Categoria</h1>

        <b-button variant="warning" @click="Publicacionevento()">Publicaciones</b-button>
        <b-button variant="primary" @click="Categoria()">Categorias</b-button>

        <div class="mt-3">
            <div v-if="submittedNames.length === 0"></div>
            <ul v-else class="mb-0 pl-3">
                <li v-for="name in submittedNames">{{ name }}</li>
            </ul>
        </div>
        <!--<b-modal id="modal-prevent-closing" ref="modal" title="Categoria" @show="resetModal" @hidden="resetModal"
            @GuardarCategoria="handleOk">
            <form ref="form" @submit.stop.prevent="handleSubmit">
                <b-form-group label="Categoria" label-for="name-input" invalid-feedback="Name is required"
                    :state="nameState">

                    <b-form-input id="name-input" v-model="cate.nombre" :state="nameState" required></b-form-input>
                </b-form-group>

                <b-form-group label="Descripcion Categoria" label-for="Descripcion-input"
                    invalid-feedback="Name is required" :state="nameState">

                    <b-form-input id="Descripcion-input" v-model="cate.descripcion" :state="nameState" required></b-form-input>
                </b-form-group>
                <b-button c variant="primary" @click="GuardarCategoria()">REGISTRAR</b-button>
            </form>
        </b-modal> -->

        <b-table :fields="encabezado" :items="categoria">

            <template v-slot:cell(editar)="data">

                <b-button variant="primary" size="sm" @click="editar(data.id)">Editar</b-button>

            </template>
            
        </b-table>


    </div>
</template>
<script>



import axios from "axios"
//import { response } from "express";
// el axios permite  llamar  todas las  apis  que se hayan creado
export default {
    name: "detallecategoria",
    data() {
        return {
            cate:{
                prioridad:"",   // aqui se inicializa lo que  hace la conexion   de html con js
                id_publicacion:"",
                id_categoria:"",

                
            },
            detallecategoria: [],
            encabezado: [
                { key: "id", label: "Id" },
                { key: "prioridad", label: "Prioridad" },
                { key: "id_publicacion", label: "Publicacion" },
                { key: "id_categoria", label: "Categorias" },
                { key: "editar", label: "Editar" },


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
        this.getcategoria()
        this.getpublicacionevento()
        this.getdetallecategoria()

    },

    methods: {

        getcategorias() {
            this.axios.get("http://127.0.0.1:8000/api/consultamuchos").then((response) => {
                this.categorias = response.data;
            })
        },
      Publicacionevento() {
            this.$router.push('Publicacionevento')
        },
        Categoria() {
            this.$router.push('Categoria')
        },
        
        checkFormValidity() {
            const valid = this.$refs.form.checkValidity()
            this.nameState = valid
            return valid
        },
        resetModal() {
            this.name = ''
            this.nameState = null
        },
        handleOk(bvModalEvent) {
            // Prevent modal from closing
            bvModalEvent.preventDefault()
            // Trigger submit handler
            this.handleSubmit()
        },
        handleSubmit() {
            // Exit when the form isn't valid
            if (!this.checkFormValidity()) {
                return
            }
            // Push the name to submitted names
            this.submittedNames.push(this.name)
            // Hide the modal manually
            this.$nextTick(() => {
                this.$bvModal.hide('modal-prevent-closing')
            })
        }


    }
}

</script>
    
<style>

</style>
        

