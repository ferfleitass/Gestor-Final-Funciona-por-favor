# Vista para agregar tareas manualmente

<template>
    <div class="container mt-4">
        <div class="row">
            <!-- Título de la vista -->
            <div class="col-12 text-center mb-4">
                <h2>Agregar Tareas Manualmente</h2>
            </div>
        </div>

        <div class="row">
            <!-- Formulario para agregar tareas -->
            <div class="col-md-6 offset-md-3 mb-4">
                <task-form @add-task="addTask" />
            </div>
        </div>

        <div class="row">
            <!-- Lista de tareas -->
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
        }
    }
};
</script>