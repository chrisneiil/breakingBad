<script setup lang="ts">
import NavBar from "@/shared/components/NavBar.vue";
import {RouterView} from "vue-router";
</script>

<template>

  <div class="wrapper">
    <header>
      <NavBar :title="'Titulito owo'" :title2="'title 2 '"/>
    </header>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}
</style>
