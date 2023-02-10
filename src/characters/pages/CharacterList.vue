<template>
  <div>
    <h1>character list</h1>
  </div>
  <div>
    <card-list/>
  </div>
</template>

<script setup lang="ts">
import CardList from "@/characters/components/CardList.vue";

const props = defineProps<{ show: boolean }>()
</script>

<style scoped>

</style>