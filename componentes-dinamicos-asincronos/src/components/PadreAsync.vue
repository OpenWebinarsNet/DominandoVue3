<script setup>
import { defineAsyncComponent, ref } from 'vue';

const AsyncPage = defineAsyncComponent(()=>import('./HijoAsync.vue'));

const activo = ref(false);
</script>

<template>
   <button @click="activo = !activo">Traer componente hijo</button>
   <AsyncPage v-if="activo" />
</template>


<style scoped>

</style>