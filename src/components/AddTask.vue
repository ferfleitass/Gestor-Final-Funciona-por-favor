<!-- AddTask.vue -->
<template>
    <div>
        <input v-model="newTask" placeholder="Nueva Tarea" />
        <button @click="addTask">Agregar Tarea</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newTask: ""
        };
    },
    methods: {
        addTask() {
            if (this.newTask.trim()) {
                this.$emit("task-added", this.newTask);
                this.newTask = "";
            }
        }
    }
};
</script>