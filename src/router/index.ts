import { createRouter, createWebHistory } from 'vue-router';
import AboutPage from '@/shared/pages/AboutPage.vue';
import HomePage from '@/shared/pages/HomePage.vue';
import {characterRoute} from "@/characters/router";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //public
    { path: '/', name: 'home', component: HomePage },
    { path: '/about', name: 'about', component: AboutPage },

    //characters
    characterRoute,

    // ruta por defecto

  ],
});

export default router;
