# Componente individual para cada tarea
# Este componente individual muestra cada tarea en la lista

<template>
    <div class="task-item">
        <span>{{ task.text }}</span>
    </div>
</template>

<script>
export default {
    props: {
        task: Object
    }
};
</script>