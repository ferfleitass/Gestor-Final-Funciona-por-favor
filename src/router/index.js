// Configuración de Rutas (instalar vue-router --> npm install vue-router)

import { createRouter, createWebHistory } from 'vue-router';
import ManualTasksView from '../views/ManualTasksView.vue';
import ApiTasksView from '../views/ApiTasksView.vue';
import CombinedView from '../views/CombinedView.vue';

const routes = [
    { path: '/manual', component: ManualTasksView },
    { path: '/api', component: ApiTasksView },
    { path: '/combined', component: CombinedView },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;

