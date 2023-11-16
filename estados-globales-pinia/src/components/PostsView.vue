<script setup>
import {usePostsStore} from '../stores/PostsStore';
import PostCard from './PostCard.vue';

const postsStore = usePostsStore();
</script>

<template>
    <PostCard v-for="post in postsStore.posts" :key="post.id" :titulo="post.title" :contenido="post.body" />
    <p>Total posteos: {{ postsStore.calcularCantidad }}</p>
</template>


<style scoped>

</style>