import {defineStore} from 'pinia';
import {ref, computed} from 'vue';
import posteos from '../data/posts.json';

export const usePostsStore = defineStore('PostsStore', ()=>{
    //state - todas las variables son ref
    const posts = ref(posteos);
    //getters - para acceder a valores y aplicar calculos usamos computadas
    const calcularCantidad = computed(()=> posts.value.length);
    //actions - son funciones
    function agregarPost(nuevoPost){
        posts.value.push(nuevoPost);
    }

    return{posts, calcularCantidad, agregarPost}
})
