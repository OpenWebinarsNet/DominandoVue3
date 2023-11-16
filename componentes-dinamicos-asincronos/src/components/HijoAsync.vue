<script setup>
const usuarios = [
    {
        id:1,
        name:'Pepe'
    },
    {
        id:2,
        name:'Pipo'
    }]
</script>

<template>
    <h1>Usuarios</h1>
    <p v-for="usuario of usuarios" :key="usuario.id">{{ usuario.name }}</p>
</template>


<style scoped>

</style>