<script setup lang="ts">
import NavBar from "@/shared/components/NavBar.vue";
import router from "@/router";
import type {Ruta} from "@/characters/router";
import {ref} from "vue";
console.log("router", router)

const rutas = ref<Ruta[]>((router.options.routes) as Ruta[])

const cambiarRutas = function (nuevasRutas:Ruta[]|undefined){
  if(typeof nuevasRutas != 'undefined'){
    rutas.value = nuevasRutas
  }else{
    rutas.value = router.options.routes as Ruta[]
  }

}
</script>

<template>

  <div class="wrapper">
    <header style="background: black">
      <NavBar :title="'Titulito owo'" :title2="'title 2 '" :links="rutas" @emitir-rutas="cambiarRutas($event)"/>
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
