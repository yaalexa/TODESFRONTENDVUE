<template>
  <div>


    <input type="file"
    accept="application/img"
    @changue="imagenObtenidaMetodo"
    name="ruta"
    id="imagen1"
    
    
    
    >
    </div>

</template>

<script>
  export default {

    data(){
      return{

        FormDat
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