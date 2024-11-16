import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // para importar el router

import 'bootstrap/dist/css/bootstrap.css';

const app = createApp(App);
app.use(router); // para que Vue use el router
app.mount('#app');