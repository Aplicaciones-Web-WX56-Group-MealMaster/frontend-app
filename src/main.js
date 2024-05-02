
import { createApp} from "vue";
import App from './App.vue'

import 'primevue/resources/themes/mdc-light-indigo/theme.css'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'
import PrimeVue from "primevue/config";
import router from "./router/index.js";

import Button from "primevue/button";
import Toolbar from "primevue/toolbar";
import Avatar from "primevue/avatar";
import Sidebar from "primevue/sidebar";


const app = createApp(App);

app.use(PrimeVue, {ripple:true})
app.use(router)
app.component('pv-Button',Button)
app.component('pv-Toolbar', Toolbar)
app.component('pv-Avatar', Avatar)
app.component('pv-Sidebar', Sidebar)
app.mount('#app')