<template>

    <div>
        <h1 class="text-center">Categorias</h1>

        


        <b-table striped hover class="text-black bg-white" :fields="encabezado" :items="categoria">

            <template v-slot:cell(insertar)="row">
                <b-button variant="danger" size="sm" @click="insertar(NuevaCategoria())">Nuevo</b-button>
                <b-button variant="primary" size="sm" @click="editar(EditarCategoria(row.item.id))">Editar</b-button>
                <b-button variant="danger" size="sm" @click="EliminarCategoria(row.item.id)">Eliminar</b-button>
            </template>
            zx

        </b-table>


    </div>
</template>
<script>

import axios from "axios"
import EditarCategoria from "./EditarCategoria.vue"
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
        this.EliminarCategoria(id)

    },

    methods: {

        getcategorias() {
            this.axios.get("http://127.0.0.1:8000/api/categoria").then((response) => {
                this.categoria = response.data;
            })
        },

        NuevaCategoria() {

            this.$router.push(`NuevaCategoria`)
        },

        EditarCategoria(id) {

            this.$router.push(`EditarCategoria/${id}`)
        },

        GuardarCategoria() {
            this.axios.post("http://127.0.0.1:8000/api/categoria", this.cate).then((data) => {
                console.log(data);

                this.$router.push('/Categoria');
            });
        },

        EliminarCategoria(id) {
            this.axios.delete("http://127.0.0.1:8000/api/categoria/" + id, this.form).then((data) => {
                console.log(data);
            });

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