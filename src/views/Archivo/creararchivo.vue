<template>
  <div>

    <div class="col-md-11">
      <form
                    action="Nuevapublicacionevento"
                    method="POST"
                    enctype="multipart/form-data"
                  >
                    <input
                      id="archivo"
                      name="archivo"
                      type="file"
                      accept="application/img"
                      @change="imagenobtener"
                      required
                      placeholder="url"
                      class="form-control"
                    />
                    <br>
                    <input name="subir" type="submit" value="Subir" />
                  </form>
    </div>

    <br><br>
    <Input label="Text input" type="text" placeholder="url" /><br><br>

    <b-form-select v-model="selected" :options="options"></b-form-select>
 
    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
  </div>


</template>

<script>
  export default {
    data() {
      return {
        selected: null,
        options: [
          { value: null, text: 'Please select an option' },
          { value: 'a', text: 'This is First option' },
          { value: 'b', text: 'Selected Option' },
          { value: { C: '3PO' }, text: 'This is an option with object value' },
          { value: 'd', text: 'This one is disabled', disabled: true }
        ]
      }
    }
  }
</script>