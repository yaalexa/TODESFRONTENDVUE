<template>
  <div class="primero">
    <div class="segundo">
      <b-container class="formcontent" fluid>
        <div class="fadein">
          <h1> Registro de Usuario </h1>

          <b-img class="icon" :src="require('@/assets/lgtb.png')" fluid></b-img>
        </div>



        <div class="input">
          <b-row class="my-1">
            <b-col sm="1">
              <label>Identificacion</label>
            </b-col>
            <b-col sm="12">
              <b-form-input id="" type="text" v-model="user.identificacion"></b-form-input>
            </b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="1">
              <label>Nombre</label>
            </b-col>
            <b-col sm="12">
              <b-form-input id="" type="text" v-model="user.nombre"></b-form-input>
            </b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="1">
              <label>Apellidos</label>
            </b-col>
            <b-col sm="12">
              <b-form-input id="" type="text" v-model="user.apellidos"></b-form-input>
            </b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="1">
              <label>Genero</label>
            </b-col>
            <b-col sm="12">
              <b-form-input id="" type="text" v-model="user.genero"></b-form-input>
            </b-col>
          </b-row>

          

          <b-row class="my-1">
            <b-col sm="1">
              <label>Correo electronico</label>
            </b-col>
            <b-col sm="12">
              <b-form-input id="" type="email"  v-model="user.email"></b-form-input>
            </b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="1">
              <label>Contraseña</label>
            </b-col>
            <b-col sm="12">
              <b-form-input id="" type="password"  v-model="user.password"></b-form-input>
            </b-col>
          </b-row>

            
          <b-row class="my-1">
            <b-col sm="1">
              <label>Fecha de nacimiento</label>
            </b-col>
            <b-col sm="12">
              <b-form-input id="" type="date"  v-model="user.fecha_nacimiento"></b-form-input>
            </b-col>
          </b-row>

          
          <b-button @click="Registro()" variant="outline-primary">REGISTRARSE</b-button>
        </div>
        


      </b-container>
    </div>

  </div>


</template>
<script>
import axios from "axios"
export default {
   name:"Registrar",
   data(){
       return{
           user:{
            identificacion:"",
               nombre:"",  
               apellidos:"",
               genero:"",
                email:"",
                password:"",
               fecha_nacimiento:"",
           }
         
       }
   },
   methods:{
     Registro(){
        this.axios.post("http://127.0.0.1:8000/api/user_register",this.user).then((data)=>
        {console.log(data);
       

       });
       this.$router.push('/') 
     }
   }
}
</script>


<style>
h1 {
  
  font-size: xx-small;
  font-weight: bolder;
  font-weight:lighter;
  color: #000000;
  list-style-type: inline;
  text-align:center;
  
  
}


.primero {
  display: flex;
  justify-content: center;
}

.segundo {
  display: flex;

  flex-direction: row;
  justify-content: center;
  width: max-content;
  height: max-content;
  padding: 20px;
  border-style: solid;
  border-color: #00ADB5;
  background-color: #00ADB5;


}

.formcontent {

  max-width: 350px;
  border-radius: 30px;
  margin: 20px auto;
  padding: 20px;
  background-color: #eceff1;


}

.link {
  display: flex;
  justify-content: left;
  justify-content: center;
  position: relative;
  font-size: small;
}

.icon {

  float: center;
  width: 30%;
  height: 20%;
  margin: 0;
  padding: 0;
  object-fit: contain;
}
</style>