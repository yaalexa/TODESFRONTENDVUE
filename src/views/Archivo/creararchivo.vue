<template>
  <div class="container my-5">
    <b-row>
      <b-col>
        <h1>Formularios</h1>
        <form>
          <b-row>
            <b-col md="3">
              <b-form-input
                type="texto"
                v-model="texto"
                :state="validarTexto"
              ></b-form-input>
            </b-col>
            <b-col md="3">
              <b-form-select v-model="seleccionada" :options="animales">
              </b-form-select>
            </b-col>
          </b-row>
        </form>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Formularios",
  data() {
    return {
      texto: "",
      seleccionada: null,
      radioSeleccion: null,
      check: [],
      radOpciones: [
        {
          value: 1,
          text: "Perro",
        },
        {
          value: 2,
          text: "Gato",
        },
        {
          value: 2,
          text: "Pato",
        },
      ],
      animales: [
        {
          value: null,
          text: "Seleccione un animal",
        },
        {
          value: 1,
          text: "Perro",
        },
        {
          value: 2,
          text: "Gato",
        },
        {
          value: 2,
          text: "Pato",
        },
      ],
    };
  },
  computed: {
    validarTexto() {
      if (this.texto.length < 3 && this.texto.length > 0) {
        return false;
      } else if (this.texto.length == 0) {
        return null;
      } else {
        return true;
      }
    },
  },
};
</script>