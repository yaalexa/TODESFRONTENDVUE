import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import MaterialDashboard from "./material-dashboard";
import axios from 'axios'
import VueAxios from 'vue-axios'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

const appInstance = createApp(App);
appInstance.use(store);
appInstance.use(router);
appInstance.use(MaterialDashboard);
appInstance.use(BootstrapVue3)
appInstance.use(VueAxios, axios)
appInstance.mount("#app");
