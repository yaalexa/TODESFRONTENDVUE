<template>
  <div>
    <h1>ARCHIVOS</h1>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        <!--- <form action="{{route('archivoevento')}}" method="POST">-->
        <form action="">
          <input type="text" name="file" id="" /><br /><br />
          <select v-model="selected">
            <option disabled value="">Seleccione publicaciones o eventos</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select><br><br>
          <b-button @click="GuardarPublicacion()">REGISTRAR</b-button>
        </form>
      </body>
    </html>
  </div>
</template>

<script>
    import axios from "axios"
    export default {
        name:"AgregarArchivo",
        data(){
            return{
                form:{
                    ruta:"",
                    publicacion:"",
                  
                }
              
            }
        },
        methods:{
          GuardarArchivo(){
             this.axios.post("http://127.0.0.1:8000/api/archivoevento",this.form).then((data)=>
             {console.log(data);
            });
          }
        }
    }
    </script>