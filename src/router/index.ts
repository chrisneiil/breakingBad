import { createRouter, createWebHistory } from 'vue-router';
import AboutPage from '@/shared/pages/AboutPage.vue';
import HomePage from '@/shared/pages/HomePage.vue';
import characterId from "@/characters/pages/CharacterId.vue";
import characterList from "@/characters/pages/CharacterList.vue";
import characterSearch from "@/characters/pages/CharacterSearch.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //public
    { path: '/', name: 'home', component: HomePage , props:{show:true}},
    { path: '/about', name: 'about', component: AboutPage, props:{show:true} },

    //characters
    {
      path: "/characters",
      redirect:"characters/list",
      name:"personajes",
      children: [
        {
          path: "/",
          name: "Volver",
          component: HomePage,
          props:{show:true}
        },
        {
          path: "by-id",
          name: "Id personaje",
          component: characterId,
          props:{show:true}
        },
        {
          path: "list",
          name: "Lista de personaje",
          component: characterList,
          props:{show:true}
        },
        {
          path: "search",
          name: "Busqueda de personaje",
          component: characterSearch,
          props:{show:true}
        },
      ],
    }


  ],
});
export default router;
