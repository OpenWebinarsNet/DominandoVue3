<script setup>
</script>

<template>
    <main>
        <slot>
            <!-- aqui se inyecta el codigo html que proviene del padre -->
        </slot>
    </main>
    <footer>
        <slot name="mensaje">
            <!-- aqui se inyectara el html con el mensaje desde el padre -->
        </slot>
    </footer>
</template>

<style scoped>
</style>