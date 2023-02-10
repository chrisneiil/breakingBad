<template>
<div class="d-flex">
  <div class="" v-for="personaje in personajes" :key="personaje.id" >

      <div> {{personaje.name}} </div><img :src="personaje.image">
    </div>
</div>
</template>

<script setup lang="ts">

import axios from "axios";
import {ref} from "vue";

const personajes = ref([])
axios.get('https://rickandmortyapi.com/api/character').then(res =>{
   personajes.value = res.data.results
})
</script>

<style scoped>
  .center{
    display: flex;
    justify-content: center;
  }
  .d-flex{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
</style>