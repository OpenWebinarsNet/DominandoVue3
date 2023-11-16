<script setup>
import { ref } from 'vue';
import ContactoCliente from './components/ContactoCliente.vue';
import ProductosCatalogo from './components/ProductosCatalogo.vue';

const seleccion = ref('ContactoCliente');

const opciones = {
  ProductosCatalogo,
  ContactoCliente
}
</script>

<template>
  <!-- componentes dinamicos -->
  <button @click="seleccion='ProductosCatalogo'">Productos</button>
  <button @click="seleccion='ContactoCliente'">Contacto</button>
  <component :is="opciones[seleccion]"></component>
</template>

<style scoped>

</style>