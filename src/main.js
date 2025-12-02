import { createApp } from 'vue'
import App from './App.vue'
//import './registerServiceWorker' //Надо понять, что это за сервис
import PrimeVue from 'primevue/config';
import PrimeVueModules from "@/configs/prime.vue.modules";
import Aura from '@primeuix/themes/aura';
import store from "@/store";
import router from './router'


const app = createApp(App)
//app.use(PrimeVue, PrimeVueModules.options[0]);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: '.p-dark',
            cssLayer: false
        }
    }
});
PrimeVueModules.modules.forEach(component => {
    app.component('Prime'+component.name, component)
})
PrimeVueModules.directives.forEach(directive => {
    app.directive(directive.name, directive.subject)
})
PrimeVueModules.services.forEach(service => {
    app.use(service.name, service.subject)
})
app.use(store);
app.use(router);
app.mount('#app');
