# Formulario para agregar tareas manualmente
# Este componente se encargará de permitir la entrada de tareas manuales

<template>
    <div class="task-form">
        
        <form @submit.prevent="addTask">
            <div class="mb-3">
                <input type="text" v-model="taskText" class="form-control" placeholder="Nueva Tarea" />
            </div>
            <button type="submit" class="btn btn-primary">Agregar Tarea</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            taskText: ''
        };
    },
    methods: {
        addTask() {
            if (this.taskText.trim()) {
                this.$emit('add-task', this.taskText);
                this.taskText = '';
            }
        }
    }
};
</script>