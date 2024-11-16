# Vista combinada de tareas manuales y de API

<template>
    <div class="container mt-4">
        <!-- Título de la vista -->
        <div class="row">
            <div class="col-12 text-center mb-4">
                <h2>Vista Combinada de Tareas</h2>
            </div>
        </div>

        <!-- Formulario para agregar tareas -->
        <div class="row mb-4">
            <div class="col-md-6 offset-md-3">
                <task-form @add-task="addTask" />
            </div>
        </div>

        <!-- Botón para extraer tareas de la API -->
        <div class="row mb-4">
            <div class="col-12 text-center">
                <button @click="fetchTasks" class="btn btn-primary">Extraer Tareas de la API</button>
            </div>
        </div>

        <!-- Lista de tareas -->
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <task-list :tasks="tasks" />
            </div>
        </div>
    </div>
</template>

<script>
import TaskForm from '../components/TaskForm.vue';
import TaskList from '../components/TaskList.vue';

export default {
    components: { TaskForm, TaskList },
    data() {
        return {
            tasks: []
        };
    },
    methods: {
        addTask(text) {
            this.tasks.push({ id: Date.now(), text });
        },
        async fetchTasks() {
            const response = await fetch('https://dummyjson.com/todos');
            const data = await response.json();
            this.tasks = [...this.tasks, ...data.todos.map(todo => ({ id: todo.id, text: todo.todo }))];
        }
    },
    created() {
        this.fetchTasks();
    }
};
</script>