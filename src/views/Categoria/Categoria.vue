
<template>

    <div>
        <h1>Categoria</h1>


        <b-button variant="warning" @click="NuevaCategoria()">Nueva Categoria</b-button>
        <b-button v-b-modal.modal-prevent-closing>Nueva Categoria</b-button>

        <div class="mt-3">
            <div v-if="submittedNames.length === 0"></div>
            <ul v-else class="mb-0 pl-3">
                <li v-for="name in submittedNames">{{ name }}</li>
            </ul>
        </div>
        <b-modal id="modal-prevent-closing" ref="modal" title="Nueva Categoria" @show="resetModal" @hidden="resetModal"
            @ok="handleOk">
            <form ref="form" @submit.stop.prevent="handleSubmit">
                <b-form-group label="Categoria" label-for="name-input" invalid-feedback="Name is required"
                    :state="nameState">

                    <b-form-input id="name-input" v-model="name" :state="nameState" required></b-form-input>
                </b-form-group>

                <b-form-group label="Descripcion Categoria" label-for="Descripcion-input"
                    invalid-feedback="Name is required" :state="nameState">

                    <b-form-input id="Descripcion-input" v-model="name" :state="nameState" required></b-form-input>
                </b-form-group>
            </form>
        </b-modal>

        <b-table :fields="encabezado" :items="categoria">

            <template v-slot:cell(eliminar)="data">

                <b-button variant="danger" @click="EliminarCategoria(data.item.id)">Eliminar</b-button>
            </template>

            <template v-slot:cell(editar)="data">

                <b-button variant="primary" size="sm" @click="editar(data.id)">Editar</b-button>

            </template>
            <template v-slot:cell(asignar)="data">

                <b-button @click="show - true" to="/pruebamodal" variant="secondary">asignar</b-button>

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
            name: '',
            nameState: null,
            submittedNames: [],

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
            this.$router.push('NuevaCategoria')
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