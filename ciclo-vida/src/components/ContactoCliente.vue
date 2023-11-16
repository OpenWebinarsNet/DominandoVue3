<script setup>
import { onBeforeMount, onBeforeUnmount, onMounted, onUnmounted } from 'vue';
  //ciclo de vida
  onBeforeMount(()=> console.log('antes del montaje de Contacto'));
  onMounted(()=>console.log('Ya montado Contacto'));
  onBeforeUnmount(()=>console.log('Antes de desmontar Contacto'));
  onUnmounted(()=>console.log('Desmontado Contacto ❌'));
</script>

<template>
    <h1>Contacto</h1>
</template>