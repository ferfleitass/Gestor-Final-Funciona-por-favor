# Vista para obtener tareas de la API

<template>
    <div class="container mt-4">
        <!-- Botón para extraer tareas -->
        <div class="row">
            <div class="col-12 text-center mb-4">
                <button @click="fetchTasks" class="btn btn-primary">Extraer Tareas de la API</button>
            </div>
        </div>

        <!-- Lista de tareas extraídas -->
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <task-list :tasks="tasks" />
            </div>
        </div>
    </div>
</template>

<script>
import TaskList from '../components/TaskList.vue';

export default {
    components: { TaskList },
    data() {
        return {
            tasks: []
        };
    },
    methods: {
        async fetchTasks() {
            const response = await fetch('https://dummyjson.com/todos');
            const data = await response.json();
            this.tasks = data.todos.map(todo => ({ id: todo.id, text: todo.todo }));
        }
    }
};
</script>