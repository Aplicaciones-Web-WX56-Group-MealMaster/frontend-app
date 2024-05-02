import { createApp } from 'vue'

import 'primeicons/primeicons.css';
import PrimeVue from 'primevue/config';
import App from './App.vue'
import Toolbar from 'primevue/toolbar';
import Button from 'primevue/button';
import ToastService  from "primevue/toastservice";
import Image from "primevue/image";
import FloatLabel from 'primevue/floatlabel';
import InputText from "primevue/inputtext";
import InputNumber from "primevue/InputNumber";
import InlineMessage from "primevue/InlineMessage";
import "primevue/resources/themes/mdc-light-deeppurple/theme.css"
import Card from "primevue/card";
import Password from "primevue/password";
import Dropdown from "primevue/dropdown";


createApp(App)
    .use(PrimeVue, {ripple:true})
    .component('Toolbar', Toolbar)
    .component('Button', Button)
    .component('Image', Image)
    .component('FloatLabel',FloatLabel)
    .component('InputText',InputText)
    .component('InputNumber', InputNumber)
    .component('InlineMessage', InlineMessage)
    .component('Card', Card)
    .component('Password', Password)
    .component('Dropdown', Dropdown)
    .use(ToastService)
    .mount('#app')