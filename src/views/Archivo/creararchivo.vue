<template>
  <div class="hello">
    <input type="file" @change="onFileSelectd"/>
    <button @click="onUpload">Upload</button>
  </div>
</template>
<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "Crear_Eventos",

 
  data() {
    return {
   
    selectedFile:null

    };
  },
  methods: {
  
    onFileSelectd(e){
 
      this.selectedFile =e.target.file[0]
      //console.log(e)
 },

 onUpload(){

  const fd = new FormData()
  fd.append('image',this.selectedFile, this.selectedFile.name)
  this.axios.post("http://127.0.0.1:8000/api/archivoevento",fd)
  .then(res=>{
    console.log(res)
  })
 }
    
    },

   
};
</script>
<style></style>
  