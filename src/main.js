import Vue from 'vue'
import VueSimpleAlert from "vue-simple-alert"
import App from './App.vue'
import router from './router'
import axios from 'axios'
//import Axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(VueAxios,axios) //
Vue.use(VueAxios,axios) //
Vue.use(IconsPlugin)
Vue.use(VueSimpleAlert)


Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })