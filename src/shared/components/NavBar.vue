<template style="color: white">
  <nav style="color: white">
    <img src="@/assets/logo.svg" alt="Vue Logo" height="50" width="50"/>
    <span>{{ title }}</span>

    <div v-for="link in links"
    :key="link.path">
      <RouterLink
          :to="link.path"
          @click="emitirNuevasRutas(link)"
      >
        {{ link.name }}
      </RouterLink>

    </div>
    <!-- <RouterLink to="/asd">Inicio2</RouterLink>-->
  </nav>
</template>

<script setup lang="ts">
import type {Ruta} from "@/characters/router";

interface Props {
  title?: string;
  title2?: string;
  links: Ruta[];
  showIcon?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  showIcon: true,
  links: () => [],
});
const emits = defineEmits<{
  (event: "emitir-rutas", value: [] | undefined): [];
}>();

const emitirNuevasRutas = function (link: Ruta) {
  // eslint-disable-next-line no-prototype-builtins
  if (link.hasOwnProperty('children')) {
    console.log("emitiendo rutas", link.children)
    emits('emitir-rutas', link.children as [])
  } else if (link.name == "Volver") {
    console.log("emitiendo rutas", link.name)
    emits('emitir-rutas', undefined)
  }
}
</script>

<style scoped>
img {
  margin-left: 20px;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 10px;
  display: flex;
  align-items: center;
}

img {
  margin-right: 5px;
}

span {
  margin-right: 10px;
}

a {
  margin-right: 5px;
  margin-left: 5px;
  font-size: 18px;
}

.router-link-active {
  color: grey !important;
}
</style>
