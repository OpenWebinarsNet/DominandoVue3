<script setup>
import {onBeforeMount,onMounted,onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted,ref} from 'vue'

//ciclo de vida
  onBeforeMount(()=> console.log('antes del montaje de Producto'));
  onMounted(()=>console.log('Ya montado Producto'));  
  onBeforeUpdate(()=> console.log('antes de actualizar contador: '+contador.value))
  onUpdated(()=> console.log("Actualizado en el DOM. Contador: "+contador.value))
  onBeforeUnmount(()=>console.log('Antes de desmontar Producto'));
  onUnmounted(()=>console.log('Desmontado Producto ❌'));

  const contador = ref(0);
</script>

<template>
    <h1>Lista de productos</h1>
    <p>Cantidad de producto: {{ contador }} unidades</p>
    <button @click="contador++">Agregar</button>
</template>