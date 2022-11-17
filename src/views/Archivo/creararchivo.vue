<template>
  <div>

    <input type="file" name="image" @change="GetImage">
    <img :src="avatar" alt="Imagenes">
    <a href="#" class="btn btn-success" @click.prevent="upload">Upload</a>
  </div>

</template>

<script>
  export default {

    data(){
      return{

        avatar:null
      }
    },

    methods:{
      GetImage(e){

       let image= e.target.files[0];
       let reader  = new FileReader();
       reader.readAsDataURL(image);
       reader.onload = e =>{
      
        this.avatar = e.target.result
       }
      },

     // axios.post('/upload',{'image':this.avatar})

    }
  }
</script>