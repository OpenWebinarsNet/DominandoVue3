<script setup>
const props = defineProps({
    tareas: Array,
    titulo: String
})
//console.log(props.tareas);
</script>

<template>
    <h2>{{props.titulo}}</h2>
    <ul>
        <li v-for="tarea of props.tareas" :key="tarea.id">
            {{ tarea.id }} {{ tarea.tarea }}
        </li>
    </ul>
</template>

<style scoped>

</style>