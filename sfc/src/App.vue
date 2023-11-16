<script setup>
import { ref } from 'vue';
import MostrarTareas from './components/MostrarTareas.vue';
import AgregarTareas from './components/AgregarTareas.vue';
import SlotsComponent from './components/SlotsComponent.vue';

const listaTareas=ref([
  {
    id:1,
    tarea:'Ir al supermercado'
  },
  {
    id:2,
    tarea:'Bañar al perro'
  }
  ])

  const agregarTarea = (nuevaTarea) => {
    listaTareas.value.push({
      id: listaTareas.value.length + 1,
      tarea: nuevaTarea
    })
  }

  const frase='La organizacion vence al tiempo !';
</script>

<template>
  <SlotsComponent>
    <!-- slot sin nombre -->
    <h1>Gestor de tareas</h1>
    <img src="https://lh3.ggpht.com/0jPniuR9EOLXUyYMFLlBKr0Jef_1SyHGsPkoLpDoNey1-rDCYZtXRwgEcZJMz6AWkxE=w300" alt="logo">
    <!-- slot con nombre -->
    <template #mensaje>
      <p>{{ frase }}</p>
    </template>
  </SlotsComponent>
  <MostrarTareas :tareas="listaTareas" titulo="Tareas actuales"/>
  <AgregarTareas @agregar="agregarTarea"/>
</template>

<style scoped>

</style>
