<script setup>
import {ref, reactive, computed} from 'vue';
  const taller = 'Taller la tuerca 🔧';
  //ref()
  const servicio1 = ref('Básico');
  const servicio2 = ref('Especial');
  //actualizo el valor de servicio2
  servicio2.value='Premium';

  //reactive()
  const repuesto1 = reactive({
    id:1,
    nombre:'filtro de aceite',
    precio:100,
    disponibilidad:true
  });
  //actualizo repuesto1
  repuesto1.disponibilidad=false;

  //propiedad computada
  const evaluarPrecio = computed(()=>{
    return (repuesto1.precio < 120) ? 'Oferta !!!' : 'Precio regular';
  });

  //metodo evaluarDisponibilidad
  const evaluarDisponibilidad = () => {
    return repuesto1.disponibilidad ? '✅' : '❌';
  }
</script>

<template>
  <h1>{{ taller }}</h1>
  <h3>Servicios disponibles</h3>
  <ul>
    <li>{{ servicio1 }}</li>
    <li>{{ servicio2 }}</li>
  </ul>
  <hr>
  <h3>Repuestos</h3>
  <section>
    <p>{{ evaluarDisponibilidad() }}</p>
    <p>{{ repuesto1.nombre }} ... {{ repuesto1.precio }} Euros</p>
    <p>- {{ evaluarPrecio }}</p>
  </section>
</template>

<style scoped>
  h1,h3,p,li{
    font-family: monospace;
  }
  section {
    display:flex;
  }
</style>
