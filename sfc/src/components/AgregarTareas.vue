<script setup>
import { ref } from 'vue';

const emit = defineEmits(['agregar']);

    const inputTarea = ref('');

    function buttonClick() {
        emit('agregar', inputTarea.value);
        inputTarea.value='';
    }
</script>

<template>
    <h2>Agregar nueva tarea</h2>
    <label for="inputTarea">
        Tarea:
        <input type="text" name="inputTarea" v-model="inputTarea">
    </label>
    <button v-show="inputTarea" @click="buttonClick">Agregar</button>
</template>


<style scoped>

</style>