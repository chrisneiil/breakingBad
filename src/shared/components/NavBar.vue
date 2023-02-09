<template>
  <nav>
    <img src="@/assets/logo.svg" alt="Vue Logo" height="25" width="25">
    <span>{{title}}</span>
    <span>{{title2}}</span>
    <RouterLink to="/">Inicio</RouterLink>
    <RouterLink to="/about">Sobre</RouterLink>
   <!-- <RouterLink to="/asd">Inicio2</RouterLink>-->
  </nav>
</template>

<script setup lang="ts">

const props = defineProps<{title: string, title2:string}>();

</script>

<style scoped>
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 10px;
  display: flex;
  align-items: flex-start;
}
img {
  margin-right: 5px;
}

span{
  margin-right: 10px;
}
a{
  margin-right: 5px;
}
</style>