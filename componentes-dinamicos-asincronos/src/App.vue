<script setup>
  import {ref} from 'vue';
  import ContactoCliente from './components/ContactoCliente.vue';
  import ProductosCatalogo from './components/ProductosCatalogo.vue';
  import PadreAsync from './components/PadreAsync.vue';

  const opciones = {
    ProductosCatalogo,
    ContactoCliente
  }

  const seleccion = ref('ProductosCatalogo');
</script>

<template>
  <button @click="seleccion='ProductosCatalogo'">Catalogo Productos</button>
  <button @click="seleccion='ContactoCliente'">Formulario de contacto</button>
  <component :is="opciones[seleccion]"></component>
  <hr>
  <PadreAsync />
</template>


<style  scoped>

</style>