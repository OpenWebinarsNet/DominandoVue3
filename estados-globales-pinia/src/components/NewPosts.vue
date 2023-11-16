<script setup>
import { ref } from 'vue';
import { usePostsStore } from '../stores/PostsStore'

const postsStore = usePostsStore();
const titulo = ref('');
const contenido = ref('');
const armarObjeto = () => {
    const nuevoPost = {
        userId:1,
        id: postsStore.calcularCantidad + 1,
        title:titulo.value,
        body:contenido.value
    }
    postsStore.agregarPost(nuevoPost);
}
</script>


<template>
    <div class="card">
        <div class="card-title">
            <label for="titulo">
                Título
                <input v-model='titulo' type="text" placeholder="Soy un titulo">
            </label>
        </div>
        <div class="card-content">
            <label for="contenido">
                Contenido:
                <textarea v-model='contenido' type="text" placeholder="Soy un contenido" />
            </label>
        </div>
        <button @click='armarObjeto()' class="button">Agregar</button>
    </div>
</template>


<style scoped>
.card {
    width: 300px;
    background-color: #f1df1b;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin: 10px auto;
    display:flex;
    flex-direction: column;
}

.card-title {
    color: blueviolet;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
}

.card-content {
    color: darkblue;
    font-size: 16px;
    line-height: 1.5;
    display: flex;
    flex-direction: row;
    align-items:center;
}

.card-content label {
    margin-right: 10px;
    margin: auto;
  }

.button {
    margin: 20px auto;
    padding: 10px 20px;
    border-radius: 20px;
    font-family: monospace;
    background-color: grey;
    color: white;
}
</style>