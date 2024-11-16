# Lista de tareas combinadas
# Este componente muestra todas las tareas combinadas, tanto manuales como de la API

<template>
    <div class="task-list">
        <h3>Lista de Tareas</h3>
        <task-item v-for="task in tasks" :key="task.id" :task="task" />
    </div>
</template>

<script>
import TaskItem from './TaskItem.vue';

export default {
    components: { TaskItem },
    props: {
        tasks: Array
    }
};
</script>