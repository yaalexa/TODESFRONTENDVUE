<template>
    <div> Registro de Nueva Publicacion

   
      
            <b-label for="">Nombre</b-label>
            <b-input type="text" v-model="form.nombre" /><br><br>
            <b-label for="">Descripcion</b-label>
            <b-input type="text" v-model="form.descripcion" /><br>
            <b-label for="">Fecha-Hora</b-label>
            <b-input type="text" v-model="form.fecha_y_Hora" /><br>
            <b-label for="">Lugar</b-label>
            <b-input type="text" v-model="form.lugar"/><br>
            <b-label for="">Estado</b-label>
            <b-input type="text" v-model="form.estado" /><br>
            <b-label for="">Url</b-label>
            <b-input type="text" v-model="form.url" /><br>
            <b-label for="">Responsable</b-label>
            <b-input type="text" v-model="form.responsable" /><br>
            <b-label for="">Fecha-Caducidad</b-label>
            <b-input type="text" v-model="form.fecha" /><br>
            <b-label for="">Tipo</b-label>
            <b-input type="text" v-model="form.tipo" /><br>

            <b-button @click="GuardarPublicacion()">REGISTRAR</b-button>
        </div>

   
       
   


</template>

<script>
import axios from "axios"
export default {
    name:"Nuevapublicacionevento",
    data(){
        return{
            form:{
                nombre:"",   // aqui se inicializa lo que  hace la conexion   de html con js
                descripcion:"",
                fecha_y_Hora:"",
                lugar:"",
                estado:"",
                url:"",
                responsable:"",
                fecha:"",
                tipo:"",
               
            }
          
        }
    },
    methods:{
      GuardarPublicacion(){
         this.axios.post("http://127.0.0.1:8000/api/categoria",this.form).then((data)=>
         {console.log(data);
        }
        );
        
      },

      catch(e){
        console.log(e.response)
      }
    }
}
</script>

