<script setup>
defineProps({
    titulo:String,
    contenido:String
})
</script>

<template>
    <section class="card">
        <article class="card-title">
            {{ titulo }}
        </article>
        <article class="card-content">
            {{ contenido }}
        </article>
    </section>
</template>

<style scoped>
.card {
  width: 300px;
  background-color: #f1df1b;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 10px auto;
}

.card-title {
  color: blueviolet;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.card-content {
  color:darkblue;
  font-size: 16px;
  line-height: 1.5;
}
</style>